// Condicionales
/*
* Operadores de comparacion
    (==) comparamos valores sin importar el tipo de dato  
    (===) estrictamente igual que (comprueba tipo de datos)
    (>=) Mayor o igual Que 
    (<=) Menor o igual Que 
    (<) Menor Que
    (!=) Diferente Que No respeta el tipo de dato
    (!==) Diferente Que No respeta el tipo de dato
 *************************
 Operadores Logicos
 (&&) Y 
 (||) O
*/ 
//DEclaramos la variable edad

const age = prompt("Ingresa tu edad");
const country = prompt("Ingrese tu pais").toLowerCase();

//Condicional if/else
 
if (age >= "16" && country !== "alemania") {
    alert("Si tiene la edad para ver la pelicula");
    
} else {
alert("no tiene la edad para ver la pelicula");
alert ("Esta prohibido por reglas de tus pais")
}


// 
/*
Nota: 
Mayuscula (X)
tildes ()
Vacios ()
Nulos ()
*/