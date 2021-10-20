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
                break;
        }
    })

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
                break;
        }
    })

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