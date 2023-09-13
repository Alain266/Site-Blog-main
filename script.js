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

//Fermer le menu hamburger quand on clique autre part que sur le bouton
document.addEventListener("click", function(event) {
    if (!menu1.contains(event.target)) {// Le clic a été effectué en dehors de l'élément menu1
        document.getElementById("pagehamburger").style.left = "-100%";
    }
});


//Slideshow
let slideIndex = 0;
showSlides();
function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
} 
