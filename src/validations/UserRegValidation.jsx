
const submitHandler= (e) =>{
    
    e.preventDefault();
    let name = document.getElementById('inputNombre').value.trim();
    let user = document.getElementById('inputUsuario').value.trim();
    let correo = document.getElementById('inputEmail3').value.trim();
    let pass = document.getElementById('inputPassword3').value.trim();

    if(name === '' || user === '' || correo === '' || pass === ''){
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