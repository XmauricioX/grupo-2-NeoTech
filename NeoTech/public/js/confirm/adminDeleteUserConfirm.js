window.addEventListener("load", () => {

    let eliminar = document.querySelector("#delete_product")
    eliminar.addEventListener('click', function (event) {

        if (confirm("seguro?")) {
            document.formularioEliminar.submit()
            alert("se elimino")
        }else{
            event.preventDefault()
            alert("no se elimino")
        }

    })

})