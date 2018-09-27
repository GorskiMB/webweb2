'use strict()';

// 1. Sätt upp variabler
const opacityValue = 0.6;

let current = document.querySelector('#current'),

    // Hämta en Nodelist (array) med alla små img
    imgs    = document.querySelectorAll('.imgs img');

// 3. Få första thumbnail lite vit
imgs[0].style.opacity = opacityValue;

// 2. Thumbnails. ES6: Eftersom querySelectorAll ger oss en nodelist
// så kan vi använda oss av forEach istället för for-loop
imgs.forEach(img => img.addEventListener('click', event => {
  // Rensa all opacity
  imgs.forEach(img => img.style.opacity = 1);

  // Här inne sher mahin på varje img
  current.src = event.target.src;
  current.classList.add('fade-in');
  event.target.style.opacity = opacityValue;

  // En timeout some vänter i 0,5 sekunder och sedan tar bort fade-klassen
  // Tar (funktion, tid att vänta)
  setTimeout(() => {
    current.classList.remove('fade-in');
  }, 500);
}));
