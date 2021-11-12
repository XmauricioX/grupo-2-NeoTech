window.addEventListener('load', function(){
    
    let btn = document.querySelectorAll('#delete-product')
    let form = document.querySelector('#formularioEliminar')
    let modal = document.querySelector('#modal')
    let borrar = document.querySelector('#borrar')
    let noBorrar = document.querySelector('#noBorrar')

    btn.forEach( element => {
        element.addEventListener('click', enviar =>{
            modal.style.display = 'block'
            if(borrar.addEventListener('click', () =>{ 
                // form.submit()
                console.log("borró")
            } 
            )){
            }else{
                enviar.preventDefault()
            }
        }) 
    })

    noBorrar.addEventListener('click', () => {
        modal.style.display = 'none' 
    })
})


// MODAL HTML


{/* <div id="modal" style="display: none;">
    <p style="text-align: center;">seguro que quiere borrar este producto?</p> <br>
    <div id="opciones">
        <p id="borrar">borrar</p>
        <p> <%= element.product_name %> </p>
        <p> id: <%= element.id %> </p>
        <p id="noBorrar">no borrar</p>
    </div>
</div> */}