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
    setTimeout(showSlides, 5000); // Change image every 2 seconds
} 

// Définir la date de fin du compte a rebours
var countDownDate = new Date("Jan 6, 2024 15:37:25").getTime();

// Mise à jour toute les 1000 millisecondes
var x = setInterval(function() {

// Obtenir la date et l'heure d'aujourd'hui
var now = new Date().getTime();

// Trouvez la distance entre maintenant et la date de comptage
var distance = countDownDate - now;

// Calcul les secondes et minutes 
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

// Affichez le résultat dans l'élément avec id = "Demo"
document.getElementById("demo").innerHTML = days + "d " + hours + "h "
+ minutes + "m " + seconds + "s ";

// Si le décompte est terminé, écrivez du texte
if (distance < 0) {
clearInterval(x);
document.getElementById("demo").innerHTML = "EXPIRED";
}
}, 1000);