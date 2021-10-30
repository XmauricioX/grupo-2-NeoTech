window.addEventListener("load", () => {

    let eliminar = document.querySelector("#FORM_DELETE")
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