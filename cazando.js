let canvas= document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");

function graficarGato(){
    ctx.fillStyle="#ce4a07";
    ctx.fillRect(canvas.width/2-40,canvas.height/2-30,80,30);

}