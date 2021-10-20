function qs(element) {
    return document.querySelector(element)
}

window.addEventListener("load", () => {
    let
    $productName = qs('.product_name'),
    $productNameErrors = qs('.productNameErrors'),
    $price = qs('.price'),
    $priceErrors = qs('.priceErrors'),
    $color = qs('.color'),
    $colorErrors = qs('.colorErrors'),
    $description = qs('.description'),
    $descriptionErrors = qs('.descriptionErrors'),
    $selectBrand = qs(".selectBrand"),
    $selectBrandErrors = qs(".selectBrandErrors"),
    $selectCategory = qs(".selectCategory"),
    $selectCategoryErrors = qs(".selectCategoryErrors"),
    $inputFile = qs(".inputFile"),
    $inputFileErrors = qs(".inputFileErrors"),
    $imgPreview = qs('#img-preview'),
    $form = qs(".productsForm"),
    regExNumber = /^[0-9]\d*(\.\d+)?$/;



    
    $inputFile.addEventListener('change', 
    function fileValidation(){
        let filePath = $inputFile.value, //Capturo el valor del input
            allowefExtensions = /(.jpg|.jpeg|.png|.gif|.web)$/i //Extensiones permitidas
        if(!allowefExtensions.exec(filePath)){ //El método exec() ejecuta una busqueda sobre las coincidencias de una expresión regular en una cadena especifica. Devuelve el resultado como array, o null.
            $inputFileErrors.innerHTML = 'Carga un archivo de imagen válido, con las extensiones (.jpg - .jpeg - .png - .gif)';
            $inputFile.value = '';
            $imgPreview.innerHTML = '';
            return false;
        }else{
            // Image preview
            console.log($inputFile.files);
            if($inputFile.files && $inputFile.files[0]){
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



    $productName.addEventListener('blur', () => {
        console.log($productName.value.trim())
        switch (true) {
            case !$productName.value.trim():
                $productNameErrors.innerHTML = 'El campo es obligatorio.'
                $productName.classList.add('is-invalid')
                break;
            case $productName.value.length < 3:
                $productNameErrors.innerHTML = 'El nombre del producto debe tener al menos 3 caracteres.'
                $productName.classList.add('is-invalid')
                break;   
            default:
                $productName.classList.remove("is-invalid");
                $productName.classList.add('is-valid')
                $productNameErrors.innerHTML = ""
                break;
        }
    })

    $price.addEventListener('blur', () => {
        console.log($price.value.trim())
        switch (true) {
            case !$price.value.trim():
                $priceErrors.innerHTML = 'El campo es obligatorio.'
                $productName.classList.add('is-invalid')
                break;
            case !regExNumber.test($price.value):
                $priceErrors.innerHTML = 'Este campo solo acepta números'
                $price.classList.add('is-invalid')
                break;   
            case $price.value.length < 2:
                $priceErrors.innerHTML = 'El precio del producto debe tener mas de 2 cifras.'
                $price.classList.add('is-invalid')
                break; 
            default:
                $price.classList.remove("is-invalid");
                $price.classList.add('is-valid')
                $priceErrors.innerHTML = ""
                break;
        }
    })

    $color.addEventListener('blur', () => {
        console.log($color.value.trim())
        switch (true) {
            case !$color.value.trim():
                $colorErrors.innerHTML = 'El campo es obligatorio.'
                $color.classList.add('is-invalid')
                break;
            case $color.value.length < 3:
                $colorErrors.innerHTML = 'El nombre del color debe tener al menos 3 caracteres.'
                $color.classList.add('is-invalid')
                break;   
            default:
                $color.classList.remove("is-invalid");
                $color.classList.add('is-valid')
                $colorErrors.innerHTML = ""
                break;
        }
    })

    $description.addEventListener('blur', () => {
        console.log($description.value.trim())
        switch (true) {
            case !$description.value.trim():
                $descriptionErrors.innerHTML = 'El campo es obligatorio.'
                $description.classList.add('is-invalid')
                break;
            case $description.value.length < 20:
                $descriptionErrors.innerHTML = 'La descripción debe tener al menos 20 caracteres.'
                $description.classList.add('is-invalid')
                break;   
            default:
                $description.classList.remove("is-invalid");
                $description.classList.add('is-valid')
                $descriptionErrors.innerHTML = ""
                break;
        }
    })

    $selectBrand.addEventListener('blur', () => {
        console.log($selectBrand.value)
        switch (true) {
            // case !$selectBrand.value == 0 || !$selectBrand.value == "" :
            case $selectBrand.value == 0 || $selectBrand.value == "" :
                $selectBrandErrors.innerHTML = 'Debes seccionar una marca para continuar.'
                $selectBrand.classList.add('is-invalid')
                break;   
            default:
                $selectBrand.classList.remove("is-invalid");
                $selectBrand.classList.add('is-valid')
                $selectBrandErrors.innerHTML = ""
                break;
        }
    })
    
    $selectCategory.addEventListener('blur', () => {
        console.log($selectCategory.value)
        switch (true) {
            // case !$selectBrand.value == 0 || !$selectBrand.value == "" :
            case $selectCategory.value == 0 || $selectCategory.value == "" :
                $selectCategoryErrors.innerHTML = 'Debes seccionar una categoría para continuar.'
                $selectCategory.classList.add('is-invalid')
                break;   
            default:
                $selectCategory.classList.remove("is-invalid");
                $selectCategory.classList.add('is-valid')
                $selectCategoryErrors.innerHTML = ""
                break;
        }
    })

    $form.addEventListener('submit', (event) => {
        let error = false;
        event.preventDefault()
        console.log($form.elements)
        let elementosForm = $form.elements
        
        for (let index = 0; index < elementosForm.length-1; index++) {
            if(elementosForm[index].value == "" || elementosForm[index].value == 0){
                submitErrors.innerHTML = "Todos los campos son obligatorios";
                error = true;
            }
        }

        if(!error){
            console.log('Formulario cargado con exito!');
            $form.submit()
        }

    })
    


})
