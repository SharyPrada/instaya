import React from 'react'
import OrderForm from '../components/OrderForm.jsx'

const RegistrarOrden = () => {
  return (
    <>
      <div className='container-oulet'>
        <div>Registro de Ordenes</div>
        <OrderForm 
            description='Registro'
            boton='Crear Orden' 
            disabled='true'/>
      </div>
    </>
  )
}

export default RegistrarOrden