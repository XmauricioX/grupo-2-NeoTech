window.addEventListener('load', function(){

    let $number = document.querySelector("#number");
    let $numberErr = document.querySelector("#numberErr");

    let $code = document.querySelector('#code');
    let $codeErr = document.querySelector('#codeErr');

    let $vencimiento = document.querySelector('#vencimiento');
    let $vencimientoErr = document.querySelector('#vencimientoErr');

    let $titular = document.querySelector('#titular');
    let $titularErr = document.querySelector('#titularErr');

    $number.addEventListener("blur", function() {
        switch (true) {
            case !$number.value.trim():
                $numberErr.innerHTML = 'este campo es OBLIGATORIO'
                break;
            default:
                $numberErr.innerHTML = ''
                break;
        }
    })
    $code.addEventListener("blur", function() {
        switch (true) {
            case !$code.value.trim():
                $codeErr.innerHTML = 'este campo es OBLIGATORIO'
                break;
            default:
                $codeErr.innerHTML = ''
                break;
        }
    })
    $vencimiento.addEventListener("blur", function() {
        switch (true) {
            case !$vencimiento.value.trim():
                $vencimientoErr.innerHTML = 'este campo es OBLIGATORIO'
                break;
            default:
                $vencimientoErr.innerHTML = ''
                break;
        }
    })
    $titular.addEventListener("blur", function() {
        switch (true) {
            case !$titular.value.trim():
                $titularErr.innerHTML = 'este campo es OBLIGATORIO'
                break;
            default:
                $titularErr.innerHTML = ''
                break;
        }
    })
})