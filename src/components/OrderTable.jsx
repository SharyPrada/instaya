import React from 'react'
import { Link } from 'react-router-dom'
import { Table } from 'react-bootstrap'

const OrderTable = (props) => {
    
    const arrayDataOrders = props.array;

    return (
        <>
            <div>
                <Table id="ordenes" striped bordered hover size="sm" variant='primary'>
                    <thead>
                        <tr>
                            <th scope="col"># Servicio</th>
                            <th scope="col">Fecha</th>
                            <th scope="col">Ciudad Entrega</th>
                            <th scope="col">Direccion Entrega</th>
                            <th scope="col">Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            arrayDataOrders.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td scope="row">
                                            <Link to={`/update/${index}`}>{item.numTable}</Link>
                                        </td>
                                        <td>{item.date}</td>
                                        <td>{item.cityR}</td>
                                        <td>{item.addressR}</td>
                                        <td>{item.status}</td>
                                    </tr>)
                            })
                        }
                    </tbody>
                </Table>
            </div>
        </>
    )
}

export default OrderTable