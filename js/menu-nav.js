//Menu principal
//Elementos html
const enlaceDw = document.getElementById("enlace-dropdown");
const listaDw = document.getElementById("lista-dropdown");
const ultimoEnlaceDw = document.getElementById("ultimoEnlace-dropdown");

//Eventos
enlaceDw.addEventListener("focus", () => {
    listaDw.style.display = "grid";
});
ultimoEnlaceDw.addEventListener("blur", () => {
    listaDw.style.display = "none";
});