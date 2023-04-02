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
  
  // JavaScript pour le menu hamburger avec un effet de défilement en douceur
  
  $(document).ready(function() {

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

  // JavaScript pour le bouton "Dark-Light Mode"

  // const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
  // const currentTheme = localStorage.getItem('theme');

  // if (currentTheme) {
  //   document.documentElement.setAttribute('data-theme', currentTheme);

  //   if (currentTheme === 'dark') {
  //     toggleSwitch.checked = true;
  //   }
  // }

  // function switchTheme(e) {
  //   if (e.target.checked) {
  //     document.documentElement.setAttribute('data-theme', 'dark');
  //     localStorage.setItem('theme', 'dark');
  //   }
  //   else {
  //     document.documentElement.setAttribute('data-theme', 'light');
  //     localStorage.setItem('theme', 'light');
  //   }
  // }

  // toggleSwitch.addEventListener('change', switchTheme, false);

  // function toggleDarkMode() {
  //   const elements = document.querySelectorAll('*');
  //   elements.forEach(element => {
  //     element.classList.toggle('dark-mode');
  //   });
  // }
  
  // const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
  // const currentTheme = localStorage.getItem('theme');
  
  // if (currentTheme) {
  //     document.documentElement.setAttribute('data-theme', currentTheme);
  
  //     if (currentTheme === 'dark') {
  //         toggleSwitch.checked = true;
  //     }
  // }
  
  // function switchTheme(e) {
  //     if (e.target.checked) {
  //         document.documentElement.setAttribute('data-theme', 'dark');
  //         localStorage.setItem('theme', 'dark');
  //     }
  //     else {
  //         document.documentElement.setAttribute('data-theme', 'light');
  //         localStorage.setItem('theme', 'light');
  //     }    
  // }
  
  // toggleSwitch.addEventListener('change', switchTheme, false);
  







