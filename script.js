function login(){

let user=document.getElementById("username").value
let pass=document.getElementById("password").value

if(user==="admin" && pass==="123456"){

localStorage.setItem("login","true")

window.location.href="home.html"

}else{

document.getElementById("error").innerText="Login gagal"

}

}

function checkLogin(){

if(localStorage.getItem("login")!=="true"){

window.location.href="index.html"

}

}

function logout(){

localStorage.removeItem("login")

window.location.href="index.html"

}
