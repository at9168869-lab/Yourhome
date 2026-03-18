function login(){

let user=document.getElementById("username").value
let pass=document.getElementById("password").value

if(user==="admin" && pass==="123456"){

localStorage.setItem("login","true")
window.location="dashboard.html"

}else{

alert("Login gagal")

}

}

function checkLogin(){

if(localStorage.getItem("login")!=="true"){

window.location="index.html"

}

}

function logout(){

localStorage.removeItem("login")
window.location="index.html"

}
