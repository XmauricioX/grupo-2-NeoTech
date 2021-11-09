window.addEventListener("load", () => {

    let eliminarBtn = document.querySelectorAll("#delete-product")
    eliminarBtn.forEach(element =>{

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