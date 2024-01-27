function abrirModal(){

    let modal = document.getElementById("myModal");
    modal.style.display = "flex";

}

function cerrarModal(){

    let modal = document.getElementById("myModal");
    modal.style.display = "none";

}

let mostrarImagen = document.getElementById("mostrarImagenProgramador");
mostrarImagen.addEventListener("click", abrirModal);

window.onload = function () {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  };