// scripts/navbar.js
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const scrollPosition = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const alpha = Math.min(1, (scrollPosition / (maxScroll / 2))); // Adjust the divisor to make it faster

    navbar.style.backgroundColor = `rgba(34, 40, 49, ${alpha})`;
});
