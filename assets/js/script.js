// Animation effet machine à écrire sur "Permettez-moi de me présenter"

window.addEventListener("DOMContentLoaded", (event) => {
  repeatAnimation();
  });

  function repeatAnimation() {
    animate_text();
    setInterval(animate_text, 5000); // Répéter toutes les 5 secondes (5000 millisecondes)
  }  
  
  function animate_text() 
  {
    let delay = 100,
        delay_start = 0,
        contents,
        letters;
  
    document.querySelectorAll(".text-animate").forEach(function (elem) {
      contents = elem.textContent.trim();
      elem.textContent = "";
      letters = contents.split("");
      elem.style.visibility = 'visible';
  
      letters.forEach(function (letters, index) {
        setTimeout(function () {
          elem.textContent += letters;
    
        }, delay_start + delay * index);
      });    
      delay_start += delay * letters.length;
    });
  }
  

  // JavaScript pour le contour arc-en-ciel

  document.addEventListener('DOMContentLoaded', function() {
    const border = document.querySelector('rainbow-border');
    border.style.display = 'none';
    setTimeout(() => {
      border.style.display = 'block';
    }, 0);
  });
  
  // JavaScript (Jqeury) pour le menu hamburger avec un effet de défilement en douceur
  
  $(document).ready(function() {   // Activer la fonction qui suit lorsque la page est chargée
    // Correction pour que le menu hamburger se replie après un clic sur un élément de menu.
    $("nav").find("li").on("click", "a", function() {
      $('.navbar-collapse.in').collapse('hide');
    });

    // Ajouter un défilement en douceur à tous les liens de navigation.
    $(".navbar a, footer a[href='#home']").on('click', function(event) {
      // Ne pas faire défiler si l'on est sur un portable
      if (this.hash !== "" && $(window).width() > 480) {
        // Empêcher le comportement de clic d'ancre par défaut.
        event.preventDefault();
        // Stocker la variable de hachage.
        var hash = this.hash;
        // Faites défiler jusqu'à la balise de hachage en 700 ms.
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 700, function() {
        // Ajouter le hachage (#) à l'URL une fois le défilement terminé.
          window.location.hash = hash;
        });
      }
    });

  }); 