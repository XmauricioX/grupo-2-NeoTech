window.addEventListener("load", () => {

    let eliminar = document.querySelector("#FORM_DELETE")
    eliminar.addEventListener('click', function () {
        confirm("seguro?")

        if (confirm) {
            alert("se elimino")
        }
    })

})