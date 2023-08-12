//
/**
 * Ingresar un departamento (cundinamarca, quindio, antioquia, valle)
 * ingresar objetivo de visita(turismo, comida, museos)
 * Dependiente de la opcion elegida
 * ejemplo1(antioquia y comida)
 * mostrar un alert (Las comidas mas populares en antioquia son la bandeja paisa, arepa rellena etc)
 * ejemplo2: se ingresa cundinamarca y turismo
 * mostrar un alert (lugares para visitar en cundinamarca es monserrate, la candelaria etc)
 * alert("opcion no valida ") en caso que no se ingrese alguna de las opciones
 * 
 */

const departments = prompt("Ingrese el departamento a visitar");
if (departments === null || departments === "") {
    alert(departments + " Opcion invalida");
  } else{
    const department = departments.toLowerCase(); 
    
    if (department === "cundinamarca") {
         alert("Elegiste " + department + " es el departamento que por su ubicación geográfica ocupa el corazón de Colombia")
         const option = prompt("Ingrese una opcion de visita: Turismo, Comida, Museos").toLowerCase();
      switch (option) {
        case "turismo":
          alert("Los sitios mas emblematico de Cundinamarca son: La Catedral De Sal,  Laguna de Guatavita, Parque Jaime Duque");
          break;
        case "comida":
          alert("Los platos mas emblematico de Cundinamarca son: Ajiaco Bogotano, Puchero, Roscón Resobado, La Fritanga");
          break;
        case "museos":
          alert("Museos emblematico de Cundinamarca son: Casa Museo Salto del Tequendama,Museo La casa Quevedo Zornoza,Museo Aeroespacial Fuerza Aérea Colombiana");
          break;
        default:
          alert(
            option +
          "  Por favor ingresar un opcion correcta"
          )
      }
          
        }else{
          if (department === "quindio") {
            alert("Elegiste " + department + " es el departamento destacan la topografía de los valles de Cocora y Maravélez, así como el paisaje montañoso")
            const option = prompt("Ingrese una opcion de visita: Turismo, Comida, Museos").toLowerCase();
            switch (option) {
              case "turismo":
                alert("Los sitios mas emblematico del Quindio son: Parque del Café,  Valle del Cocora, PANACA");
                break;
              case "comida":
                alert("Los platos mas emblematico del Quindio son: Bandeja paisa,Trucha,Mondongo,Sancocho,Calentao paisa,Sudados");
                break;
              case "museos":
                alert("Museos emblematico del Quindio  son: Museo del Oro Quimbaya,Museo del Disco y la Música (Filandia),Museo de Arte de Armenia y del Quindio");
                break;
              default:
                alert(
                  option +
                "  Por favor ingresar un opcion correcta"
                )
            }
          } else {
            if (department === "antioquia") {
              alert("Elegiste " + department + " es un territorio diverso, rico en ecosistemas y poseedor de todos los pisos térmicos, ")
              const option = prompt("Ingrese una opcion de visita: Turismo, Comida, Museos").toLowerCase();
              switch (option) {
                case "turismo":
                  alert("Los sitios mas emblematico de Antioquia son: Piedra Del Peñol,Laguna de Guatape,Parque Arví");
                  break;
                case "comida":
                  alert("Los platos mas emblematico de Antioquia son: Bandeja paisa,Fríjoles antioqueños,Mondongo,Sancocho,Mazamorra paisa,Sancocho antioqueño");
                  break;
                case "museos":
                  alert("Museos emblematico de Antioquia son: Museo Casa de la Memoria,Cementerio Museo San Pedro,Museo Histórico Casa de la Convencióno");
                  break;
                default:
                  alert(
                    option +
                  "  Por favor ingresar un opcion correcta"
                  )
              }
            } else {
              if (department === "valle") {
                alert("Elegiste " + department + " es un departamento con centros industriales y comerciales del país, es conocida como la ciudad más rumbera del mundo, ")
                const option = prompt("Ingrese una opcion de visita: Turismo, Comida, Museos").toLowerCase();
                switch (option) {
                  case "turismo":
                    alert("Los sitios mas emblematico del valle son: Basílica Menor Señor de Los Milagros,Monumento Cristo Rey,Zoológico de Cali,Lago Calima");
                    break;
                  case "comida":
                    alert("Los platos mas emblematico del Valle son: Sancocho de Gallina,Cholado,Raspado,Empanadas Vallunas,Arroz Atollado,Chontaduro");
                    break;
                  case "museos":
                    alert("Museos emblematico de Valle son: Museo de la Caña de Azucar,Museo del Oro Calima,Museo Departamental de Ciencias Naturales Federico");
                    break;
                  default:
                    alert(
                      option +
                    "  Por favor ingresar un opcion correcta"
                    )
                }
              } else{
                alert(
                  department +
                "  Por favor ingrese un Departamento correcta"
                );
              }
            }
          }
        }
        
        
    } 

