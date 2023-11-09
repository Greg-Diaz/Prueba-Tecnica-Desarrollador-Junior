import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const EmployeeList = () => {

  const [employes,setemployes] = useState([]);
  const getEmployes = () =>{
    fetch("https://localhost:7194/api/Employes")
    .then((res)=>res.json())
    .then((Response)=>{
      console.log("listado", Response['documento']);
      setemployes(Response)
    })
};

useEffect(()=>{
  getEmployes();
},[]);


  return (
    <div className='card-list' style={{display: 'flex',flexWrap:'wrap' , flexGrow:'2',alignItems:'center'}}>
    {employes.map((item)=>
      (
        <div key={item.id} className="card" style={{ width: '18rem', margin:'1%' }}>
          <div className="card-body">
            <h5 className="card-title">{item.nombre} {item.apellido}</h5>
            <Container>
            <Row>
              <Col>Documento: {item.documento}</Col>
              <Col>Teléfono: {item.telefono}</Col>
              
            </Row>
            <Row>
              <Col>Email: {item.email}</Col>
              <Col>Dirección: {item.direccion}</Col>
              <Col>Género: {item.genero}</Col>
            </Row>
          </Container>
            </div>
        </div>
      )
    )}
    </div>

    
  );
}

export default EmployeeList;
