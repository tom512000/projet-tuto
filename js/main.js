// Simulation du premier clic
document.addEventListener("DOMContentLoaded", function() {
    var presentationLink = document.querySelector('.sommaire a:nth-of-type(1)');
    presentationLink.click();

    var presentationIcon = presentationLink.querySelector('i');
    presentationIcon.style.display = 'inline';
});
localStorage.setItem('mainPage', 'presentation');

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

    localStorage.setItem('mainPage', selectedSection.className);
}

// Affichage du menu
let isToggleMenu = false;
function toggleMenu() {
    isToggleMenu = !isToggleMenu;

    /* Sommaire */
    var menu = document.querySelector('div.sommaire');
    var sommaire = document.querySelector('h3 > span');
    var ancres = document.querySelectorAll('div.sommaire > a');
    
    /* Contenu */
    var main = document.querySelector('div.main');
    var content = document.querySelectorAll('div.main > div');
    
    if (!isToggleMenu) {
        /* Sommaire */
        menu.style.width = '20%';
        sommaire.style.display = 'block';
        ancres.forEach(ancre => {
            ancre.style.display = 'flex';
        });

        /* Contenu */
        main.style.width = '80%';
    } else {
        /* Sommaire */
        menu.style.width = '63px';
        sommaire.style.display = 'none';
        ancres.forEach(ancre => {
            ancre.style.display = 'none';
        });

        /* Contenu */
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
