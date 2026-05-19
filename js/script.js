const form = document.getElementById('feedbackForm');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        if (!form.checkValidity()) {
            e.stopPropagation();
            form.classList.add('was-validated');
        } else {
            form.style.display = 'none';
            document.getElementById('successMessage').style.display = 'block';
        }
    });
}

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#1a0f0a';
    } else {
        navbar.style.backgroundColor = '#2C1810';
    }
});

const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.letterSpacing = '2px';
        this.style.transition = 'all 0.3s';
    });
    link.addEventListener('mouseleave', function() {
        this.style.letterSpacing = '1px';
    });
});