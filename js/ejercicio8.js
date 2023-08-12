/***
 *
 *
 * Ingresa un departamento (Cundimarca,quindio,antioquia, valle)
 * Dependientdo de que departamento es debe mostrar cual es la salida
 *
 *
 *
 *
 */

/*
const departments = prompt(" Ingrese el departamento ") 

if (departments === null || departments === "") {
    alert(departments + " Opcion invalida");
  }else{
    const department = departments.toLowerCase();
    if (department === "cundinamarca") {
        alert("La capital del " + department + " es Bogota");
    } else {
        if (department === "quindio") {
            alert("La capital del " + department + " es Armenia")
        } else {
            if (department ==="antioquia") {
                alert("La capital del " + department + " es Medellin");
            } else {
                if (department === "valle") {
                    alert("La capital del " + department + " es Cali");
                } else {
                    alert(department + " No es un departamento, por favor ingresar un departamento correcto")
                }
                
            }
            
        }
        
    }
  }
  */
const departments = prompt(" Ingrese el departamento ");

if (departments === null || departments === "") {
  alert(departments + " Opcion invalida");
} else {
  const department = departments.toLowerCase();
  switch (department) {
    case "cundinamarca":
      alert("La capital del " + department + " es Bogota");
      break;
    case "quindio":
      alert("La capital del " + department + " es Armenia");
      break;
    case "antioquia":
      alert("La capital del " + department + " es Medellin");
      break;
    case "valle":
      alert("La capital del " + department + " es Cali");
      break;
    default:
      alert(
        department +
          " No es un departamento, por favor ingresar un departamento correcto"
      );
  }
}
