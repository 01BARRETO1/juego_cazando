let canvas= document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");

//Variables iniciadas en cero
let gatoX=canvas.width/2;
let gatoY=canvas.height/2;
let comidaX=0;
let comidaY=0;
//Constantes:
const ALTO_GATO=30;
const ANCHO_GATO=80;
const ALTO_COMIDA=10;
const ANCHO_COMIDA=10;

function graficarGato(){
    graficarRectangulo(gatoX-ANCHO_GATO/2,gatoY-ALTO_GATO,ANCHO_GATO,ALTO_GATO,"#ce4a07");
    //ctx.fillStyle="#ce4a07";
    //ctx.fillRect(gatoX-ANCHO_GATO/2,gatoY-ALTO_GATO,ANCHO_GATO,ALTO_GATO);
}

function graficarComida(){
    graficarRectangulo(comidaX,comidaY,ANCHO_COMIDA,ALTO_COMIDA,"#0fa904");
    //ctx.fillStyle="#0fa904";
    //ctx.fillRect(comidaX,comidaY,ANCHO_COMIDA,ALTO_COMIDA);
}

function iniciarJuego(){
    graficarGato();
    ctx.fillStyle="#0fa904";
    comidaX=490;
    ctx.fillRect(comidaX,comidaY,ANCHO_COMIDA,ALTO_COMIDA);
    graficarComida();
}

function graficarRectangulo(x,y,ancho,alto,color){
    ctx.fillStyle=color;
    ctx.fillRect(x,y,ancho,alto);
}
