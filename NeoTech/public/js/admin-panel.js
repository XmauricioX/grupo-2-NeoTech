let hamburguer = document.getElementById("hamburguer-admin");
let cross = document.getElementById("cross");

let sidebar = document.getElementById("sidebar");

hamburguer.onclick = function() {
    sidebar.style.display = "block";
};

cross.onclick = function() {
    sidebar.style.display = "none";
};