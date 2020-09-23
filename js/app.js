//Boton de ataque (que se turna entre p1 y p2)
//Muestreo en tiempo real de la vida de cada personaje
//Pantalla final anuncianod al ganador (p1 o p2)
//EXTRA: Distintos tipos de ataque, equipos de 3 luchadores

//HMTL5, CSS3, JS ES6, ""API HTML"""
// 15 commits como minimo


// asignamos pantallaX a los divs de las diferentes pantallas con su id
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
 
    if (valor === 3) {
 
        muestraPersonaje();

    };

    if (valor === 4) {

        reset();

    };


    //primero habilitamos la fase a la que queremos ir
    document.getElementById(faseSiguiente).style.display = "block";

    //finalmente deshabilitamos el resto

    for(let pantalla of pantallasOcultar) {
        document.getElementById(pantalla).style.display ="none";
    }
    
}

class Luchador {

    constructor (nombre, vida, fuerza, defensa, nacionalidad, suerte, imagen){

        this.nombre = nombre;
        this.vida = vida;
        this.fuerza = fuerza;
        this.defensa = defensa;
        this.nacionalidad = nacionalidad;
        this.suerte = suerte;
        
        this.imagen = imagen;
    }


}
  
let Arya = new Luchador ("Arya Stark", 100, 70, 90, "Invernalia", 10, "/img/arya2.png");

let Rey = new Luchador ("Rey de los Caminantes Blancos", 100, 90, 40, "Más allá del muro", 6, "/img/rey1.jpg");

let Daenerys = new Luchador ("Daenerys Targaryen", 100, 100, 10, "Rocadragón", 8, "/img/daenerys2.png");

let Joffrey = new Luchador ("Joffrey Baratheon", 100, 1, 1, "Desembarco del Rey", 1, "/img/joffrey1.jpg");


// asignamos personajeX a los divs de las diferentes imagenes de luchadores con su id
let personaje1 = document.getElementById("personaje1");
let personaje2 = document.getElementById("personaje2");
let personaje3 = document.getElementById("personaje3");
let personaje4 = document.getElementById("personaje4");


// creao una función para que al pulsar jugador1 sobre un pj salte al jugador2.
const pulsaPersonaje = (ev) => {

    //selección será la id de cada personaje
    let seleccion = ev.target.id; 

    if(escoger1 === "") { //si escoger1 está vacio, j1 no ha elegido todavía

        let textoSeleccion = document.getElementById("textoSeleccion");
        textoSeleccion.innerText = "Jugador 2, elige personaje";

        escoger1 = idToPj(seleccion);

    }else{

        escoger2 = idToPj(seleccion);
        cambiaPantalla(3);

    }
}

// creo una función para que al elegir personaje en la fase2 se muestre en la fase 3
// con su imagen, nombre y vida
const muestraPersonaje = (ev) => {

    document.getElementById("imagenJugador1").src = escoger1.imagen;
    document.getElementById("nombreJugador1").innerText = escoger1.nombre;
    document.getElementById("vidaJugador1").innerText = escoger1.vida;
    
    document.getElementById("imagenJugador2").src = escoger2.imagen;
    document.getElementById("nombreJugador2").innerText = escoger2.nombre;
    document.getElementById("vidaJugador2").innerText = escoger2.vida;


    //el botón de fase3 solo se mostrará si la vida de pj1 o pj2 llega a 0
    if (escoger1.vida === 0 || escoger2.vida === 0) {

        let boton3 = document.getElementById("boton3").style.display = "block";

    } else {

        let boton3 = document.getElementById("boton3").style.display = "none";

    }
}


//al hacer click sobre la imagen del personaje ejecuto pulsaPersonaje
personaje1.addEventListener("click", pulsaPersonaje)
personaje2.addEventListener("click", pulsaPersonaje)
personaje3.addEventListener("click", pulsaPersonaje)
personaje4.addEventListener("click", pulsaPersonaje)

//creo dos variables vacias para llenarlas con pulsaPersonaje>idToPj
let escoger1 = "";
let escoger2 = "";

//el texto en fase2 empezará con Jugador1 eligiendo personaje
let textoSeleccion = document.getElementById("textoSeleccion");
textoSeleccion.innerText = "Jugador 1, elige personaje";


//Creo una función para que me convierta la id del div a la class del personaje
//con sus atributos asignados
const idToPj = (id) => {

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

//reseteo la partida
const reset = (ev) => {

    escoger1 = "";
    escoger2 = "";

}


