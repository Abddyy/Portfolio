// scripts/navbar.js
document.addEventListener("DOMContentLoaded", function() {
    window.onscroll = function() {
        var navbar = document.querySelector('.navbar');
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    };
});
