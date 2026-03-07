// Initialize AOS (Animate on Scroll)
AOS.init({
    duration: 800,
    once: true,
    offset: 100
});

// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Simple form handling (contact form)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Here you would normally send data to a server
        // For demo, show a success message
        const formMessage = document.getElementById('form-message');
        formMessage.innerHTML = '<p style="color: #F26419; font-weight: 600;">Thank you! We’ll get back to you within 24 hours.</p>';
        contactForm.reset();
    });
}