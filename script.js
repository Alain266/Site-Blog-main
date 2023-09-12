// Overlay de chargement
window.addEventListener("load", function() {
    // Lorsque la page et les ressources sont totalement chargées
    var loadingOverlay = document.querySelector(".loading-overlay");// Récupérer l'overlay de chargement
    loadingOverlay.style.display = "none"; // Cacher l'overlay de chargement
});

//Afficher le menu hamburger quand on clique sur le bouton
document.getElementById("menu1").addEventListener("click", function() { 
    document.getElementById("pagehamburger").style.left = "0";
});