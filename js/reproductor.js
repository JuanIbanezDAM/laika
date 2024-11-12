/* var contendorReproductor = document.getElementById('section-main'); */

//Variables

var player = document.getElementById('reproductor');
var estado = player.muted

// Opciones del reproductor
/* play */
document.getElementById("btnPlay").addEventListener("click", function () {
    player.play();
});
/* pause */
document.getElementById("btnPause").addEventListener("click", function () {
    player.pause();
});
/* mute */
document.getElementById("btnMute").addEventListener("click", modiEstado);


// Funciones

//Alterna el sonido del video
function modiEstado() {
    estado = player.muted = !estado;
};

// Si el reproductor de inicia
player.addEventListener("play", function () {
    document.getElementById("btnPlay").style.display = "none";
    document.getElementById("btnPause").style.display = "inline-block";
});

// Si el reproductor se para
player.addEventListener("pause", function () {
    document.getElementById("btnPause").style.display = "none";
    document.getElementById("btnPlay").style.display = "inline-block";
});