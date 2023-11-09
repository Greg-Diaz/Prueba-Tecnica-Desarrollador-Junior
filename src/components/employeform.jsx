import React, { useState } from 'react';
import { FormLabel } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const EmployeForm = () => {
  const [formData, setFormData] = useState({
    documento: 0,
    nombre: '',
    apellido: '',
    telefono: '',
    email: '',
    direccion: '',
    genero: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    fetch('https://localhost:7194/api/Employes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Datos enviados con éxito:', data);
        setFormData({
            documento: 0,
            nombre: '',
            apellido: '',
            telefono: '',
            email: '',
            direccion: '',
            genero: '',
          });
          alert('Datos enviados con éxito');

      })
      .catch((error) => console.error('Error al enviar los datos:', error));
  };

  return (
    <form onSubmit={handleSubmit} style={{display:'flex',alignItems:'center',flexDirection:'column'}}>
      <Form.Group className="mb-3 w-50" >
      <FormLabel>Documento</FormLabel>
        <Form.Control  type="text" name="documento" pattern='[0-9]*' value={formData.documento} onChange={handleChange} required />
      </Form.Group>
      <Form.Group className="mb-3 w-50" >
        <Form.Label>
            Nombre:
            </Form.Label>
        <Form.Control type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
      </Form.Group>
      <Form.Group className="mb-3 w-50" >
        <Form.Label>
            Apellido:
            </Form.Label>
        <Form.Control type="text" name="apellido" value={formData.apellido} onChange={handleChange} required />
      </Form.Group>
      <Form.Group className="mb-3 w-50" >
       <Form.Label>
         Teléfono:
        </Form.Label>
        <Form.Control type="text" name="telefono"  pattern='[0-9]*' value={formData.telefono} onChange={handleChange} required  />
      </Form.Group>
      <Form.Group className="mb-3 w-50" >
       <FormLabel>Email</FormLabel> 
        <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required  />
      </Form.Group>
      <Form.Group className="mb-3 w-50" >
        <Form.Label>
            Dirección:
            </Form.Label>
        <Form.Control type="text" name="direccion" value={formData.direccion} onChange={handleChange} required  />
      </Form.Group>
      <Form.Group className="mb-3 w-50" >
        <Form.Label>
            Género:
            </Form.Label>
        <Form.Control type="text" name="genero" value={formData.genero} onChange={handleChange} required  />
      </Form.Group>
      <Button variant="primary" type="submit"> Enviar</Button>
    </form>
  );
};

export default EmployeForm;
