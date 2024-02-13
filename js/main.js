// Simulation du premier clic
document.addEventListener("DOMContentLoaded", function() {
    var presentationLink = document.querySelector('.sommaire a:nth-of-type(1)');
    var presentationIcon = presentationLink.querySelector('i');
    presentationIcon.style.display = 'inline';
    presentationLink.click();
});

// Affichage du contenu et de l'icone
function togglePage(clickedLink, section) {
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

// Affichage du menu
let isToggleMenu = false;
function toggleMenu() {
    isToggleMenu = !isToggleMenu;

    var sommaire = document.querySelector('h3 > span');
    var ancres = document.querySelectorAll('div.sommaire > a');
    var menu = document.querySelector('div.sommaire');
    var main = document.querySelector('div.main');
    
    if (!isToggleMenu) {
        sommaire.style.display = 'block';

        ancres.forEach(ancre => {
            ancre.style.display = 'flex';
        });

        menu.style.width = '15%';
        main.style.width = '85%';
    } else {
        sommaire.style.display = 'none';

        ancres.forEach(ancre => {
            ancre.style.display = 'none';
        });

        menu.style.width = '63px';
        main.style.width = 'calc(100% - 63px)';
    }
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
