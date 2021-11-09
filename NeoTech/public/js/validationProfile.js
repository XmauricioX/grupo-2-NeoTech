function qs(element) {
    return document.querySelector(element)
}

window.addEventListener("load", () => {
    let
    $firstName = qs('#first_name'),
    $firstNameErrors = qs('#firstNameErrors'),
    $lastName = qs('#last_name'),
    $lastNameErrors = qs('#lastNameErrors'),
    $phone = qs("#phone"),
    $phoneErrors = qs('#phoneErrors'),
    $address = qs("#address"),
    $addressErrors = qs("#addressErrors"),
    // $pc = qs("#pc"),
    // $pcErrors = qs("#pcErrors"),
    // $provinceslist = qs('#provinceslist'),
    // $provinceslistErrors = qs('#provinceslistErrors'),
    // $citieslist = qs('#citieslist'),
    // $citieslistErrors = qs("citieslistErrors"),
    $inputFile = qs(".inputFile"),
    $inputFileErrors = qs(".inputFileErrors"),
    $imgPreview = qs('#img-preview'),
    $lastImg = qs('#last-img'),
    $borderImg = qs('.btn__update__image'),
    $formProfile = qs('formProfile'),
    regExNumber = /^[0-9]\d*(\.\d+)?$/,
    regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/,
    regExAddress = /^[a-zA-Z0-9_ ]*$/,
    regExPhone = /^[+]?[\s./0-9]*[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/g,
    warning = `<i class="fas fa-exclamation-circle"></i>`;


    // Image
    $inputFile.addEventListener('change', 
    function fileValidation(){        
        let filePath = $inputFile.value, //Capturo el valor del input
            allowefExtensions = /(.jpg|.jpeg|.png|.gif|.web)$/i //Extensiones permitidas
        if(!allowefExtensions.exec(filePath)){ //El método exec() ejecuta una busqueda sobre las coincidencias de una expresión regular en una cadena especifica. Devuelve el resultado como array, o null.
            $inputFileErrors.innerHTML = `${warning} Carga un archivo de imagen válido, con las extensiones (.jpg - .jpeg - .png - .gif)`;
            $borderImg.style.borderColor = "#eb1010"
            $inputFile.value = '';
            $imgPreview.innerHTML = '';
            return false;
        }else{
            // Image preview
            console.log($inputFile.files);
            if($inputFile.files && $inputFile.files[0]){
                $lastImg.style.display = "none"
                let reader = new FileReader();
                reader.onload = function(e){
                    $imgPreview.innerHTML = '<img src="' + e.target.result +'"/>';
                };
                reader.readAsDataURL($inputFile.files[0]);
                $inputFileErrors.innerHTML = '';
                $inputFile.classList.remove('is-invalid')
            }
        }
    })


   
    //name
    $firstName.addEventListener("blur", function () {
        switch (true) {
            case !$firstName.value.trim():
                $firstNameErrors.innerHTML = `${warning} El campo nombre es obligatorio`
                $firstName.style.borderColor = "#eb1010"
                break;
            case $firstName.value.length < 2:
                $firstNameErrors.innerHTML = `${warning} El nombre debe tener al menos 2 caracteres`
                $firstName.style.borderColor = "#eb1010"
                break;
            case !regExAlpha.test($firstName.value):
                $firstNameErrors.innerHTML = `${warning} Ingrese un nombre válido`
                $firstName.style.borderColor = "#eb1010"
                break;  
            default:
                $firstNameErrors.innerHTML = ''
                $firstName.style.borderColor = "var(--green)"
                break;
        }
    })


    //lastname
    $lastName.addEventListener("blur", function () {
        switch (true) {
            case !$lastName.value.trim():
                $lastNameErrors.innerHTML = `${warning} El campo apellido es obligatorio`
                $lastName.style.borderColor = "#eb1010"
                break;
            case $lastName.value.length < 2:
                $lastNameErrors.innerHTML = `${warning} El apellido debe tener al menos 2 caracteres`
                $lastName.style.borderColor = "#eb1010"
                break;
            case !regExAlpha.test($lastName.value):
                $nameErrors.innerHTML = `${warning} Ingresa un apellido válido`
                $lastName.style.borderColor = "#eb1010"
                break;      
            default:
                $lastNameErrors.innerHTML = ""
                $lastName.style.borderColor = "var(--green)"
                break;
        }
    })


    //phone
    // $phone.addEventListener('blur', () => {
    //     console.log($phone.value.trim())
    //     switch (true) {
    //         case regExPhone.test($phone.value):
    //             $phoneErrors.innerHTML = `${warning} Debes ingresar un número de teléfono válido`
    //             $phone.style.borderColor = "#eb1010"
    //             break;   
    //         default:
    //             $phoneErrors.innerHTML = ""
    //             $phone.style.borderColor = "var(--green)"
    //             break;
    //     }
    // })


    //address
    $address.addEventListener('blur', () => {
        console.log($address.value.trim())
        switch (true) {
            case $address.value.length < 4:
                $addressErrors.innerHTML = `${warning} La dirección debe tener mas de 4 caracteres.`
                $address.style.borderColor = "#eb1010"
                break;   
            case !regExAddress.test($address.value):
                $addressErrors.innerHTML = `${warning} Debes ingresar una dirección válida`
                $address.style.borderColor = "#eb1010"
                break; 
            default:
                $addressErrors.innerHTML = ""
                $address.style.borderColor = "var(--green)"
                break;
        }
    })


    //form
    $form.addEventListener('submit', (event) => {
        let error = false;
        event.preventDefault()
        console.log($form.elements)
        let elementosForm = $form.elements
        
        for (let index = 1; index < elementosForm.length-1; index++) {
            if(elementosForm[index].value == "" || elementosForm[index].value == 0){
                elementosForm[index].style.borderColor = "#eb1010"
                submitErrors.innerHTML = `${warning} Todos los campos son obligatorios`;
                error = true;
            }
        }

        if(!error){
            console.log('Formulario cargado con exito!');
            $form.submit()
        }
    })

})
