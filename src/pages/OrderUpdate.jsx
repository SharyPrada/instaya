import React from 'react'
import OrderForm from '../components/OrderForm.jsx'

import '../styles/layout.css'

const ActualizarOrden = () => {
  return (
    <>
      <div className='justify-content-center container-oulet'>
        <div>Actualizacion de Ordenes</div>
        <OrderForm 
          description='Actualización'
          boton='Actualizar Orden' 
          disabled='false'
        />
      </div>
    </>
  )
}

export default ActualizarOrden