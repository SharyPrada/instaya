import React from 'react'
import { Container, Row, Col, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styled from '@emotion/styled'

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
  return (
    <>
      <div className='pagina'>
        <Container>
          
          <Row className="justify-content-md-center">
            
            <p></p><p></p>
            
            <Row><div className='empy-bar'></div></Row>

            <Col>
              <Row>
                <p></p>
                <Col className='alineacion'>
                  <img src={logo2} style ={{"width": "60%"}} className='logo-img'/>
                  <Subtitulo>Empresa de Gestion de Paquetes</Subtitulo>
                </Col>

                <Col className='alineacion'>
                  <div>
                    <Titulo>Bienvenido</Titulo>
                    
                    <div className='justify-content-between'>
                      <form className="row">
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Usuario</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>

                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Contraseña</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <p></p>

                        <button type="submit" className="btn btn-primary">
                          <Nav.Link as={Link} to="/list" className='text-light'>Login</Nav.Link>
                        </button>
                      </form>
                    </div>
                    
                    <div><Nav.Link as={Link} to="/register" className='text-light'><Subtitulo>Registrarse</Subtitulo></Nav.Link></div>

                  </div>
                </Col>
              </Row>
              
            </Col>

            <Col>
              <img src={login} style ={{"width": "85%"}} className='imgStyle'/>
            </Col>

            <Row><div className="barra-gigante"></div></Row>

          </Row>
        </Container>
      </div>
    </>
  )
}

export default Login