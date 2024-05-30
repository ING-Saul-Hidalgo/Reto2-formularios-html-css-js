document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Obtén los valores de los campos
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Valida los campos
    if (name === '' || email === '' || message === '') {
        alert('Por favor, completa todos los campos.');
        return;
    }

    // Aquí puedes añadir el código para enviar el formulario, por ejemplo, usando fetch o XMLHttpRequest
    console.log('Nombre:', name);
    console.log('Correo Electrónico:', email);
    console.log('Mensaje:', message);

    // Muestra un mensaje de éxito
    alert('Formulario enviado con éxito!');
    
    // Opcional: Limpiar el formulario
    document.getElementById('contactForm').reset();
});
