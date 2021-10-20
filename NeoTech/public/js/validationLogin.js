window.addEventListener('load', function(){

    let $email = document.querySelector("#email")
    let $emailErr = document.querySelector("#emailErr")

    let $password = document.querySelector("#password")
    let $passwordErr = document.querySelector("#passwordErr")

    $email.addEventListener("blur", function() {
        switch (true) {
            case !$email.value.trim():
                $emailErr.innerHTML = 'El campo email es OBLIGATORIO'
                break;
            default:
                $emailErr.innerHTML = ''
                break;
        }
    })
    $password.addEventListener("blur", function () {
        switch (true) {
            case !$password.value.trim():
                $passwordErr.innerHTML = 'La contraseña es OBLIGATORIA'
                break;
            default:
                $passwordErr.innerHTML = ''
                break;
        }
    })

})