<<<<<<< HEAD

window.addEventListener("load", function () {

    let $inputName = document.querySelector("#firstName");
    let $small1 = document.querySelector("#small-first-name")

    let $inputLastName = document.querySelector("#lastName")
    let $small2 = document.querySelector("#small-last-name")

    let $inputEmail = document.querySelector("#email")
    let $small3 = document.querySelector("#small-email")

    let $pass1 = document.querySelector("#password")
    let $errPass1 = document.querySelector("#small-password")

    let $pass2 = document.querySelector("#password2")
    let $errPass2 = document.querySelector("#small-password-2")

    let $check = document.querySelector("#check")
    let $checkErr = document.querySelector("#small-check");

    let regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/,
     regExDNI = /^[0-9]{7,8}$/,
     regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
     regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;


    $inputName.addEventListener("blur", function () {
        switch (true) {
            case !$inputName.value.trim():
                $small1.innerHTML = 'El campo nombre es OBLIGATORIO'
                break;
            case $inputName.value.length < 2:
                $small1.innerHTML = 'debe tener almenos 2 caracteres'
                break;
            default:
                $small1.innerHTML = ''
=======
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
    regExSpCharacter = /(?=.*?[#?!@$%^&*-])/,
    regExSpace = /^$|\s+/,
    regExNumber = /(?=.*?[0-9])/,
    regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;



    //name
    $inputName.addEventListener("blur", function () {
        switch (true) {
            case !$inputName.value.trim():
                $inputNameErrors.innerHTML = '*El campo nombre es obligatorio'
                break;
            case $inputName.value.length < 2:
                $inputNameErrors.innerHTML = '*El nombre debe tener al menos 2 caracteres'
                break;
            case !regExAlpha.test($inputName.value):
                $inputNameErrors.innerHTML = '*Ingrese un nombre válido'
                break;  
            default:
                $inputNameErrors.innerHTML = ''
>>>>>>> 963263a666874aa8ba877983f886cee899371201
                break;
        }
    })

<<<<<<< HEAD
    $inputLastName.addEventListener("blur", function () {
        switch (true) {
            case !$inputLastName.value.trim():
                $small2.innerHTML = "El campo apellido es OBLIGATORIO"
                break;
            case $inputLastName.value.length < 2:
                $small2.innerHTML = "debe tener almenos 2 caracteres"
                break;
            default:
                $small2.innerHTML = ""
=======

    //lastname
    $inputLastName.addEventListener("blur", function () {
        switch (true) {
            case !$inputLastName.value.trim():
                $inputLastNameErrors.innerHTML = "*El campo apellido es obligatorio"
                break;
            case $inputLastName.value.length < 2:
                $inputLastNameErrors.innerHTML = "*El apellido debe tener al menos 2 caracteres"
                break;
            case !regExAlpha.test($inputName.value):
                $nameErrors.innerHTML = '*Ingresa un apellido válido'
                break;      
            default:
                $inputLastNameErrors.innerHTML = ""
>>>>>>> 963263a666874aa8ba877983f886cee899371201
                break;
        }
    })

<<<<<<< HEAD
    $inputEmail.addEventListener('blur', function() {
        switch (true) {
            case !$inputEmail.value.trim():
                $small3.innerHTML = 'El campo email es OBLIGATORIO'
                break;
            case !regExEmail.test($inputEmail.value):
                $small3.innerHTML = 'Debe ingresar un email válido'
                break;    
            default:
                $small3.innerHTML = ''
                break;
        }
    })
    $pass1.addEventListener("blur", function () {
        switch (true) {
            case !$pass1.value.trim():
                $errPass1.innerHTML = "El campo contraseña es obligatorio"
                break;
                case $pass1.value.length < 8:
                    $errPass1.innerHTML = 'debe tener almenos 8 caracteres'
                    break;
            default:
                $errPass1.innerHTML = ''
                break;
        }
    })
    $pass2.addEventListener("blur", function () {
        switch (true) {
            case !$pass2.value.trim():
                $errPass2.innerHTML = 'Confirmar la contraseña es obligatorio'
                break;
            case $pass2.value.length < 8:
                $errPass2.innerHTML = 'debe tener almenos 8 caracteres'
                break;
            default:
                $errPass2.innerHTML = ''
                break;
        }
    })
    $check.addEventListener('change', function () {
        this.checked ? $checkErr.innerHTML = "" : $checkErr.innerHTML = 'Aceptar los terminos es OBLIGATORIO';
    });

})
=======

    //email
    $email.addEventListener('blur', function() {
        switch (true) {
            case !$email.value.trim():
                $emailErrors.innerHTML = '*El campo email es obligatorio'
                break;
            case !regExEmail.test($email.value):
                $emailErrors.innerHTML = '*Debes ingresar un email válido'
                break;    
            default:
                $emailErrors.innerHTML = ''
                break;
        }
    })


    //password
    $password.addEventListener("blur", function () {
        switch (true) {
            case !$password.value.trim():
                $passwordErrors.innerHTML = '*La contraseña es obligatoria'
                break;
            case $password.value.length < 8 || $password.value.length > 20:
                $passwordErrors.innerHTML = '*La contraseña debe tener entre 8 y 20 caracteres'
                break;
            case !regExNumber.test($password.value):
                $passwordErrors.innerHTML = '*La contraseña debe tener al menos un número';
                break;    
            case !regExLowercase.test($password.value):
                $passwordErrors.innerHTML = '*La contraseña debe tener al menos una letra en minúscula';
                break;    
            case !regExUppercase.test($password.value):
                $passwordErrors.innerHTML = '*La contraseña debe tener al menos una letra en mayúscula';
                break;    
            case !regExSpCharacter.test($password.value):
                $passwordErrors.innerHTML = '*La contraseña debe tener al menos un caracter especial';
                break;    
            case regExSpace.test($password.value):
                $passwordErrors.innerHTML = '*La contraseña no puede contener espacios entre medio';
                break;    
            case !regExPass.test($password.value):
                $passwordErrors.innerHTML = '*La contraseña debe tener entre 8 y 20 caracteres, al menos una mayúscula, una minúscula, un número y un caracter especial';
                break;    
            default:
                $passwordErrors.innerHTML = ""
                break;
        }
    })


    // repeat password
    $rePassword.addEventListener("blur", function () {
        switch (true) {
            case !$rePassword.value.trim():
                $rePasswordErrors.innerHTML = '*Reingresa tu contraseña'
                break;
            case $rePassword.value.length < 8 || $rePassword.value.length > 20:
                $rePasswordErrors.innerHTML = '*La contraseña debe tener entre 8 y 20 caracteres'
                break;
            case $rePassword.value !== $password.value:
                $rePasswordErrors.innerHTML = '*Las contraseñas no coinciden'
                break;
            default:
                $rePasswordErrors.innerHTML = ''
                break;
        }
    })


    // check
    $check.addEventListener('change', function () {
        this.checked ? $checkErrors.innerHTML = "" : $checkErrors.innerHTML = '*Debes aceptar las bases y condiciones';
    });


    //form
    $registerForm.addEventListener('submit', (event) => {
        let error = false;
        event.preventDefault()
        console.log($registerForm.elements)
        let elementosForm = $registerForm.elements

        for (let index = 0; index < elementosForm.length - 1; index++) {
            if (elementosForm[index].value == "" || elementosForm[index].value == 0) {
                submitErrors.innerHTML = "Todos los campos son obligatorios";
                error = true;
            }
        }

        if (!error) {
            console.log('Formulario cargado con exito!');
            $registerForm.submit()
        }
    })

})
>>>>>>> 963263a666874aa8ba877983f886cee899371201
