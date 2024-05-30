// Manipulación del DOM
function manipularDOM() {
    const newElement = document.createElement('p');
    newElement.textContent = 'Hola, soy un nuevo elemento!';
    document.getElementById('content').appendChild(newElement);
    newElement.textContent = 'Texto modificado!';
    setTimeout(() => {
      document.getElementById('content').removeChild(newElement);
    }, 3000);
  }
  
  // Validación de formularios
  document.getElementById('myForm').addEventListener('submit', function(event) {
    const username = document.getElementById('username').value;
    if (username === '') {
      alert('El nombre de usuario es requerido!');
      event.preventDefault();
    }
  });
  
  // Animaciones CSS
  function toggleFade() {
    document.getElementById('box').classList.toggle('in');
  }
  
  // AJAX
  document.getElementById('loadData').addEventListener('click', function() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1', true);
    xhr.onload = function() {
      if (xhr.status === 200) {
        const post = JSON.parse(xhr.responseText);
        document.getElementById('data').textContent = post.title;
      }
    };
    xhr.send();
  });
  
  // Almacenamiento Local
  function storeData() {
    localStorage.setItem('key', 'valor almacenado');
  }
  function loadData() {
    alert(localStorage.getItem('key'));
  }
  
  // Reproducción de Multimedia
  function playVideo() {
    document.getElementById('video').play();
  }
  function pauseVideo() {
    document.getElementById('video').pause();
  }
  
  // Geolocalización
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        document.getElementById('location').textContent =
          'Latitud: ' + position.coords.latitude + ', Longitud: ' + position.coords.longitude;
      });
    } else {
      alert('La geolocalización no es soportada por este navegador.');
    }
  }
  
  // Manipulación de JSON
  function manipulateJSON() {
    const jsonString = '{"name":"John", "age":30, "city":"New York"}';
    const obj = JSON.parse(jsonString);
    console.log(obj.name);  // John
    const newJsonString = JSON.stringify(obj);
    console.log(newJsonString);  // {"name":"John","age":30,"city":"New York"}
  }
  
  // Debugging
  function debuggingExample() {
    const a = 5;
    const b = 10;
    console.log('El valor de a es:', a);
    console.log('El valor de b es:', b);
    console.log('La suma de a y b es:', a + b);
  }
  