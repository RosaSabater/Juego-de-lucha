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
    let faseSiguiente= "fase" + valor;

    // creo un array con todas las fases
    let arrayFases = ["fase1", "fase2", "fase3", "fase4"];


    // Si la fase es a la que voy no la oculto (la meto en pantallasOcultar), si no, la oculto.
    let pantallasOcultar = arrayFases.filter(fase=> {
        if (fase === faseSiguiente) {
            return false;
        }else {
            return true;
        }
    });

    //primero habilitamos la fase a la que queremos ir
    document.getElementById(faseSiguiente).style.display = "block";

    //finalmente deshabilitamos el resto

    for(let pantalla of pantallasOcultar) {
        document.getElementById(pantalla).style.display ="none";
    }


}

class Luchador {

    constructor (nombre, vida, fuerza, defensa, nacionalidad, suerte){

        this.nombre = nombre;
        this.vida = vida;
        this.fuerza = fuerza;
        this.defensa = defensa;
        this.nacionalidad = nacionalidad;
        this.suerte = suerte;
    }
}
  
let Arya = new Luchador ("Arya Stark", 100, 70, 90, "Invernalia", 10);

let Rey = new Luchador ("Rey de los Caminantes Blancos", 100, 90, 40, "Más allá del muro", 6);

let Daenerys = new Luchador ("Daenerys Targaryen", 100, 100, 10, "Rocadragón", 8);

let Joffrey = new Luchador ("Joffrey Baratheon", 100, 1, 1, "Desembarco del Rey", 1);


let personaje1 = document.getElementById("personaje1");
let personaje2 = document.getElementById("personaje2");
let personaje3 = document.getElementById("personaje3");
let personaje4 = document.getElementById("personaje4");


const pulsaPersonaje = (ev) => {
    let seleccion = ev.target.id;

    if(escoger1 == "") { //si escoger1 está vacio, j1 no ha elegido todavía
        escoger1 = seleccion; 

        let textoSeleccion = document.getElementById("textoSeleccion");
        textoSeleccion.innerText = "Jugador 2, elige personaje";
    }else{
        escoger2 = seleccion;
        cambiaPantalla(3);
    }
}

personaje1.addEventListener("click", pulsaPersonaje)
personaje2.addEventListener("click", pulsaPersonaje)
personaje3.addEventListener("click", pulsaPersonaje)
personaje4.addEventListener("click", pulsaPersonaje)


let escoger1 = "";
let escoger2 = "";

let textoSeleccion = document.getElementById("textoSeleccion");
textoSeleccion.innerText = "Jugador 1, elige personaje";


const idToPj = (id) => {
    
    // let nombrePersonaje;

    switch (id) {

        case "personaje1":
            return Daenerys;
        
        case "personaje2":
            return Arya;

        case "personaje3":
            return Joffrey;

        case "personaje4":
            return Rey;

        default:
            "No has escogido un personaje"
        break;
    }
}

