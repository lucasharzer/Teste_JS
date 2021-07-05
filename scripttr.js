var
  canvas = document.getElementById('gradient'),
  context = canvas.getContext('2d'),
  gradient = context.createLinearGradient(0, 0, 0, canvas.height);

gradient.addColorStop(0, 'yellow');
gradient.addColorStop(1, 'red');

context.fillStyle = gradient;
context.fillRect(0, 0, canvas.width, canvas.height);

function mostrarH() {
    setInterval (function() {
        var hora = new Date().toLocaleTimeString()
        document.getElementById('rel').innerHTML = hora;
    }, 1000);
}