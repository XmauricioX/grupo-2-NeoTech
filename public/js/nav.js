//MENU
/* se declaran las variables guardando el ID que se requiere */
const btnMenu = document.querySelector("#btnMenu");
const menu = document.querySelector("#menu");
/* //////////////////////////////////////////////// */

/* al dar click(evento) se dispara una funcion que muestra la clase "mostrar" */
btnMenu.addEventListener('click', function () {
    menu.classList.toggle("mostrar");
});

//SUBMENU
const subMenuBtn = document.querySelectorAll(".submenu-btn");
for (let i = 0; i < subMenuBtn.length; i++) {
    subMenuBtn[i].addEventListener("click", function(){
        if(window.innerWidth < 1024){
            const subMenu = this.nextElementSibling;
            const height = subMenu.scrollHeight;

            if(subMenu.classList.contains("desplegar")){
                subMenu.classList.remove("desplegar");
                subMenu.removeAttribute("style");
            } else {
                subMenu.classList.add("desplegar");
                subMenu.style.height = height + "px";
            }
        }
    })
}