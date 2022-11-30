import React from 'react'
import { Form, Button, Container, Row, Col, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styled from '@emotion/styled'
import submitHandler from '../validations/UserRegValidation.jsx'
import '../styles/login.css'

const Titulo = styled.h2`
  color: #054789;
  font-weight: bold;
`
const RegistrarUsuario = () => {

  return (
    <>
        <div className='pagina'>
            <Container>
                <Row className="justify-content-md-center">
                    <p></p><p></p>
                    
                    <Row className='red-line'></Row>

                    <p></p>

                    <Row className='alineacion'>
                        <Col md="2"></Col>
                        
                        <Col md="15" >

                            <Titulo>Registro de Usuario</Titulo>

                            <div className='recuadro'>
                                <Form action='./list' onSubmit={submitHandler}>
                                    <Form.Group className="mb-3" >
                                        <Row>
                                            <Col sm="3"><Form.Label className="col-form-label labels">Nombre</Form.Label></Col>
                                            <Col sm="9"><Form.Control type="text" placeholder="" id="inputNombre" minLength="5" required/></Col>
                                        </Row>
                                    </Form.Group>

                                    <Form.Group className="mb-3" >
                                        <Row>
                                            <Col sm="3"><Form.Label className="col-form-label labels">Usuario</Form.Label></Col>
                                            <Col sm="9"><Form.Control type="text" placeholder="" id="inputUsuario" minLength="5" required/></Col>
                                        </Row>
                                    </Form.Group>

                                    <Form.Group className="mb-3" >
                                        <Row>
                                            <Col sm="3"><Form.Label  className="col-form-label labels">Correo</Form.Label></Col>
                                            <Col sm="9"><Form.Control type="email" placeholder="" id="inputEmail3" required/></Col>
                                        </Row>
                                    </Form.Group>                                  

                                    <Form.Group className="mb-3" >
                                        <Row>
                                            <Col sm="3"><Form.Label className="col-form-label labels">Contraseña</Form.Label></Col>
                                            <Col sm="9"><Form.Control type="password" placeholder="" id="inputPassword3" minLength="5" required/></Col>
                                        </Row>
                                    </Form.Group>

                                    <Button variant="primary" type="submit">
                                        <Nav.Link as={Link} to="/list" className='text-light'>Sign up</Nav.Link>
                                    </Button>
                                </Form>
                            </div>

                        </Col>
                        
                        <Col md="2"></Col>
                    </Row>
                    
                    <p></p>

                    {/* <Row><div className='final-line'></div></Row> */}
                    <Row className='final-line'></Row>
                    <Row className='final-line2'></Row>  
                </Row>
            </Container>
            </div>
    </>
  )

}

export default RegistrarUsuario