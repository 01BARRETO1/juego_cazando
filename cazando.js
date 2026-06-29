let canvas= document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");


//Constantes:
const ALTO_GATO=30;
const ANCHO_GATO=80;
const ALTO_COMIDA=20;
const ANCHO_COMIDA=20;
//Variables iniciadas en cero
let gatoX = (canvas.width - ANCHO_GATO) / 2;
let gatoY = (canvas.height - ALTO_GATO) / 2;
let comidaX=0;
let comidaY=0;

function graficarGato(){
    graficarRectangulo(gatoX,gatoY,ANCHO_GATO,ALTO_GATO,"#ce4a07");
    //ctx.fillStyle="#ce4a07";
    //ctx.fillRect(gatoX-ANCHO_GATO/2,gatoY-ALTO_GATO,ANCHO_GATO,ALTO_GATO);
}

function graficarComida(){
    graficarRectangulo(comidaX,comidaY,ANCHO_COMIDA,ALTO_COMIDA,"#0fa904");
    //ctx.fillStyle="#0fa904";
    //ctx.fillRect(comidaX,comidaY,ANCHO_COMIDA,ALTO_COMIDA);
    detectarColision();
}

function iniciarJuego(){
    graficarGato();
    ctx.fillStyle="#0fa904";
    comidaX=500-ANCHO_COMIDA;
    ctx.fillRect(comidaX,comidaY,ANCHO_COMIDA,ALTO_COMIDA);
    graficarComida();
}

function graficarRectangulo(x,y,ancho,alto,color){
    ctx.fillStyle=color;
    ctx.fillRect(x,y,ancho,alto);
}

function limpiarCanva(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
}

function moverIzquierda(){
    gatoX=gatoX-10;
    limpiarCanva();
    graficarGato();
    graficarComida();
    detectarColision()
}

function moverDerecha(){
    gatoX=gatoX+10;
    limpiarCanva();
    graficarGato();
    graficarComida();
    detectarColision()
}

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
        alert("COMIDA ATRAPADA!");
    }
}