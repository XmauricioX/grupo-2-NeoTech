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
    regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
    warning = `<i class="fas fa-exclamation-circle"></i>`;

    let validationsErrors = false


    //email
    $email.addEventListener("blur", function() {
        switch (true) {
            case !$email.value.trim():
                $emailErrors.innerHTML = `${warning} El campo email es obligatorio`
                $email.style.borderColor = "#eb1010"
                validationsErrors = true
                break;
            case !regExEmail.test($email.value):
                $emailErrors.innerHTML = `${warning} Debes ingresar un email válido`
                $email.style.borderColor = "#eb1010"
                validationsErrors = true
                break;
            default:
                $emailErrors.innerHTML = ''
                $email.style.borderColor = "var(--green)"
                validationsErrors = false
                break;
        }
    })

    //password
    $password.addEventListener('blur', function(){
        switch (true) {
            case !$password.value.trim():
                $passwordErrors.innerHTML = `${warning} La contraseña es obligatoria`
                $password.style.borderColor = "#eb1010"
                validationsErrors = true
                break;
            case $password.value.length < 8 || $password.value.length > 20:
                $passwordErrors.innerHTML = `${warning} La contraseña debe tener entre 8 y 20 caracteres`
                $password.style.borderColor = "#eb1010"
                validationsErrors = true
                break;
            default:
                $passwordErrors.innerHTML = ""
                $password.style.borderColor = "var(--green)"
                validationsErrors = false
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
                elementosForm[index].style.borderColor = "#eb1010"
                submitErrors.innerHTML = `${warning} Todos los campos son obligatorios`;
                error = true;
            }
        }

        if (!error && !validationsErrors) {
            console.log('Formulario cargado con exito!');
            $loginForm.submit()
        }
    })
})