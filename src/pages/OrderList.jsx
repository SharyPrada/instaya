import { React, useEffect, useState} from 'react'
import OrderTable from '../components/OrderTable.jsx'

const filterUserOrder = (array) =>{
  let newArray = []

  for (let i = 0; i < array.length; i++){
    if(array[i].userRef === 'Sarii'){ // cambiar 'Sari' por la validacion de usuario pertinente
      newArray[i] = array[i]
    }
  }
  return newArray
}

const ListadoOrdenes = () => {

    const [orderTable, setOrderTable] = useState([]);

    useEffect(() => {
      const consultarAPI = async () => {
        const url = "http://localhost:3000/orders"
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()
        console.log("fetch:", resultado)

        const arrayOrders = resultado.map(pedido =>{
              const objeto = {
                userRef: pedido.info.user,
                numTable: pedido.info.numTable,
                date: pedido.info.date,
                status: pedido.info.status,
                addressR: pedido.recipient.addressR,
                cityR: pedido.recipient.cityR,
            }
            return objeto
        })
        console.log("arrayOrders: ", arrayOrders)

        const arrayUserOrders = filterUserOrder(arrayOrders)
        console.log("arrayUserOrders: ", arrayUserOrders)

        setOrderTable(arrayUserOrders);
      }
      consultarAPI();
    },[])

  return (
    <div className='justify-content-center container-oulet'>
      <div style={{backgroundColor: '#054789'}} className='text-white'>
        Listado Ordenes
      </div>
      <br></br>
      <OrderTable array={orderTable}  />
    </div>
    
  )
}

export default ListadoOrdenes