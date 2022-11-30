import {React, useState, useEffect } from 'react'
import { Container, Row, Col, Nav, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styled from '@emotion/styled'
import submitHandler from '../validations/OrderDataValidation'
import '../styles/login.css'

const Titulo = styled.h2`
  color: #054789;
  font-weight: bold;
`
const MessageError = styled.span`
  color: #f84b2c;
  font-weight: 500;
  font-style: oblique;
`
const OrderForm = (props) => {

    // EVENTO DE FECHA
    const currentDate = new Date();
    const currentDateFormat = `${currentDate.getDate()}-${currentDate.getMonth()+1}-${currentDate.getFullYear()}`;

    const [todate, setTodate]= useState([]); // fecha elegida --> año, mes, día
    const [todateformat, setTodateformat]= useState(''); // cambiar formato de fecha --> dia, mes, año

    const handletodate = (e) => {
        const gettodatevalue= e.target.value;
        setTodate(gettodatevalue);
         const setdateformat= gettodatevalue.split('-');
         const settoyear= setdateformat[0];
         const settomonth= setdateformat[1];
         const settodate= setdateformat[2];
         const settodateformat= settodate+"-"+settomonth+"-"+settoyear;
        setTodateformat(settodateformat);
        
    }
    console.log("todate: ", todate)
    console.log("todateformat: ", todateformat)

    // EVENTO DE LA HORA
    const currentHoursFormat = `${currentDate.getHours()}-${currentDate.getMinutes()}`;

    const [tohours, setTohours]= useState([]); // fecha elegida --> año, mes, día
    const [tohoursformat, setTohoursformat]= useState(''); // cambiar formato de fecha --> dia, mes, año

    const handletohour = (e) =>{
        const gettohoursvalue= e.target.value;
        setTohours(gettohoursvalue);
         const sethourformat= gettohoursvalue.split(':');
         const settohour= sethourformat[0];
         const settominutes= sethourformat[1];
         const settohoursformat= settohour+":"+settominutes;
        setTohoursformat(settohoursformat);
    }
    console.log("todate: ", tohours)
    console.log("todateformat: ", tohoursformat)

    // VALIDAR DISPONIBILIDAD DE ESTADO
    const paquetesEstados = (value) =>{
        if (value === 'true')
            return Boolean(true);
        else if (value === 'false')
            return Boolean(false);
    }
    const disabledestado = paquetesEstados(props.disabled);

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
                <div className='recuadro'>
                    <Form onSubmit={submitHandler}>
                        <Row className="justify-content-center">
                            <Col sm="3">
                                <Form.Group className="mb-3" >
                                    <Row><Form.Label className="col-form-label labels">Fecha</Form.Label></Row>
                                    <Row><Form.Control type="date" placeholder="" id="inputFecha" required onChange={(e)=>handletodate(e)}/></Row>
                                </Form.Group>
                            </Col>
                            <Col sm="1"></Col>
                            <Col sm="3">
                                <Form.Group className="mb-3" >
                                    <Row><Form.Label className="col-form-label labels">Hora</Form.Label></Row>
                                    <Row><Form.Control type="time" placeholder="" id="inputHora" required onChange={(e) => handletohour(e)}/></Row>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row className="align-items-center justify-content-center">
                            <Col sm="2"><Form.Label className="col-form-label labels">Estado</Form.Label></Col>
                            <Col sm="5">
                                <Form.Select aria-label="Default select example" disabled={disabledestado}>
                                    <option>Open this select menu</option>
                                    <option value="1">Guardado</option>
                                    <option value="2">Cancelado</option>
                                    <option value="3">Cumplido</option>
                                </Form.Select>
                            </Col>
                        </Row>

                        <Row mb="3" className="align-items-center ">
                            <Col sm="3">
                                <Form.Group className="mb-3" >
                                    <Form.Label className="col-form-label labels">Largo</Form.Label>
                                    <Form.Control type="number" placeholder="" id="inputLargo" required/>
                                </Form.Group>
                            </Col>
                            <Col sm="3">
                                <Form.Group className="mb-3" >
                                    <Form.Label className="col-form-label labels">Ancho</Form.Label>
                                    <Form.Control type="number" placeholder="" id="inputAncho" required/>
                                </Form.Group>
                            </Col>
                            <Col sm="3">
                                <Form.Group className="mb-3" >
                                    <Form.Label className="col-form-label labels">Alto</Form.Label>
                                    <Form.Control type="number" placeholder="" id="inputAlto" required/>
                                </Form.Group>
                            </Col>
                            <Col sm="3">
                                <Form.Group className="mb-3" >
                                    <Form.Label className="col-form-label labels">Peso</Form.Label>
                                    <Form.Control type="number" placeholder="" id="inputPeso" required/>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Form.Group className="mb-3" >
                            <Row>
                                <Col sm="3"><Form.Label className="col-form-label labels">Direccion Recogida</Form.Label></Col>
                                <Col sm="9"><Form.Control type="text" placeholder="" id="inputDireccion" required/></Col>
                            </Row>
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Row>
                                <Col sm="3"><Form.Label className="col-form-label labels">Ciudad Recogida</Form.Label></Col>
                                <Col sm="9"><Form.Control type="text" placeholder="" id="inputCiudadR" required/></Col>
                            </Row>
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Row>
                                <Col sm="3"><Form.Label className="col-form-label labels">Nombre Destinatario</Form.Label></Col>
                                <Col sm="9"><Form.Control type="text" placeholder="" id="inputNombreDest" required/></Col>
                            </Row>
                        </Form.Group>                              

                        <Form.Group className="mb-3" >
                            <Row>
                                <Col sm="3"><Form.Label className="col-form-label labels">CC / NIT Destinatario</Form.Label></Col>
                                <Col sm="9"><Form.Control type="number" placeholder="" id="inputNumDocDest" required/></Col>
                            </Row>
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Row>
                                <Col sm="3"><Form.Label className="col-form-label labels">Direccion Entrega</Form.Label></Col>
                                <Col sm="9"><Form.Control type="text" placeholder="" id="inputDirEnt" required/></Col>
                            </Row>
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Row>
                                <Col sm="3"><Form.Label className="col-form-label labels">Ciudad Entrega</Form.Label></Col>
                                <Col sm="9"><Form.Control type="text" placeholder="" id="inputCiudEnt" required/></Col>
                            </Row>
                        </Form.Group>

                        <Button variant="primary" type="submit">{props.boton}
                            {/* <Nav.Link as={Link} to="/list" className='text-light'></Nav.Link> */}
                        </Button>
                    </Form>
                </div>

              </Col>

              <Col md="2"></Col>
            </Row>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default OrderForm;