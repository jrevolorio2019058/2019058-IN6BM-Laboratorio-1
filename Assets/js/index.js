let sound = new Audio;
let contador = 0;
let actual = 1.0;
let cancion;


function guardarCancion(char){

    cancion = char;
    contador = 1;
    sound.pause();
    sound = new Audio(cancion)
    sound.play();

}

function reproducir(){

    if(contador == 0){

        sound = new Audio('./Assets/music/podcast.mp3');

        sound.volume = actual;

        sound.play();

    }else{

        cancion = reproducir

        sound = new Audio(reproducir)

        sound.volume = actual;

        sound.play();


    }


}

function pausar(){

    sound.pause();

}

function bajarVolumen(){

    if(actual > 0.1){

        actual -= 0.1;
        sound.volume = actual;

    }else{
        actual = 0;
    }

}

function subirVolumen(){

    if(actual < 0.9){

        actual += 0.1;
        sound.volume = actual;

    }else{
        actual = 1.0;
    }

}