//Boton de ataque (que se turna entre p1 y p2)
//Muestreo en tiempo real de la vida de cada personaje
//Pantalla final anuncianod al ganador (p1 o p2)
//EXTRA: Distintos tipos de ataque, equipos de 3 luchadores

//HMTL5, CSS3, JS ES6, ""API HTML"""
// 15 commits como minimo



let pantalla1 = document.getElementById("fase1");
let pantalla2 = document.getElementById("fase2");
let pantalla3 = document.getElementById("fase3");
let pantalla4 = document.getElementById("fase4");


const cambiaPantalla = (valor) => {


    // ahora sé a que pantalla quiero dirigirme al concatenar
    let faseDestino= "fase" + valor;

    // creo un array con todas las fases
    let arrayFases = ["fase1", "fase2", "fase3", "faseFinal"];


    // incluir en arrayFaess todas las fases menos la de destino
    //para ello usamos filter.
    arrayFases = arrayFases.filter(val=> !faseDestino.includes(val));

    //primero habilitamos la fase a la que uqeremos ir

    document.getElementById(faseDestino).style.display = "block";

    //finalmente deshabilitamos el resto

    for(let pantalla of arrayFases) {
        document.getElementById(pantalla).style.display ="none";
    }


}

// class Luchador {

//     constructor (nombre, vida, fuerza, defensa, nacionalidad, suerte){

//         this.nombre = nombre;
//         this.vida = vida;
//         this.fuerza = fuerza;
//         this.defensa = defensa;
//         this.nacionalidad = nacionalidad;
//         this.suerte = suerte;
//     }
// }
  
// let player1 = new Luchador ("Arya Stark", 100, 70, 90, "Invernalia", 10);

// let player2 = new Luchador ("Rey de los Caminantes Blancos", 100, 90, 40, "Más allá del muro", 6);

// let player3 = new Luchador ("Daenerys Targaryen", 100, 100, 10, "Rocadragón", 8);

// let player4 = new Luchador ("Joffrey Baratheon", 100, 1, 1, "Desembarco del Rey", 1);


// console.log("El luchador 1 tiene el siguiente estado:", player1)

// console.log("El luchador 2 tiene el siguiente estado:", player2)

// console.log("El luchador 3 tiene el siguiente estado:", player3)

// console.log("El luchador 4 tiene el siguiente estado:", player4)