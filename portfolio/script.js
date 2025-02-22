// Smooth scrolling
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

// Typing animation
document.addEventListener('DOMContentLoaded', function() {
    new Typed('#typed-text', {
        strings: ["Front-End Developer", "Problem Solver"],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
        backDelay: 1500
    });
});