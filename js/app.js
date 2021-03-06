//Boton de ataque (que se turna entre p1 y p2)
//Muestreo en tiempo real de la vida de cada personaje
//Pantalla final anuncianod al ganador (p1 o p2)
//EXTRA: Distintos tipos de ataque, equipos de 3 luchadores

//HMTL5, CSS3, JS ES6, ""API HTML"""
// 15 commits como minimo

document.querySelector('audio').click();
document.querySelector('audio').play();


let textoSelBatalla = document.getElementById("textoSelBatalla");

class Luchador {

    constructor (nombre, vida, fuerza, defensa, suerte, imagen){

        this.nombre = nombre;
        this.vida = vida;
        this.fuerza = fuerza;
        this.defensa = defensa;
        this.suerte = suerte;
        
        this.imagen = imagen;
    }
    
    //esto es un método ... empieza a atacar p1 a p2
    //la fuerza de p1 será la fuerza menos la defensa del p2
    golpear = (atacado) => {
        
        let damage = this.fuerza - (atacado.defensa + atacado.suerte);

        damage = damage + random(0, 21 + this.suerte)
        
        if (damage < 0) {
            damage = 0;
        }
        
        atacado.vida = atacado.vida - damage;
        actBarrasVida();
        
        ganador();

        textoSelBatalla.innerText = 
        (`${this.nombre} ataca a 
        ${atacado.nombre} y le hace 
        ${damage} de daño`);
      
    }
    
}

//devuelve un numero entre min y max (max excluido)
const random = (min, max) => {
    
    return Math.floor(Math.random() * (max - min)) + min;

} 



//nombre, vida, fuerza, defensa, suerte, imagen
let Daenerys = new Luchador ("Daenerys Targaryen", 100, 60, 20, 6, "img/daenerys2.png");

let Arya = new Luchador ("Arya Stark", 100, 50, 40, 8, "img/arya2.png");

let Joffrey = new Luchador ("Joffrey Baratheon", 100, 10, 10, 1, "img/joffrey1.png");

let Rey = new Luchador ("Rey de los Caminantes Blancos", 100, 70, 50, 3, "img/rey1.png");



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
 
    if (valor === 3) { //si estoy en la batalal de combate actualizo barras de vida
        //y muestro pj
        
        actBarrasVida();
        muestraPersonaje();

    };

    if (valor === 1) { //si estoy en la pantalla1, reseteo
 
        reset();

    };


    //primero habilitamos la fase a la que queremos ir
    document.getElementById(faseSiguiente).style.display = "block";



    //finalmente deshabilitamos el resto

    for(let pantalla of pantallasOcultar) {
        document.getElementById(pantalla).style.display ="none";
    }
    
}



//creo una variable impar para golpear();
//esto daría un random entre 1 y 2 , porque el 3 está excluido
let turno = random(1,3);

  

//cada  vez que se llama a pulsaAtacar suma 1
//si el turno es par golpea p1 a p2, si el turno es impar p2 a p1
//cada vez que se ataca se actualiza la vida del personaje con muestraPersonaje()
const pulsaAtacar = () => {

    turno++;

    if (turno % 2 === 0) {
        
        player1.golpear(player2);
        muestraPersonaje();

    } else {

        player2.golpear(player1);
        muestraPersonaje();

    }
    


    //el boton de atacar se mostrará si la vida es mayor que 0
    if (player1.vida >= 1 || player2.vida >= 1) {

        let botonAtacar = document.getElementById("botonAtacar").style.display = "block";

    }else {

        let botonAtacar = document.getElementById("botonAtacar").style.display = "none";

    }



    //cuando la vida de p1 o p2 sea menor o igual a 0 cambia a pantalla final
    if (player1.vida <= 0 || player2.vida <= 0) {

        cambiaPantalla(4);
    } 


}



// asignamos personajeX a los divs de las diferentes imagenes de luchadores con su id
let personaje1 = document.getElementById("personaje1");
let personaje2 = document.getElementById("personaje2");
let personaje3 = document.getElementById("personaje3");
let personaje4 = document.getElementById("personaje4");



//creo dos variables vacias para llenarlas con pulsaPersonaje>idToPj
let player1 = "";
let player2 = "";



//el texto en fase2 empezará con Jugador1 eligiendo personaje
//se mostrará este texto al llegar a la fase2
let textoSeleccion = document.getElementById("textoSeleccion");
textoSeleccion.innerText = "Jugador 1, elige personaje";



// creao una función para que al pulsar jugador1 sobre un pj salte al jugador2.
const pulsaPersonaje = (ev) => {

    //selección será la id de cada personaje
    let seleccion = ev.target.id; 

    if (player1 === "") { //si player1 está vacio, player1 no ha elegido todavía
        
        player1 = idToPj(seleccion);

        //se muestra texto cuando jugador 1 ya ha elegido
        let textoSeleccion = document.getElementById("textoSeleccion");
        textoSeleccion.innerText = "Jugador 2, elige personaje";


    }else{

        player2 = idToPj(seleccion);
        cambiaPantalla(3);//cuando p2 elige cambia de pantalla

    }

    //si el p2 elige el mismo pj que p1
    if (player2 === player1) {

        //salta un texto en rojo 
        let textoSeleccion = document.getElementById("textoSeleccion");
        textoSeleccion.innerText = "No puedes escoger el mismo guerrero";
        textoSeleccion.style.color = "red"; //no lo vuelvo a poner en black porque no sale otro texto

        //se queda en la misma pantalla
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



// //reseteo la partida
const reset = () => {

    player1 = "";
    player2 = "";

    
    textoSelBatalla.innerText = "";


    Daenerys = new Luchador ("Daenerys Targaryen", 100, 60, 20, 6, "img/daenerys2.png");

    Arya = new Luchador ("Arya Stark", 100, 50, 40, 8, "img/arya2.png");
    
    Joffrey = new Luchador ("Joffrey Baratheon", 100, 10, 10, 1, "img/joffrey1.png");
    
    Rey = new Luchador ("Rey de los Caminantes Blancos", 100, 70, 50, 3, "img/rey1.png");


    textoSeleccion.innerText = "Jugador 1, elige personaje";

}

const ganador = () => {
    
    if (player1.vida <= 0) {

        document.getElementById("ganador").src = player2.imagen;

        document.getElementById("textoGanador").innerText = `${player2.nombre}`;
  
    } else {
        
        document.getElementById("ganador").src = player1.imagen;

        document.getElementById("textoGanador").innerText = `${player1.nombre}`;
    }

}


const actBarrasVida = () => {

    document.getElementById("vidaJugador1").style.width = player1.vida + "%";
    document.getElementById("vidaJugador2").style.width = player2.vida + "%";

}


