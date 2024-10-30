// JavaScript for menu functionality
function toggleMenu() {
    document.getElementById('navbar').classList.toggle('open');
}

// Close menu when clicking outside of it
document.addEventListener('click', function(event) {
    const navbar = document.getElementById('navbar');
    const menuIcon = document.querySelector('.menu-icon');
    if (!navbar.contains(event.target) && !menuIcon.contains(event.target)) {
        navbar.classList.remove('open');
    }
});
