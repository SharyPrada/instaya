import React from 'react'
import { Container } from 'react-bootstrap'
import DatePicker from '../components/DatePicker.jsx'
import UpdateForm from '../components/UpdateForm.jsx'

import '../styles/layout.css'

const ActualizarOrden = () => {
  return (
    <>
      <div className='justify-content-center container-oulet'>
        <div>Actualizacion de Ordenes</div>
        <UpdateForm 
        description='Actualización'
        boton='Actualizar Orden' />
      </div>
    </>

//------------------------------------- BORRADOR ----------------------------------------

// <div className="container justify-content-center ">
// <p>RECOGER PAQUETE</p>
//     <form className="row g-3 ">

//       <div>Datos del Paquete</div>
//       <div className="col-md-2">
//         <label for="inputZip" className="form-label">Alto</label>
//         <input type="text" className="form-control" id="inputZip"/>
//       </div>
//       <div className="col-md-2">
//         <label for="inputZip" className="form-label">Ancho</label>
//         <input type="text" className="form-control" id="inputZip"/>
//       </div>
//       <div className="col-md-2">
//         <label for="inputZip" className="form-label">Largo</label>
//         <input type="text" className="form-control" id="inputZip"/>
//       </div>
//       <div className="col-md-2">
//         <label for="inputZip" className="form-label">Peso (kg)</label>
//         <input type="text" className="form-control" id="inputZip"/>
//       </div>
//       <div className="col-md-4">
//         <label for="inputState" className="form-label">Tipo de Mercancía</label>
//           <select id="inputState" className="form-select">
//             <option selected>Delicada</option>
//             <option>Normal</option>
//           </select>
//       </div>
          
//       <div>Datos del Solicitante </div>
          
//       <div className="col-md-4">
//         <label for="inputZip" className="form-label">No. Identificación</label>
//         <input type="text" className="form-control" id="inputZip"/>
//       </div>
//       <div className="col-md-4">
//         <label for="inputZip" className="form-label">Nombre Completo</label>
//         <input type="text" className="form-control" id="inputZip"/>
//       </div>
//       <div className="col-md-4">
//         <label for="inputCity" className="form-label">Ciudad</label>
//         <input type="text" className="form-control" id="inputCity"/>
//       </div>
//       <div className="col-md-5">
//         <label for="inputAddress2" className="form-label">Dirección de donde se recoge el paquete</label>
//         <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
//       </div>
//       <div className="col-md-3">
//         <label for="inputAddress2" className="form-label">Fecha de Disponibilidad</label>
//         {/* <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/> */}
//         < DatePicker />
//       </div>
//       <div className="col-md-4">
//         <label for="inputState" className="form-label">Disponibilidad Horaria</label>
//         <select id="inputState" className="form-select">
//           <option selected>Mañana (8am a 12m) </option>
//           <option>Tarde (2 a 6pm) </option>
//         </select>
//       </div>

//       <div>Datos del Destinatario</div>
//       <div className="col-md-3">
//         <label for="inputZip" className="form-label">No. Identificación</label>
//         <input type="text" className="form-control" id="inputZip"/>
//       </div>
//       <div className="col-md-6">
//         <label for="inputZip" className="form-label">Nombre Completo</label>
//         <input type="text" className="form-control" id="inputZip"/>
//       </div>
//       <div className="col-md-3">
//         <label for="inputCity" className="form-label">Ciudad</label>
//         <input type="text" className="form-control" id="inputCity"/>
//       </div>
//       <div className="col-12">
//         <label for="inputAddress2" className="form-label">Dirección</label>
//         <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
//       </div>

//       <div className="col-12">
//         <button type="submit" className="btn btn-primary">Enviar Solicitud</button>
//       </div>
//     </form>
// </div>
  )
}

export default ActualizarOrden