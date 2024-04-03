let arrayContacto = []
let arrayMuestra = []



arrayContacto.push(JSON.parse(localStorage.getItem("usuario")))    
localStorage.setItem("arrayContacto",JSON.stringify (arrayContacto))