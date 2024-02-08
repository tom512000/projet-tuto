// Simulation du premier clic
document.addEventListener("DOMContentLoaded", function() {
    var presentationLink = document.querySelector('.sommaire a:nth-of-type(1)');
    var presentationIcon = presentationLink.querySelector('i');
    presentationIcon.style.display = 'inline';
    presentationLink.click();
});

// Affichage du contenu et de l'icone
function toggle(clickedLink, section) {
    var icons = document.querySelectorAll('.sommaire a i');
    icons.forEach(icon => {
        icon.style.display = 'none';
    });

    var icon = clickedLink.querySelector('i');
    icon.style.display = 'inline';

    var sections = document.querySelectorAll('.main > div');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    var selectedSection = document.querySelector('.' + section);
    selectedSection.style.display = 'block';
}

// Compteur de visiteurs
let visitors = localStorage.getItem('visitorsCount');

if (visitors === null) {
    visitors = 0;
}

visitors = parseInt(visitors);
visitors++;
localStorage.setItem('visitorsCount', visitors);
document.getElementById('visitorsCount').textContent = visitors;
