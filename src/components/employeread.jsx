import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const FormularioBusqueda = () => {
  const [nombre, setNombre] = useState('');
  const [resultados, setResultados] = useState([]);
  const apiUrl = 'https://localhost:7194/api/Employes'; 

  const handleChange = (e) => {
    setNombre(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${apiUrl}?nombre=${nombre}`);
      if (!response.ok) {
        throw new Error('Error al obtener los datos');
      }

      const data = await response.json();
      setResultados(data);
    } catch (error) {
      console.error('Error al buscar datos:', error.message);
    }
  };

  return (
    <div style={{display:'flex',alignItems:'center',flexDirection:'column'  }}>
      <form onSubmit={handleSubmit} className='m-3'>
        <Form.Group className="mb-3" >
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" name="nombre" value={nombre} onChange={handleChange} required />
      </Form.Group>
      <Button variant="primary" type="submit"> Enviar</Button>
      </form>

      {resultados.length > 0 && (
        <div>
            <Table striped bordered hover className='w-75' >
            <thead>
        <tr>
          <th>Documento</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Telefono</th>
          <th>Email</th>
          <th>Direccion</th>
          <th>Genero</th>
        </tr>
      </thead>
      <tbody>
            {resultados.map((item) => (
        <tr>
          <td>{item.documento}</td>
          <td>{item.nombre}</td>
          <td>{item.apellido}</td>
          <td>{item.telefono}</td>
          <td>{item.email}</td>
          <td>{item.direccion}</td>
          <td>{item.genero}</td>

        </tr>
            ))}
            </tbody>
          
              </Table>
        </div>
      )}
    </div>
  );
};

export default FormularioBusqueda;
