import './App.css';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import EmployeeList from './components/employelist';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import  Employeform  from './components/employeform';
import FormularioBusqueda from './components/employeread';
function App() {
  return (
    <div className="App">
          <Container className='m-3'>
      <Row>
        <Col><h2>
        Prueba Desarrollador Web Junior
          </h2></Col>
      </Row>
    </Container>
  <Tabs
      defaultActiveKey="CrearEmpleado"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      {/* <Tab eventKey="Listadoempleados" title="Listar Empleados">
      <EmployeeList></EmployeeList>
      </Tab> */}
      <Tab eventKey="BuscarEmpleados" title="Buscar Empleados">
        <FormularioBusqueda></FormularioBusqueda>
      </Tab>
      <Tab eventKey="CrearEmpleado" title="Crear Empleado">
      <Employeform></Employeform>
      </Tab>
    </Tabs>

    </div>
    
  );
}

export default App;
