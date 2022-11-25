import React from 'react'

import UpdateForm from '../components/UpdateForm.jsx'

const RegistrarOrden = () => {
  return (
    <>
      <div className='container-oulet'>
        <div>Registro de Ordenes</div>
        <UpdateForm 
            description='Registro'
            boton='Crear Orden' />
      </div>
    </>
  )
}

export default RegistrarOrden