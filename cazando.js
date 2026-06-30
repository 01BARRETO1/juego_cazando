let canvas= document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");

//
// Imágenes
const gatoDerecha = new Image();
gatoDerecha.src = "img/gato_derecha.png";

const gatoIzquierda = new Image();
gatoIzquierda.src = "img/gato_izquierda.png";

const raton = new Image();
raton.src = "img/raton.png";

let gatoActual = gatoDerecha;
//


//Constantes:
const ALTO_GATO=80;
const ANCHO_GATO=190;
const ALTO_COMIDA=60;
const ANCHO_COMIDA=45;
//Variables iniciadas en cero
let gatoX = (canvas.width - ANCHO_GATO) / 2;
let gatoY = (canvas.height - ALTO_GATO) / 2;
let comidaX=0;
let comidaY=0;

//Variables puntos y tiempo
let puntos=0;
let tiempo=10;
//Variable detener intervalo
let interval= setInterval(restarTiempo,1000);

//
function graficarGato(){
    ctx.drawImage(
        gatoActual,
        gatoX,
        gatoY,
        ANCHO_GATO,
        ALTO_GATO
    );

    detectarColision();
}
//

/* function graficarGato(){
    
    graficarRectangulo(gatoX,gatoY,ANCHO_GATO,ALTO_GATO,"#ce4a07");
    //ctx.fillStyle="#ce4a07";
    //ctx.fillRect(gatoX-ANCHO_GATO/2,gatoY-ALTO_GATO,ANCHO_GATO,ALTO_GATO);
    detectarColision();
} */

//
function graficarComida(){

    ctx.drawImage(
        raton,
        comidaX,
        comidaY,
        ANCHO_COMIDA,
        ALTO_COMIDA
    );

    detectarColision();
}
//

/* function graficarComida(){
    graficarRectangulo(comidaX,comidaY,ANCHO_COMIDA,ALTO_COMIDA,"#0fa904");
    //ctx.fillStyle="#0fa904";
    //ctx.fillRect(comidaX,comidaY,ANCHO_COMIDA,ALTO_COMIDA);
    detectarColision();
} */

function iniciarJuego(){
    
    graficarGato();
    ctx.fillStyle="#0fa904";
    comidaX=500-ANCHO_COMIDA;
    ctx.fillRect(comidaX,comidaY,ANCHO_COMIDA,ALTO_COMIDA);
    graficarComida();
    
    interval;
}

function graficarRectangulo(x,y,ancho,alto,color){
    ctx.fillStyle=color;
    ctx.fillRect(x,y,ancho,alto);
}

function limpiarCanva(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
}

//
function moverIzquierda(){

    gatoActual = gatoIzquierda;

    gatoX -= 10;

    limpiarCanva();
    graficarGato();
    graficarComida();
}
//

/* function moverIzquierda(){
    gatoX=gatoX-10;
    limpiarCanva();
    graficarGato();
    graficarComida();
    detectarColision()
} */

    //
    function moverDerecha(){

    gatoActual = gatoDerecha;

    gatoX += 10;

    limpiarCanva();
    graficarGato();
    graficarComida();
}
    //

/* function moverDerecha(){
    gatoX=gatoX+10;
    limpiarCanva();
    graficarGato();
    graficarComida();
    detectarColision()
} */

function moverArriba(){
    gatoY=gatoY-10;
    limpiarCanva();
    graficarGato();
    graficarComida();
    detectarColision()
}

function moverAbajo(){
    gatoY=gatoY+10;
    limpiarCanva();
    graficarGato();
    graficarComida();
    detectarColision()
}

function detectarColision(){
    //comidaX= el borde izquierda
    //comidaX + ANCHO_COMIDA= el borde de la derecha
    //comidaY= arriba, el borde de arriba el techo de la figura
    //comidaY + ALTO_COMIDA = AL BORDE DE ABAJO 
    if(comidaX < gatoX + ANCHO_GATO && comidaX + ANCHO_COMIDA > gatoX 
        && comidaY < gatoY + ALTO_GATO && comidaY + ALTO_COMIDA > gatoY
    ){
        //tiempo 
        tiempo=10
        mostrarEnSpam("tiempo",tiempo);
        //ALEATORIO COMIDA
        comidaX=generarAleatorio(0,500-ANCHO_COMIDA);
        comidaY=generarAleatorio(0,500-ALTO_COMIDA);
        //alert("COMIDA ATRAPADA!");
        //SISTEMA DE PUNTAJE
        puntos=puntos+1;
        mostrarEnSpam("puntos",puntos);
        //Si el puntaje llega a 6 → mostrar alert de ganador y detener el setInterval.
        if(puntos==6){
            clearInterval(interval);
            alert("Ganador!");
        
        }
        //Si el tiempo llega a 0 → mostrar alert de Game Over y detener el setInterval.
    }
}

function restarTiempo(){
    tiempo=tiempo-1;
    mostrarEnSpam("tiempo",tiempo);
    //Si el tiempo llega a 0 → mostrar alert de Game Over y detener el setInterval.
    if(tiempo==0){
        clearInterval(interval);
        alert("GAME OVER");
        reset();
    }
    
}

function reset(){
    clearInterval(interval);
    limpiarCanva();
    gatoX = (canvas.width - ANCHO_GATO) / 2;
    gatoY = (canvas.height - ALTO_GATO) / 2;
    graficarGato();
    comidaX=500-ANCHO_COMIDA;
    comidaY=0
    
    ctx.fillRect(comidaX,comidaY,ANCHO_COMIDA,ALTO_COMIDA);
    graficarComida();
    tiempo=10;
    mostrarEnSpam("tiempo",tiempo);
    puntos=0;
    mostrarEnSpam("puntos",puntos);
    interval= setInterval(restarTiempo,1000);

}