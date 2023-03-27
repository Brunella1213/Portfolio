// Animation effet machine à écrire sur "Laissez moi vous parlez un peu de moi !"
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
  
  
  $(document).ready(function() {

    // Fix for "hamburger menu" not collapsing after a click on menu item
    $("nav").find("li").on("click", "a", function() {
      $('.navbar-collapse.in').collapse('hide');
    });

    // Add smooth scrolling to all nav links
    $(".navbar a, footer a[href='#home']").on('click', function(event) {
      // Don't scroll if on a mobile phone, it's too awkward
      if (this.hash !== "" && $(window).width() > 480) {
        // Prevent default anchor click behavior
        event.preventDefault();
        // Store hash
        var hash = this.hash;
        // Scroll to hash tag in 700 ms
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 700, function() {
          // Add hash (#) to URL when done scrolling
          window.location.hash = hash;
        });
      }
    });

  });
  
  // JavaScript pour le bouton "Haut de page"
  // When the user scrolls down 20px from the top of the document, show the button
  // window.onscroll = function() {
  //   scrollFunction()
  // };

  // function scrollFunction() {
  //   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  //     document.getElementById("home").style.display = "block";
  //   } else {
  //     document.getElementById("home").style.display = "none";
  //   }
  // }







