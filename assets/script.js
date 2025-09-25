

// Mobile Menu Toggle Functionality
const hamburgerMenu = document.getElementById('hamburgerMenu');
const navMenu = document.getElementById('navMenu');

hamburgerMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburgerMenu.classList.toggle('active');
});

// Close menu when clicking on nav links
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburgerMenu.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburgerMenu.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
        hamburgerMenu.classList.remove('active');
    }
});
