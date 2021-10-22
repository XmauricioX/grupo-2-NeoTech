window.addEventListener('load', function(){
    
    let $number = document.querySelector("#number");
    let $numberErr = document.querySelector("#numberErr");

    let $code = document.querySelector('#code');
    let $codeErr = document.querySelector('#codeErr');

    let $vencimientoMes = document.querySelector('#vencimientoMes');
    let $vencimientoMesErr = document.querySelector('#vencimientoMesErr');

    let $vencimientoAño = document.querySelector("#vencimientoAño");
    let $venvimientoAñoErr = document.querySelector("#vencimientoAñoErr");

    let $titular = document.querySelector('#titular');
    let $titularErr = document.querySelector('#titularErr');

    let $buy = document.querySelector("#buy");

    $number.addEventListener("blur", function() {
        switch (true) {
            case !$number.value.trim():
                $numberErr.innerHTML = 'este campo es OBLIGATORIO'
                break;
            case $number.value.length != 16: 
                $numberErr.innerHTML = 'deben ser 16 numeros'
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
            case $code.value.length != 3:
                $codeErr.innerHTML = 'deben ser 3 numeros'
                break;
            default:
                $codeErr.innerHTML = ''
                break;
        }
    })
    $vencimientoAño.addEventListener("blur", function(){
        switch (true) {
            case !$vencimientoAño.value.trim():
                $venvimientoAñoErr.innerHTML = 'este campo es OBLIGATORIO'
                break;
            case $vencimientoAño.value.length != 4:
                $venvimientoAñoErr.innerHTML = 'deben ser 4 numeros'
                break;
            case $vencimientoAño.value < 2021:
                $venvimientoAñoErr.innerHTML = 'esta tarjeta ya vencio'
                break;
            default:
                $venvimientoAñoErr.innerHTML = ''
                break;
        }
    })
    $vencimientoMes.addEventListener("blur", function() {
        switch (true) {
            case !$vencimientoMes.value.trim():
                $vencimientoMesErr.innerHTML = 'este campo es OBLIGATORIO'
                break;
            case $vencimientoMes.value.length != 2:
                $vencimientoMesErr.innerHTML = 'deben ser 2 numeros'
                break;
            case $vencimientoMes.value > 12:
                $vencimientoMesErr.innerHTML = 'no hay mas de 12 meses :p'
                break;
            default:
                $vencimientoMesErr.innerHTML = ''
                break;
        }
    })
    $titular.addEventListener("blur", function() {
        switch (true) {
            case !$titular.value.trim():
                $titularErr.innerHTML = 'este campo es OBLIGATORIO'
                break;
            case $titular.value.length < 2:
                $titularErr.innerHTML = 'debe tener minimo 2 caracteres'
                break;
            default:
                $titularErr.innerHTML = ''
                break;
        }
    })
    $buy.addEventListener("click", function(){
        alert("Gracias por su compra")
    })
})
