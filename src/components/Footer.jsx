import React from 'react'
import '../styles/layout.css'

import { Navbar, Container, Row, Col, Nav } from 'react-bootstrap'

const Footer = () => {
  return (
    <>
      <div className='text-light container-footer'>
        <Container className="justify-content-md-center">
          <footer  className='container text-center'>
            <p>
              &copy;{new Date().getFullYear()} 
              <a> 
                <span className='new-insta'> Insta</span><span className='brand-ya'>YA </span>
                | Todos los derechos reservados 
              </a>
            </p>
          </footer>
        </Container>
      </div>
    </>
  )
}

export default Footer