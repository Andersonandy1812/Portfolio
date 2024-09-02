function myFunction() {
    var x = document.getElementById("right-list");
    if (x.className === "right-list") {
      x.className += " responsive";
    } else {
      x.className = "right-list";
    }
  }