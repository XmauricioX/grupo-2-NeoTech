window.addEventListener("load", () => {

    let eliminarBtn = document.querySelector("#delete-product")
    eliminarBtn.addEventListener('click', function (event) {
        if (confirm("seguro?")) {
            document.formularioEliminar.submit()
            alert("se elimino")
        }else{
            event.preventDefault()
            alert("no se elimino")
        }

    })

})