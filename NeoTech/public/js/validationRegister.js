function qs(element) {
    return document.querySelector(element)
}


window.addEventListener("load", function () {

    let
    $inputName = qs("#inputName"),
    $inputNameErrors = qs("#inputNameErrors"),
    $inputLastName = qs("#inputLastName"),
    $inputLastNameErrors = qs("#inputLastNameErrors"),
    $email = qs("#email"),
    $emailErrors = qs("#emailErrors"),
    $password = qs("#password"),
    $passwordErrors = qs("#passwordErrors"),
    $rePassword = qs("#rePassword"),
    $rePasswordErrors = qs("#rePasswordErrors"),
    $check = qs("#check"),
    $checkErrors = qs("#checkErrors"),
    $registerForm = qs("#registerForm"),
    regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/,
    regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
    regExUppercase = /(?=.*?[A-Z])/,
    regExLowercase = /(?=.*?[a-z])/,
    // regExSpCharacter = /(?=.*?[#?!@$%^&*-])/,
    regExSpace = /^$|\s+/,
    regExNumber = /(?=.*?[0-9])/,
    regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/,
    warning = `<i class="fas fa-exclamation-circle"></i>`;


    let validationsErrors = false


    //name
    $inputName.addEventListener("blur", function () {
        switch (true) {
            case !$inputName.value.trim():
                $inputNameErrors.innerHTML = `${warning} El campo nombre es obligatorio`
                $inputName.style.borderColor = "#eb1010"
                validationsErrors = true
                break;
            case $inputName.value.length < 2:
                $inputNameErrors.innerHTML = `${warning} El nombre debe tener al menos 2 caracteres`
                $inputName.style.borderColor = "#eb1010"
                validationsErrors = true
                break;
            case !regExAlpha.test($inputName.value):
                $inputNameErrors.innerHTML = `${warning} Ingrese un nombre válido`
                $inputName.style.borderColor = "#eb1010"
                validationsErrors = true
                break;  
            default:
                $inputNameErrors.innerHTML = ''
                $inputName.style.borderColor = "var(--green)"
                validationsErrors = false
                break;
        }
    })


    //lastname
    $inputLastName.addEventListener("blur", function () {
        switch (true) {
            case !$inputLastName.value.trim():
                $inputLastNameErrors.innerHTML = `${warning} El campo apellido es obligatorio`
                $inputLastName.style.borderColor = "#eb1010"
                validationsErrors = true
                break;
            case $inputLastName.value.length < 2:
                $inputLastNameErrors.innerHTML = `${warning} El apellido debe tener al menos 2 caracteres`
                $inputLastName.style.borderColor = "#eb1010"
                validationsErrors = true
                break;
            case !regExAlpha.test($inputLastName.value):
                $nameErrors.innerHTML = `${warning} Ingresa un apellido válido`
                $inputLastName.style.borderColor = "#eb1010"
                validationsErrors = true
                break;      
            default:
                $inputLastNameErrors.innerHTML = ""
                $inputLastName.style.borderColor = "var(--green)"
                validationsErrors = false
                break;
        }
    })


    //email
    $email.addEventListener('blur', function() {
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
    $password.addEventListener("blur", function () {
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
            case !regExNumber.test($password.value):
                $passwordErrors.innerHTML = `${warning} La contraseña debe tener al menos un número`;
                $password.style.borderColor = "#eb1010"
                validationsErrors = true
                break;    
            case !regExLowercase.test($password.value):
                $passwordErrors.innerHTML = `${warning} La contraseña debe tener al menos una letra en minúscula`;
                $password.style.borderColor = "#eb1010"
                validationsErrors = true
                break;    
            case !regExUppercase.test($password.value):
                $passwordErrors.innerHTML = `${warning} La contraseña debe tener al menos una letra en mayúscula`;
                $password.style.borderColor = "#eb1010"
                validationsErrors = true
                break;        
            case regExSpace.test($password.value):
                $passwordErrors.innerHTML = `${warning} La contraseña no puede contener espacios entre medio`;
                $password.style.borderColor = "#eb1010"
                validationsErrors = true
                break;    
            case !regExPass.test($password.value):
                $passwordErrors.innerHTML = `${warning} La contraseña debe tener entre 8 y 20 caracteres, al menos una mayúscula, una minúscula y un número`;
                $password.style.borderColor = "#eb1010"
                validationsErrors = true
                break;    
            default:
                $password.style.borderColor = "var(--green)"
                $passwordErrors.innerHTML = ""
                validationsErrors = false
                break;
        }
    })


    // repeat password
    $rePassword.addEventListener("blur", function () {
        switch (true) {
            case !$rePassword.value.trim():
                $rePasswordErrors.innerHTML = `${warning} Reingresa tu contraseña`
                $rePassword.style.borderColor = "#eb1010"
                validationsErrors = true
                break;
            case $rePassword.value.length < 8 || $rePassword.value.length > 20:
                $rePasswordErrors.innerHTML = `${warning} La contraseña debe tener entre 8 y 20 caracteres`
                $rePassword.style.borderColor = "#eb1010"
                validationsErrors = true
                break;
            case $rePassword.value !== $password.value:
                $rePasswordErrors.innerHTML = `${warning} Las contraseñas no coinciden`
                $rePassword.style.borderColor = "#eb1010"
                validationsErrors = true
                break;
            default:
                $rePassword.style.borderColor = "var(--green)"
                $rePasswordErrors.innerHTML = ''
                validationsErrors = false
                break;
        }
    })



    $check.addEventListener('click', function (){
        $check.value = "on"
        $checkErrors.innerHTML = ""
    })


    //form
    $registerForm.addEventListener('submit', (event) => {
        let error = false;
        event.preventDefault()
        console.log($registerForm.elements)
        let elementosForm = $registerForm.elements

        for (let index = 0; index < elementosForm.length - 1; index++) {
            if (elementosForm[index].value == "" || elementosForm[index].value == 0) {
                elementosForm[index].style.borderColor = "#eb1010"
                submitErrors.innerHTML = `${warning} Todos los campos son obligatorios`;
                error = true;
            }
        }

        if(!$check.checked){
            $checkErrors.innerHTML = `${warning} Debes aceptar las bases y condiciones`
            error = true
        }

        if (!error && !validationsErrors) {
            alert('Se a registrado correctamente. ¡Bienvenido!');
            console.log('Formulario cargado con exito!');
            $registerForm.submit()
        }
    })

})
