
let userName
let age
let direction
let phone
let civilStatus
let Dni
let Email
let salary

function registerData() {
    userName = prompt(" Ingrese tu nombre")
    age = prompt ("Ingrese tu edad")
    Dni = prompt("Ingrese tu numero de identidad")
    direction = prompt("Ingrese tu direccion")
    phone =prompt("Ingrese tu numero del movil")
    civilStatus = prompt("Estado civil")
    Email = prompt("Ingrese tu correo eletronico")
    salary = prompt("Ingrese tu salario actual")
}

function showData(){
    alert( "Tu nombre es:  " + userName + " || Numero de identificacion es: " + Dni  )
    alert("Tu edad es : " + age)
    alert("Tu correo eletronico es:  " + Email)
    alert( "Tu direccion actual es:  " + direction + " ||   Tu numero de movil actual es: " + phone)
    alert("Estado civil actual es:   " + civilStatus + " || Tu salario actual es: "+  salary)
}

