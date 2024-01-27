let nombre = document.getElementById("nombre");
let correo = document.getElementById("correo");
let mensaje = document.getElementById("mensaje");

function envioMensaje(){

    if(nombre.value == "" && correo.value == ""){

        window.alert("Escriba un nombre y un correo para poder enviar mensaje");
        nombre.style.backgroundColor = "#CB0101";
        correo.style.backgroundColor = "#CB0101";
        mensaje.style.backgroundColor = "#ffffff";

    }else if(nombre.value == "" && mensaje.value == ""){

        window.alert("Escriba un nombre y un mensaje para poder enviar mensaje");
        nombre.style.backgroundColor = "#CB0101";
        correo.style.backgroundColor = "#ffffff";
        mensaje.style.backgroundColor = "#CB0101";

    }else if(mensaje.value == "" && correo.value == ""){

        window.alert("Escriba un correo y un mensaje para poder enviar mensaje");
        nombre.style.backgroundColor = "#ffffff";
        correo.style.backgroundColor = "#CB0101";
        mensaje.style.backgroundColor = "#CB0101";

    }else if(nombre.value == ""){

        window.alert("Escriba su nombre para poder enviar mensaje");
        nombre.style.backgroundColor = "#CB0101";
        correo.style.backgroundColor = "#ffffff";
        mensaje.style.backgroundColor = "#ffffff";

    }else if(correo.value == ""){

        window.alert("Escriba su correo para poder enviar mensaje");
        nombre.style.backgroundColor = "#ffffff";
        correo.style.backgroundColor = "#CB0101";
        mensaje.style.backgroundColor = "#ffffff";

    }else if(mensaje.value == ""){

        window.alert("Escriba un motivo para poder enviar mensaje");
        nombre.style.backgroundColor = "#ffffff";
        correo.style.backgroundColor = "#ffffff";
        mensaje.style.backgroundColor = "#CB0101";

    }else{

        window.alert("Mensaje Enviado, Gracias por contactarnos");
        nombre.style.backgroundColor = "#ffffff";
        correo.style.backgroundColor = "#ffffff";
        mensaje.style.backgroundColor = "#ffffff";
        nombre.value = "";
        correo.value = "";
        mensaje.value = "";

    }

}