
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
    

    if(fecha === '' || hora === '' || largo === '' || ancho === '' || alto === '' || peso === '' || dirRec === '' || ciuRec === '' || nameDest === '' || cedDest === ''|| dirEnt === '' || ciuEnt === ''){
        alert("Revise por campos vacios...")
    } 
    
        
        /*const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({user:user, pass:pass})
        };*/
        //Envair hacia el back
        /*fetch("http://localhost:9890/login", requestOptions)
        .then((response)=> response.json())
        .then((service)=>{
            console.log(service.mensaje);
            setText(service.mensaje);
            setIsvalid(false);
        })*/
    
}  

export default submitHandler;