import React from 'react'

import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import '../styles/layout.css'
import logo from '../imgs/logo.png'

const EmpyNavbar = () => {

    return (
        <>
            <Navbar className='sticky-top navy' >
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <div>
                            <img src={logo} className = "resize_fit_center"/>
                            <span className='brand-insta'> Insta</span><span className='brand-ya'>YA </span>
                        </div>
                    </Navbar.Brand>
                    <Nav className="justify-content-end">
                        <Nav.Link as={Link} to="/list" className='text-light'>Listado de Ordenes</Nav.Link>
                        <Nav.Link as={Link} to="/order" className='text-light'>Registro de Ordenes</Nav.Link>
                        <Nav.Link as={Link} to="/update" className='text-light'>Actualización de Ordenes</Nav.Link>
                        <Nav.Link as={Link} to="/logout" className='logout-btn text-light'>Logout</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default EmpyNavbar