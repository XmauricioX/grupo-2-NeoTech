window.onload = function(){
    
    let item1 = document.querySelector("#item1")
    let item2 = document.querySelector("#item2")
    let item3 = document.querySelector("#item3")
    let item4 = document.querySelector("#item4")
    let item5 = document.querySelector("#item5")
    let item6 = document.querySelector("#item6")
    let item7 = document.querySelector("#item7")

    item1.addEventListener('click',()=>{
        window.location.href="http://localhost:3000/producto/categoria/Gaming"
    })
    item2.addEventListener('click',()=>{
        window.location.href="http://localhost:3000/producto/categoria/Gaming"
    })
    item3.addEventListener('click',()=>{
        window.location.href="http://localhost:3000/producto/categoria/Monitores"
    })
    item4.addEventListener('click',()=>{
        window.location.href="http://localhost:3000/producto/categoria/Audio"
    })
    item5.addEventListener('click',()=>{
        window.location.href="http://localhost:3000/producto/categoria/Teclados"
    })
    item6.addEventListener('click',()=>{
        window.location.href="http://localhost:3000/producto/categoria/Gaming"
    })
    item7.addEventListener('click',()=>{
        window.location.href="http://localhost:3000/producto/categoria/Teclados"
    })
    
}