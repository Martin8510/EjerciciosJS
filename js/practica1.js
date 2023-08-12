/*
Realizar el pedido de 4 datos personales:
Nombre
Edad
Pais
Habilidad

el campo habilidad ponen si es zurda o derecha la persona

el algoritmo es una beca que solo se le dara a personas de colombia o ecuador

mayores de 18 años

y que sea zurda 

debe salir mensaje de 

"Quedas registrado al cupo de la beca"
"No cumples los requisitos"
*/

alert("......Rellena los datos para la Beca si es apto o no......");

const userName = prompt("Ingrese tu nombre por favos: ").toUpperCase();
const age = parseInt(prompt("Ingrese tu edad por favor: "));
const ability = prompt("Ingrese su Tipos de Lateralidad").toLowerCase();
const country = prompt("Ingrese tu pais de origen: ").toLowerCase();

if (age >= 20 && ability !== "derecha") {
  if (country === "colombia" || country === "ecuador") {
    alert("......................................");
    alert("Queda registrado al cupo de la beca");
    alert("El sr/a " + userName);
    alert("Edad: " + age);
    alert("Pais de Origen: " + country.toUpperCase());
    alert("Lateralidad es: " + ability.toUpperCase());
    alert(".....Gracias por registrase.....");
    alert("......................................");
  } else {
    alert("Quedas registrado al cupo de la beca");
    alert("No cumples los requisitos, las becas son para colombia y ecuador");
  }
} else {
  alert("Quedas registrado al cupo de la beca");
  alert(
    "No cumples los requisitos, la beca tiene que ser para zurdo y que sea mayor de 20 años"
  );
}
