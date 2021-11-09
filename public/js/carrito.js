let openCart = document.getElementById('open-cart'),
closeCart = document.getElementById('close-cart'),
cartContainer = document.getElementById('cart-container');

function open() {
    cartContainer.classList.add('open-cart');   
}

function close() {
    cartContainer.classList.remove('open-cart')
}

openCart.addEventListener("click",open)
closeCart.addEventListener("click",close)
