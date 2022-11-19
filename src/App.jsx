import './styles/App.css'

//Packages
import { BrowserRouter ,Route, Routes, Navigate } from 'react-router-dom';

import RegistrarOrden from './pages/RegistrarOrden.jsx'
import ActualizarOrden from './pages/ActualizarOrden.jsx'
import ListadoOrdenes from './pages/ListadoOrdenes.jsx'
import Login from './pages/Login.jsx'
import RegistrarUsuario from './pages/RegistrarUsuario.jsx';

import Layout from './components/Layout'

function App() {

  return (

    <BrowserRouter>
        <Routes>
          
          <Route index element={<Login/>}/>
          <Route path='register' element={<RegistrarUsuario/>}/>
          
          <Route path='/' element={<Layout />} >

            <Route path='list' element={<ListadoOrdenes/>}/>
            <Route path='order' element={<RegistrarOrden/>}/> 
            <Route path='update' element={<ActualizarOrden/>}/> 
            <Route path='*' element={<Navigate replace to="/"/>}/>

          </Route>
        </Routes>
      </BrowserRouter>

  )
}

export default App
