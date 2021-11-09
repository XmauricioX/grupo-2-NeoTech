window.addEventListener('load',function () {
    let $provincesList = document.querySelector('#provinceslist')
    let $citiesList = document.querySelector('#citieslist')
  
    async function fetchProvinces (){
        const response = await fetch('https://apis.datos.gob.ar/georef/api/provincias')
        const provinces = response.json()
        return provinces
    }
    fetchProvinces().then(provincias => {
            provincias.provincias.sort((prev, next) =>
            prev.nombre > next.nombre
                ? 1
                : prev.nombre < next.nombre
                ? -1
                : 0
            );
            provincias.provincias.forEach(province => {
                $provincesList.innerHTML += `<option value="${province.nombre}">${province.nombre}</option>`
            })
        })
    
    
    let arrayProvincias = []
    

    $provincesList.addEventListener('change', function (e) {
        $citiesList.innerHTML = ""
        let idProvince = e.target.value
        
        let selectedProvince = $provincesList.options[$provincesList.selectedIndex].text;
        arrayProvincias.push(selectedProvince)

        function fetchCities (id){
            fetch(`https://apis.datos.gob.ar/georef/api/localidades?provincia=${id}&campos=id,nombre&max=5000`)
            .then(response => response.json())
            .then(result => {
                let cities = result.localidades.sort((prev, next) =>
                prev.nombre > next.nombre
                    ? 1
                    : prev.nombre < next.nombre
                    ? -1
                    : 0
                );
                cities.forEach(city => {
                    $citiesList.innerHTML += `<option value="${city.nombre}">${city.nombre}</option>`
                })
            })
        }
        fetchCities(idProvince)
    })
})