import React from 'react'
import { Container, Row, Col, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styled from '@emotion/styled'

import '../styles/login.css'


const Titulo = styled.h2`
  color: #054789;
  font-weight: bold;
`


const UpdateForm = (props) => {//const UpdateForm = () => {

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

              <Col md="11" >

                <Titulo>{props.description} de Ordenes</Titulo>

                <form className='recuadro' action='./list'>

                  <div className="row mb-3 justify-content-center">
                    <div className="col-sm-3 ">
                      <label for="inputFecha" className="col-sm-2 col-form-label labels">Fecha</label>
                      <input type="date" className="form-control col-sm-2" id="inputFecha" />
                    </div>
                    <div className="col-sm-3 ">
                      <label for="inputHora" className="col-sm-2 col-form-label labels">Hora</label>
                      <input type="time" className="form-control col-sm-2" id="inputHora" />
                    </div>
                  </div>
                  <div className="row g-3 align-items-center justify-content-center mb-3">
                    <div className="col-auto">
                      <label for="inputEstado" className="col-sm-7 col-form-label labels">Estado</label>
                    </div>
                    <div className="col-auto">
                      <select className="form-select" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">Guardado</option>
                        <option value="2">Cancelado</option>
                        <option value="3">Cumplido</option>
                      </select>
                    </div>
                  </div>
                  <div className="row mb-3 align-items-center ">                    
                    <div className="col-sm-3 ">
                      <label for="inputLargo" className="col-form-label labels">Largo</label>
                      <input type="number" className="form-control" id="inputLargo"/>   
                    </div>
                    <div className="col-sm-3 ">
                      <label for="inputAncho" className="col-form-label labels">Ancho</label>
                      <input type="number" className="form-control" id="inputAncho"/> 
                    </div>
                    <div className="col-sm-3 ">
                      <label for="inputAlto" className="col-form-label labels">Alto</label>
                      <input type="number" className="form-control" id="inputAlto"/> 
                    </div>
                    <div className="col-sm-3 ">
                      <label for="inputPeso" className="col-form-label labels">Peso</label>
                      <input type="number" className="form-control" id="inputPeso"/> 
                    </div>
                  </div>
                  <div className="row mb-3 align-items-center"> 
                    <label for="inputDireccion" className="col-sm-2 col-form-label labels">Direccion Recogida</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control" id="inputDireccion" />
                    </div>
                  </div>
                  <div className="row mb-3 align-items-center">
                    <label for="inputCiudadR" className="col-sm-2 col-form-label labels">Ciudad Recogida</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control" id="inputCiudadR" />
                    </div>
                  </div>
                  <div className="row mb-3 align-items-center">
                    <label for="inputNombreDest" className="col-sm-2 col-form-label labels">Nombre Destinatario</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control" id="inputNombreDest" />
                    </div>
                  </div>
                  <div className="row mb-3 align-items-center">
                    <label for="inputNumDocDest" className="col-sm-2 col-form-label labels">Cedula / NIT Destinatario</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control" id="inputNumDocDest" />
                    </div>
                  </div>
                  <div className="row mb-3 align-items-center">
                    <label for="inputDirEnt" className="col-sm-2 col-form-label labels">Direccion Entrega</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control" id="inputDirEnt" />
                    </div>
                  </div>
                  <div className="row mb-3 align-items-center">
                    <label for="inputCiudEnt" className="col-sm-2 col-form-label labels">Ciudad Entrega</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control" id="inputCiudEnt" />
                    </div>
                  </div>
                  <div>
                    <p></p>
                    <button type="submit" className="btn btn-primary color-boton">{props.boton}</button>
                  </div>
                </form>

              </Col>

              <Col md="2"></Col>
            </Row>
          </Row>
        </Container>
      </div>
    </>
  )

}

export default UpdateForm