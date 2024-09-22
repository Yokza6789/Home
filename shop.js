document.getElementById('start-button').addEventListener('click', function() {
    document.getElementById('features-section').scrollIntoView({ behavior: 'smooth' });
});

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active'); 
});
