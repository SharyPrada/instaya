import React from 'react'
import { Link } from 'react-router-dom'

const OrderTable = () => {
    const orders = [{ 'numServicio': 1, 'fecha': '01/01/2021', 'ciudad': 'Santamarta', 'direccion': 'Calle 1 #2-3', 'estado': 'Guardado' },
    { 'numServicio': 2, 'fecha': '02/02/2021', 'ciudad': 'Barranquilla', 'direccion': 'Calle 10 #20-30', 'estado': 'Entregado' }
    ];
    return (
        <div>
            <table id="ordenes" className="table table-primary table-hover">
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
                        orders.map((order, index) => {
                            return (
                                <tr key={index}>
                                    <td scope="row">
                                        <Link to={`/update/${order.numServicio}`}>{order.numServicio}</Link>
                                    </td>
                                    <td>{order.fecha}</td>
                                    <td>{order.ciudad}</td>
                                    <td>{order.direccion}</td>
                                    <td>{order.estado}</td>
                                </tr>)
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default OrderTable