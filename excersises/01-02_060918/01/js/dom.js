// ### DOM-manipulation m.m ###

// Man kan skriva JS direkt i consolen (text document.body.style.background = "red";)

// ### Utforska document-objektet
/*
console.dir(document); // Directory = Arkiv, Lista, Index, Katalog
console.log(`Borta bra men ${document.domain} bäst`); // 127.0.0.1
console.log(document.URL); // URL för sidan
console.log(document.title); // Ger oss title
//document.title = "Dum och Dummare 2";
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[14]); // INTE en bra metod att välja element.
console.log(document.forms);
console.log(document.links);
console.log(document.images);
*/

// ### getElementById ###
/*
console.log(document.getElementById('items')); // OBS! Inte '#'
let myTitle = document.getElementById('header-title');
console.log(myTitle);
myTitle.textContent = '123'; // Vanligt sätt att ändra text-noden
//myTitle.innerText = '456'; // Ett annat sätt att ändra text
// Vad skiljer dem åt?
console.log(myTitle.textContent); // Tar med all text (inkl barns)
console.log(myTitle.innerText);   // Tar endast med elementets
console.log(myTitle.innerHTML);
myTitle.innerHTML = '<h2>Lite instoppad HTML jao!<h2>';
*/

// ES 6 Backticks
/*
let main = document.getElementById('main');
main.innerHTML = `
  <h2 class="title">Ny lista</h2>
  <ul id="items" class="list-group">
    <li class="list-group-item">Item 1</li>
    <li class="list-group-item">Item 2</li>
    <li class="list-group-item">Item 3</li>
    <li class="list-group-item">Item 4</li>
    <li class="list-group-item">Item 5</li>
    <li class="list-group-item">Item 6</li>
  </ul>
`; // OBS! Backticks låter oss skriva på flera rader!
// Samma som
main.innerHTML = '<h2 class="title">Ny lista</h2><ul id="items" class="list-group"><li class="list-group-item">Item 1</li><li class="list-group-item">Item 2</li><li class="list-group-item">Item 3</li><li class="list-group-item">Item 4</li><li class="list-group-item">Item 5</li><li class="list-group-item">Item 6</li></ul>';
*/

/*
// Styla element med .style
let myTitle = document.getElementById('header-title');
myTitle.style.borderBottom = '10px dotted white'; // OBS inte "border-bottom"
*/

// ### getElementsByClassName - Old School ###
/*
let items = document.getElementsByClassName('list-group-item');
console.log(items); // Ger oss en HTMLCollection (typ en array)
items[0].textContent = 'Ettan!';

// Ändra item 2 till RÖD textfärg
items[1].style.color = 'red';
//items[1].classList.add('text-danger')

// Hur ändra bg-färg på alla element?
for (let i = 0; i < items.length; i++) {
  items[i].style.backgroundColor = 'pink';
}
*/

// ### getElementsByTagName ###
/*
let items = document.getElementsByTagName('li');
console.log(items); // Ger oss en HTMLCollection (typ en array)
items[0].textContent = 'Ettan!';

// Ändra item 2 till RÖD textfärg
items[1].style.color = 'red';
//items[1].classList.add('text-danger')

// Hur ändra bg-färg på alla element?
for (let i = 0; i < items.length; i++) {
  items[i].style.backgroundColor = 'pink';
}
*/

// ### querySelector och querySelectorAll - "typ jquery" ###

// querySelector
/*
let header = document.querySelector('#header-title'); // Samma som CSS eller JQuery
header.style.color = 'purple';

let input = document.querySelector('input');
input.value = 'Skriv här';

let submit = document.querySelector('input[type=submit]');
submit.value = 'Vågar du submitta?';
submit.style.cssText = 'background-color: yellow; font-size: 30px; color: blue';

let lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'red';

let secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color = 'green';
*/

// ### querySelectorAll ###

let titles = document.querySelectorAll('.title');
console.log(titles); // Ger oss en nodelist: kan använda forEach-loop!
titles[0].textContent = 'Fruktpannkaka';
titles.forEach(el => { // Till skillnad från getElementsByClassName kan vi använda forEach-loop
  el.style.color = 'blue';
  el.textContent = 'Det här funkar fint';
});

// Nu kan vi enkelt göra "varannan"-grejer
let odds = document.querySelectorAll('li:nth-child(odd)');
let even = document.querySelectorAll('li:nth-child(even)');

odds.forEach(el => {
  el.style.backgroundColor = 'salmon';
});

even.forEach(el => {
  el.style.backgroundColor = 'lightgrey';
});
