// // JavaScript bouton Dark/Light Mode

// Récupérer les éléments du DOM
const toggleButton = document.getElementById('mode-toggle');
const body = document.body;

// Récupérer le mode actuel depuis le localStorage
const currentMode = localStorage.getItem('mode');

// Initialiser le mode au chargement de la page
if (currentMode === 'dark') {
  body.classList.add('dark-mode');
}

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  // Enregistrer le mode actuel dans le localStorage
  const newMode = body.classList.contains('dark-mode') ? 'dark' : 'light';
  localStorage.setItem('mode', newMode);

  // Changer l'icône du bouton en fonction du mode
  const sunIcon = document.querySelector('#mode-toggle i.fa-sun');
  const moonIcon = document.querySelector('#mode-toggle i.fa-moon');

  if (body.classList.contains('dark-mode')) {
    sunIcon.style.display = 'none';
    moonIcon.style.display = 'inline-block';
  } else {
    sunIcon.style.display = 'inline-block';
    moonIcon.style.display = 'none';
  }
});
