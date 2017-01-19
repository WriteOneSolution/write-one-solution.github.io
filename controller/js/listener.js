function textoEs(){
    document.getElementById('areaTexto').innerHTML = "Hola ayudamos a mejorar tu experiencia. Selecciona el idioma en el que deseas navegar.";
}
function textoIn(){
    document.getElementById('areaTexto').innerHTML = "Hi!";
}
/*Español*/
document.getElementById('es').addEventListener("mouseover", textoEs, true);
/*Ingles*/
document.getElementById('en').addEventListener("mouseover", textoIn, true);
