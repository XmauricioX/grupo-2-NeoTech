function qs(element) {
    return document.querySelector(element)
}

let totalProducts = () => {
    fetch("http://localhost:3000/api/products")
    .then(response => response.json())
}