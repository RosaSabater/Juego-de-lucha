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

    // if (valor === 4) {

    //     reset();

    // };



    //primero habilitamos la fase a la que queremos ir
    document.getElementById(faseSiguiente).style.display = "block";



    //finalmente deshabilitamos el resto

    for(let pantalla of pantallasOcultar) {
        document.getElementById(pantalla).style.display ="none";
    }
    
}



//creo una variable impar 
let turno = 1;



class Luchador {

    constructor (nombre, vida, fuerza, defensa, suerte, imagen){

        this.nombre = nombre;
        this.vida = vida;
        this.fuerza = fuerza;
        this.defensa = defensa;
        this.suerte = suerte;
        
        this.imagen = imagen;
    }



    golpear = (atacado) => {
        
        let damage = this.fuerza - atacado.defensa;
        
        if (damage < 0) {
            damage = 0;
        }
        
        atacado.vida = atacado.vida - damage;
        
        console.log("Daño: ", damage)
    }
}
  
//

const pulsaAtacar = () => {

    turno++;

    if (turno % 2 === 0) {
        
        player2.golpear(player1);
        muestraPersonaje();

    } else {

        player1.golpear(player2);
        muestraPersonaje();
    }
    


    //el boton de atacar se mostrará si la vida es mayor que 0
    if (player1.vida >= 1 || player2.vida >= 1) {

        let botonAtacar = document.getElementById("botonAtacar").style.display = "block";

    }else {

        let botonAtacar = document.getElementById("botonAtacar").style.display = "none";

    }



    //el botón de fase3 solo se mostrará si la vida de pj1 o pj2 llega a 0
    if (player1.vida <= 0 || player2.vida <= 0) {

        cambiaPantalla(4);
    } 

}

let Daenerys = new Luchador ("Daenerys Targaryen", 100, 80, 10, 8, "/img/daenerys2.png");

let Arya = new Luchador ("Arya Stark", 100, 70, 90, 10, "/img/arya2.png");

let Joffrey = new Luchador ("Joffrey Baratheon", 100, 1, 1, 1, "/img/joffrey1.jpg");

let Rey = new Luchador ("Rey de los Caminantes Blancos", 100, 90, 40, 6, "/img/rey1.jpg");



// asignamos personajeX a los divs de las diferentes imagenes de luchadores con su id
let personaje1 = document.getElementById("personaje1");
let personaje2 = document.getElementById("personaje2");
let personaje3 = document.getElementById("personaje3");
let personaje4 = document.getElementById("personaje4");



//creo dos variables vacias para llenarlas con pulsaPersonaje>idToPj
let player1 = "";
let player2 = "";



//el texto en fase2 empezará con Jugador1 eligiendo personaje
let textoSeleccion = document.getElementById("textoSeleccion");
textoSeleccion.innerText = "Jugador 1, elige personaje";



// creao una función para que al pulsar jugador1 sobre un pj salte al jugador2.
const pulsaPersonaje = (ev) => {

    //selección será la id de cada personaje
    let seleccion = ev.target.id; 

    if(player1 === "") { //si player1 está vacio, player1 no ha elegido todavía

        let textoSeleccion = document.getElementById("textoSeleccion");
        textoSeleccion.innerText = "Jugador 2, elige personaje";

        player1 = idToPj(seleccion);

    }else{

        player2 = idToPj(seleccion);
        cambiaPantalla(3);

    }


    if (player2 === player1) {

        let textoSeleccion = document.getElementById("textoSeleccion");
        textoSeleccion.innerText = "No puedes escoger el mismo guerrero";
        textoSeleccion.style.color = "red"; //no lo vuelvo a poner en black porque no sale otro texto

        cambiaPantalla(2);
    }
}



//al hacer click sobre la imagen del personaje ejecuto pulsaPersonaje
personaje1.addEventListener("click", pulsaPersonaje)
personaje2.addEventListener("click", pulsaPersonaje)
personaje3.addEventListener("click", pulsaPersonaje)
personaje4.addEventListener("click", pulsaPersonaje)



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



// creo una función para que al elegir personaje en la fase2 se muestre en la fase 3
// con su imagen, nombre y vida
const muestraPersonaje = (ev) => {

    document.getElementById("imagenJugador1").src = player1.imagen;
    document.getElementById("nombreJugador1").innerText = player1.nombre;
    document.getElementById("vidaJugador1").innerText = player1.vida;
    
    document.getElementById("imagenJugador2").src = player2.imagen;
    document.getElementById("nombreJugador2").innerText = player2.nombre;
    document.getElementById("vidaJugador2").innerText = player2.vida;

}



//reseteo la partida
const reset = (ev) => {

    player1 = "";
    player2 = "";

}


