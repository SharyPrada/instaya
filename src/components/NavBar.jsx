import React from 'react'

import { Navbar, Container, Row, Col, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import '../styles/layout.css'
import logo from '../imgs/logo.png'

const NavBar = () => {

    return (
        <>
            <div className='sticky-top contaniner-nav'>
                <Container>
                    <Row className="justify-content-md-center">
                        <Col xs={6} md={3} >
                            <Row>
                                <Navbar.Brand as={Link} to="/" >
                                    <div className='brand-all'>
                                        <img src={logo} className = "resize_fit_center"/>
                                        <span className='brand-insta'> Insta</span><span className='brand-ya'>YA </span>
                                    </div>
                                </Navbar.Brand>
                            </Row>
                        </Col>

                        <Col xs={12} md={8}>
                            <Row>
                                <p></p>
                                <Nav className="justify-content-end barra-nav ">
                                    <Nav.Link as={Link} to="/list" className='element-nav'>Listado de Ordenes</Nav.Link>
                                    <Nav.Link as={Link} to="/order" className='element-nav'>Registro de Ordenes</Nav.Link>
                                    <Nav.Link as={Link} to="/update" className='element-nav'>Actualización de Ordenes</Nav.Link>
                                    <Nav.Link as={Link} to="/logout" className='logout-btn element-nav'>Logout</Nav.Link>
                                </Nav>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default NavBar