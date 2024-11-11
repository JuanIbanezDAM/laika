//Variables
var trailerButton = document.getElementById("trailer-button");
var reproductor = document.getElementById('reproductor');

/* var contendorReproductor = document.getElementById('section-main'); */

trailerButton.addEventListener("click", function () {
    let estadoReproductor = reproductor.style.display;
    reproductor.style.display = estadoReproductor === "block" ? "none" : "block";
});

