function qs(element) {
    return document.querySelector(element)
}

window.addEventListener('load', function () {
    
    let
    $email = qs("#email"),
    $emailErrors = qs("#emailErrors"),
    $password = qs("#password"),
    $passwordErrors = qs("#passwordErrors"),
    $loginForm = qs("#loginForm"),
    regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;



    //email
    $email.addEventListener("blur", function() {
        switch (true) {
            case !$email.value.trim():
                $emailErrors.innerHTML = 'El campo email es obligatorio'
                break;
            case !regExEmail.test($email.value):
                $emailErrors.innerHTML = 'Debes ingresar un email válido'
                break;
            default:
                $emailErrors.innerHTML = ''
                break;
        }
    })

    //password
    $password.addEventListener('blur', function(){
        switch (true) {
            case !$password.value.trim():
                $passwordErrors.innerHTML = '*La contraseña es obligatoria'
                break;
            case $password.value.length < 8 || $password.value.length > 20:
                $passwordErrors.innerHTML = '*La contraseña debe tener entre 8 y 20 caracteres'
                break;
            default:
                $passwordErrors.innerHTML = ""
                break;
        }
    })


    //form
    $loginForm.addEventListener('submit', (event) => {
        let error = false;
        event.preventDefault()
        console.log($loginForm.elements)
        let elementosForm = $loginForm.elements

        for (let index = 0; index < elementosForm.length - 2; index++) {
            if (elementosForm[index].value == "" || elementosForm[index].value == 0) {
                submitErrors.innerHTML = "Todos los campos son obligatorios";
                error = true;
            }
        }

        if (!error) {
            console.log('Formulario cargado con exito!');
            $loginForm.submit()
        }
    })
})