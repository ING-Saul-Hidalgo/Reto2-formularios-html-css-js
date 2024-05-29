// Menú de navegación móvil
const menuToggle = document.querySelector('.menu-toggle');
const menuNav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
    menuNav.classList.toggle('active');
});

// Validación de formulario
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const countrySelect = document.getElementById('country');
    const messageTextarea = document.getElementById('message');

    if (nameInput.value === '' || emailInput.value === '' || passwordInput.value === '' || countrySelect.value === '' || messageTextarea.value === '') {
        alert('Por favor completa todos los campos.');
        event.preventDefault();
    }
});

// Desplazamiento suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Funcionalidad de carrusel
let slideIndex = 0;
carousel();

function carousel() {
    const slides = document.querySelectorAll('.slide');
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(carousel, 2000); // Cambia cada 2 segundos
}

// Agregar eventos de interacción
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.backgroundColor = 'lightgray';
    });

    link.addEventListener('mouseout', () => {
        link.style.backgroundColor = 'initial';
    });
});
