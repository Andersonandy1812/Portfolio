 // selecting the property by the id 
 const volverPrincipal = document.getElementById('volverPrincipal');

 // detecting the scroll
 window.addEventListener('scroll', () => {
     // This is to change the display if the scroll is more than 100px
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

function myFunction() {
    var x = document.getElementById("right-list");
    if (x.className === "right-list") {
      x.className += " responsive";
    } else {
      x.className = "right-list";
    }
  }
