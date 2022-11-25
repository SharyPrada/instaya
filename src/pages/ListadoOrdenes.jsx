import React from 'react'
import { Container } from 'react-bootstrap'
import OrderTable from '../components/OrderTable'

const ListadoOrdenes = () => {
  return (
    <div className='justify-content-center container-oulet'>
      <div style={{backgroundColor: '#054789'}} className='text-white'>
        Listado Ordenes
      </div>
      <br></br>
      <OrderTable/>
    </div>
    
  )
}

export default ListadoOrdenes