window.addEventListener("load", () => {

    let eliminar = document.querySelectorAll("#delete_user")

    eliminar.forEach(element => {
    element.addEventListener('click', function (event) {

        if (confirm("seguro?")) {
            document.formularioEliminar.submit()
            alert("se elimino")
        }else{
            event.preventDefault()
            alert("no se elimino")
        }
    })
})     
})