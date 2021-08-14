let boton = document.getElementById("boton-play");
let pantalla = document.getElementById("black-screen")

boton.onclick = function() {
    window.scroll({top})
    pantalla.style.animation = "mynewmove 4s";
    setTimeout(() =>{ 
        pantalla.style.display = "none"
    }, 4000);
}

window.scroll(0)