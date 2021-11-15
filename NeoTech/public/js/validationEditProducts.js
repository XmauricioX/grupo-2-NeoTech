function qs(element) {
    return document.querySelector(element)
}

window.addEventListener("load", () => {
    let
    $productName = qs('#product_name'),
    $productNameErrors = qs('#productNameErrors'),
    $price = qs('#price'),
    $priceErrors = qs('#priceErrors'),
    $color = qs('#color'),
    $colorErrors = qs('#colorErrors'),
    $description = qs(".description"),
    $descriptionErrors = qs('#descriptionErrors'),
    $selectBrand = qs("#selectBrand"),
    $selectBrandErrors = qs("#selectBrandErrors"),
    $selectCategory = qs("#selectCategory"),
    $selectCategoryErrors = qs("#selectCategoryErrors"),
    $inputFile = qs(".inputFile"),
    $inputFileErrors = qs(".inputFileErrors"),
    $imgPreview = qs('#img-preview'),
    $lastImg = qs('#last-img'),
    $borderImg = qs('.btn__update__image'),
    $form = qs(".productsForm"),
    regExNumber = /^[0-9]\d*(\.\d+)?$/,
    warning = `<i class="fas fa-exclamation-circle"></i>`;


    let validationsErrors = false



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

    //brand
    $selectBrand.addEventListener('blur', () => {
        console.log($selectBrand.value)
        switch (true) {
            case $selectBrand.value == 0 || $selectBrand.value == "" :
                $selectBrandErrors.innerHTML = `${warning} Debes seccionar una marca para continuar.`
                $selectBrand.style.borderColor = "#eb1010"
                validationsErrors = true
                break;   
            default:
                $selectBrandErrors.innerHTML = ""
                $selectBrand.style.borderColor = "var(--green)"
                validationsErrors = false
                break;
        }
    })

    //category
    $selectCategory.addEventListener('blur', () => {
        console.log($selectCategory.value)
        switch (true) {
            // case !$selectBrand.value == 0 || !$selectBrand.value == "" :
            case $selectCategory.value == 0 || $selectCategory.value == "" :
                $selectCategoryErrors.innerHTML = `${warning} Debes seccionar una categoría para continuar.`
                $selectCategory.style.borderColor = "#eb1010"
                validationsErrors = true
                break;   
            default:
                $selectCategoryErrors.innerHTML = ""
                $selectCategory.style.borderColor = "var(--green)"
                validationsErrors = false
                break;
        }
    })
    // product name
    $productName.addEventListener('blur', () => {
        console.log($productName.value.trim())
        switch (true) {
            case !$productName.value.trim():
                $productNameErrors.innerHTML = `${warning} El campo es obligatorio.`
                $productName.style.borderColor = "#eb1010"
                validationsErrors = true
                break;
            case $productName.value.length < 3:
                $productNameErrors.innerHTML = `${warning} El nombre del producto debe tener al menos 3 caracteres.`
                $productName.style.borderColor = "#eb1010"
                validationsErrors = true
                break;   
            default:
                $productNameErrors.innerHTML = ""
                $productName.style.borderColor = "var(--green)"
                validationsErrors = false
                break;
        }
    })

    // price
    $price.addEventListener('blur', () => {
        console.log($price.value.trim())
        switch (true) {
            case !$price.value.trim():
                $priceErrors.innerHTML = `${warning} El campo es obligatorio.`
                $price.style.borderColor = "#eb1010"
                validationsErrors = true
                break;
            case !regExNumber.test($price.value):
                $priceErrors.innerHTML = `${warning} Este campo solo acepta números`
                $price.style.borderColor = "#eb1010"
                validationsErrors = true
                break;   
            case $price.value.length < 3:
                $priceErrors.innerHTML = `El precio del producto debe tener mas de 3 cifras.`
                $price.style.borderColor = "#eb1010"
                validationsErrors = true
                break; 
            default:
                $priceErrors.innerHTML = ""
                $price.style.borderColor = "var(--green)"
                validationsErrors = false
                break;
        }
    })

    //color
    $color.addEventListener('blur', () => {
        console.log($color.value.trim())
        switch (true) {
            case !$color.value.trim():
                $colorErrors.innerHTML = `${warning} El campo es obligatorio.`
                $color.style.borderColor = "#eb1010"
                validationsErrors = true
                break;
            case $color.value.length < 3:
                $colorErrors.innerHTML = `${warning} El nombre del color debe tener al menos 3 caracteres.`
                $color.style.borderColor = "#eb1010"
                validationsErrors = true
                break;   
            default:
                $colorErrors.innerHTML = ""
                $color.style.borderColor = "var(--green)"
                validationsErrors = false
                break;
        }
    })

    //description
    $description.addEventListener('blur', () => {
        console.log($description.value.trim())
        switch (true) {
            case !$description.value.trim():
                $descriptionErrors.innerHTML = `${warning} El campo es obligatorio.`
                $description.style.borderColor = "#eb1010"
                validationsErrors = true
                break;
            case $description.value.length < 20:
                $descriptionErrors.innerHTML = `${warning} La descripción debe tener al menos 20 caracteres.`
                $description.style.borderColor = "#eb1010"
                validationsErrors = true
                break;   
            default:
                $descriptionErrors.innerHTML = ""
                $description.style.borderColor = "var(--green)"
                validationsErrors = false
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

        if(!error && !validationsErrors){
            alert('Formulario cargado con exito!');
            console.log('Formulario cargado con exito!');
            $form.submit()
        }

    })
    
})
