const submitHandler= (e, arrayUsers) =>{
    e.preventDefault();
    console.log("array: ", arrayUsers);

    let login = false;
    console.log("login_ini: ", login)
    console.log("array0: ", arrayUsers[0])
    console.log("array1: ", arrayUsers[1])
    
    let user = document.getElementById('exampleInputUsuario1').value.trim();
    let pass = document.getElementById('exampleInputPassword1').value.trim();
    console.log("user, pass:", user, pass)

    for (let i = 0; i < arrayUsers.length; i++){
        if(arrayUsers[i].userName === user && arrayUsers[i].password === pass ){
            login = true;
            console.log("login_true: ", login)
            alert("PERFECTO")
            window.location.replace("http://localhost:5173/list")
            break
        }
    }
    if(login === false){
        console.log("login_false: ", login)
        alert("nope")
    }

}  

export default submitHandler;