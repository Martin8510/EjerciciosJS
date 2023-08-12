//Ejercicio de logica

const days = prompt("Ingrese dia");

if (days === null || day === "") {
  alert(days + " Opcion invalida");
} else {
  const day = days.toLowerCase();
  if (
    day === "lunes" ||
    day === "martes" ||
    day === "miercoles" ||
    day === "jueves" ||
    day === "viernes"
  ) {
    alert(day + " Es un dia de semana");
  } else {
    if (day === "sabado" || day === "domingo") {
      alert(day + " Es un fin de samana");
    } else {
      alert(day + " Favor ingresar solo dias de las semana");
    }
  }
}
