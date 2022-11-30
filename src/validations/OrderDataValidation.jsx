
const submitHandler= (e) =>{
    
    e.preventDefault();
    let fecha = document.getElementById('inputFecha').value.trim();
    let hora = document.getElementById('inputHora').value.trim();
    let largo = document.getElementById('inputLargo').value.trim();
    let ancho = document.getElementById('inputAncho').value.trim();
    let alto = document.getElementById('inputAlto').value.trim();
    let peso = document.getElementById('inputPeso').value.trim();
    let dirRec = document.getElementById('inputDireccion').value.trim();
    let ciuRec = document.getElementById('inputCiudadR').value.trim();
    let nameDest = document.getElementById('inputNombreDest').value.trim();
    let cedDest = document.getElementById('inputNumDocDest').value.trim();
    let dirEnt = document.getElementById('inputDirEnt').value.trim();
    let ciuEnt = document.getElementById('inputCiudEnt').value.trim();
    

    // if(fecha === '' || hora === '' || largo === '' || ancho === '' || alto === '' || peso === '' || dirRec === '' || ciuRec === '' || nameDest === '' || cedDest === ''|| dirEnt === '' || ciuEnt === ''){
    //     alert("Revise por campos vacios...")
    // }  --------------> NO NECESARIO GRACIAS AL ATRIBUTO "REQUIRED EN EL FORMULARIO"
    
        
    /* !!!!!!!!!!!!!!!!!!!!!!!!!!!!    VALIDAR "ESTADO" DEL PAQUETE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!    */
    
}  

export default submitHandler;