import { React, useEffect, useState} from 'react'
import { Form, Button, Container, Row, Col, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styled from '@emotion/styled'
import submitHandler from '../validations/UserLoginValidation.jsx'

import '../styles/login.css'
import login from '../imgs/login.png'
import logo2 from '../imgs/logo2.png'

const Titulo = styled.h2`
  color: #054789;
  font-weight: bold;
`
const Subtitulo = styled.h3`
  color: #db266b;
  font-weight: bold;
`

const Login = () => {

   const [usersList, setUsersList] = useState([]);

   useEffect(() => {
     const consultarAPI = async () => {
       const url = "http://localhost:3000/users"
       const respuesta = await fetch(url)
       const resultado = await respuesta.json()
       console.log("fetch:", resultado)

       const arrayUsersLogin = resultado.map(usuarioDatos =>{
             const objeto = {
               userName: usuarioDatos.user,
               password: usuarioDatos.password,
           }
           return objeto
       })
       console.log("arrayUsersLogin: ", arrayUsersLogin)
       setUsersList(arrayUsersLogin);
     }
     consultarAPI();
   },[])

  return (
    <>
      <div className='pagina'>
        <Container>
          <Row className="justify-content-md-center">
            {/* --------- Fila con Barra Roja --------- */}
            <p></p><p></p>
            <Row><div className='empy-bar'></div></Row>
            
            {/* --------- Columna con Logo, Login y Register --------- */}
            <Col>
              {/* --------- Fila General con Logo, Login y Register --------- */}
              <Row>
                <p></p>
                {/* --------- Columna con Logo (y subtitulo) --------- */}
                <Col className='alineacion'>
                  <img src={logo2} style ={{"width": "60%"}} className='logo-img'/>
                  <p></p><p></p>
                  <Subtitulo>Empresa de Gestion de Paquetes</Subtitulo>
                </Col>
                
                {/* --------- Columna con Login y Register --------- */}
                <Col className='alineacion'>

                  {/* --------- Fila con Login --------- */}
                  <Row>
                    <Titulo>Bienvenido</Titulo>
                      
                    <Container className='justify-content-between'>
                      <Form className='row' onSubmit={(e) => submitHandler(e,usersList)} method="POST">
                        <Form.Group className="mb-3" >
                          <Form.Label>Usuario</Form.Label>
                          <Form.Control type="text" placeholder="" id="exampleInputUsuario1" minLength="5" required/>
                        </Form.Group>

                        <Form.Group className="mb-3" >
                          <Form.Label>Contraseña</Form.Label>
                          <Form.Control type="password" placeholder="" id="exampleInputPassword1" minLength="5" required/>
                        </Form.Group>

                        <Button variant="primary" type="submit" >
                          Login
                        </Button>
                      </Form>
                    </Container>
                  </Row>

                  {/* --------- Fila con Register --------- */}
                  <Row>
                    <p></p><p></p>
                    <div><Nav.Link as={Link} to="/register" className='text-light'><Subtitulo>Registrarse</Subtitulo></Nav.Link></div>
                  </Row>
                </Col>
              </Row>
            </Col>

            {/* --------- Columna con Imagen Grande --------- */}
            <Col>
              <img src={login} style ={{"width": "85%"}} className='imgStyle'/>
            </Col>
            {/* --------- Fila con Barra Azul --------- */}
            <Row><div className="barra-gigante"></div></Row>

          </Row>
        </Container>
      </div>
    </>
  )
}

export default Login;