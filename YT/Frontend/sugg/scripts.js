// scripts.js

function toggleMenu() {
    const menu = document.getElementById('menu');
    const menuIcon = document.querySelector('.menu-icon');
    
    menu.classList.toggle('open');
    
    // Ensure menu icon visibility
    if (menu.classList.contains('open')) {
        menuIcon.classList.add('open');
    } else {
        menuIcon.classList.remove('open');
    }
}
