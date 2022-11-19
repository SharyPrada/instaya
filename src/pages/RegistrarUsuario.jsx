import React from 'react'
import { Container, Row, Col, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styled from '@emotion/styled'

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
                        
                        <Col md="7" >

                            <Titulo>Registro de Usuario</Titulo>

                            <form className='recuadro' action='./list'>
                                <div className="row mb-3">
                                    <label for="inputEmail3" className="col-sm-2 col-form-label labels">Nombre</label>
                                    <div className="col-sm-10">
                                    <input type="email" className="form-control" id="inputEmail3" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label for="inputEmail3" className="col-sm-2 col-form-label labels">Usuario</label>
                                    <div className="col-sm-10">
                                    <input type="email" className="form-control" id="inputEmail3" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label for="inputEmail3" className="col-sm-2 col-form-label labels">Correo</label>
                                    <div className="col-sm-10">
                                    <input type="email" className="form-control" id="inputEmail3" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label for="inputPassword3" className="col-sm-2 col-form-label labels">Contraseña</label>
                                    <div className="col-sm-10">
                                    <input type="password" className="form-control" id="inputPassword3" />
                                    </div>
                                </div>

                                <div>
                                    <p></p>
                                    <button type="submit" className="btn btn-primary color-boton">Sing in</button>
                                </div>
                            </form>

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