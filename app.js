function myFunction() {
    var x = document.getElementById("right-list");
    if (x.className === "right-list") {
      x.className += " responsive";
    } else {
      x.className = "right-list";
    }
  }
 // Seleccionar el botón
 const volverPrincipal = document.getElementById('volverPrincipal');

 // Detectar el evento de scroll
 window.addEventListener('scroll', () => {
     // Mostrar el botón si el desplazamiento es mayor a 100px
     if (window.scrollY > 100) {
      volverPrincipal.style.display = 'block';
     } else {
      volverPrincipal.style.display = 'none';
     }
 });

 // Opcional: Agregar un evento al botón (por ejemplo, para subir al inicio)
 volverPrincipal.addEventListener('click', () => {
     window.scrollTo({ top: 0, behavior: 'smooth' });
 });