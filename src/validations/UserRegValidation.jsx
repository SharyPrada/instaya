
const submitHandler= (e) =>{
    
    e.preventDefault();
    let name = document.getElementById('inputNombre').value.trim();
    let user = document.getElementById('inputUsuario').value.trim();
    let correo = document.getElementById('inputEmail3').value.trim();
    let pass = document.getElementById('inputPassword3').value.trim();
    
}  

export default submitHandler;