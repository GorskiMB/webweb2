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
/*
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
*/

// ### Parent, childeren, siblings m.m.

// parentNode
/*
let itemList = document.querySelector('#items');
console.log(itemList.parentNode); // Ger oss föräldern till itemList

itemList.parentNode.style.backgroundColor = 'pink';

itemList.parentNode.parentNode.style.backgroundColor = 'yellow';
*/

/*
// parentElement
let itemList = document.querySelector('#items');
console.log(itemList.parentElement); // Ger oss föräldern till itemList
itemList.parentElement.style.backgroundColor = 'pink';
itemList.parentElement.parentElement.style.backgroundColor = 'yellow';

// childNodes, childeren
console.log(itemList.childNodes); // Inte bra då linebreaks räknas med
console.log(itemList.children); // Bryr sig inte om line breaks

// firstChild
console.log(itemList.firstChild); // Inte bra! Ger oss text PGA line break
console.log(itemList.firstElementChild); // Bra! Ger oss elementet

// lastChild
console.log(itemList.lastChild); // Inte bra! Ger oss text PGA line break
console.log(itemList.lastElementChild); // Bra! Ger oss elementet

// nextSibling, nextElementSibling
console.log(itemList.nextSibling); // Inte bra! Ger oss text PGA line break
console.log(itemList.nextElementSibling); // Bra! Ger oss elementet

// previousSibling, previousElementSibling
console.log(itemList.previousSibling); // Inte bra! Ger oss text PGA line break
console.log(itemList.previousElementSibling); // Bra! Ger oss elementet
*/

// ### Skapa ett element och lägg det i DOM ###
/*
// 1. Skapa elementet
let newDiv = document.createElement('div'); // Skapa diven
newDiv.className = 'mitt-klassnamn';        // Skapa en klass
newDiv.classList.add('en-klass-till', 'en-till');      // Skapa en/flera klasser
newDiv.classList.remove('en-klass-till', 'en-till');   // Ta bort klasser
newDiv.id = 'unik';
newDiv.setAttribute('title', 'Syns vid hovring');

// 2. Lägg till text
let newDivText = document.createTextNode('Lite random text som blir textnod'); // Skapa en textnod
newDiv.appendChild(newDivText); // Lägger till textnoden. Gammal metod "append" gör samma sak

// 3. Hämta platsen där det ska ligga
let container = document.querySelector('header .container'); // Hitta boxen .container
let h1 = document.querySelector('#header-title'); // Hitta h1

// 4. Lägg ut det i DOM
//container.insertBefore(newDiv, h1); // 1: Vad stoppa in, 2: Innan vad?
let newDiv2 = '<h1>Hejsan!</h1>';
container.innerHTML = newDiv2; // Snabb men farlig. Tex om användaren får påverka

// document.write
document.write('<h1>Nu använder vi document.write</h1>'); // Använd inte, kan skriva över hela sida, skapa ny sida, inte fungera
*/

/*
// ### EVENTS DEL 2 ###

let button = document.querySelector('#btn'); // Hämta button fråm DOM

// button.addEventListener('click', () => { // Lägg till eventet 'click'
//   console.log('Klickat!');
// });

//button.addEventListener('click', () => console.log('Snygg ES6!')); // Samma som ovan

const buttonClick = e => {
  console.log(e);
  console.log(e.target);
  console.log(e.target.id);
  console.log(e.target.className);
  console.log(e.target.classList); // En lista, mer användbar än className
  console.log(e.target.classList[1]);
  console.log(e.type); // Vad fär slags event?
  console.log('Fönster position:', e.clientX, e.clientY); // Visar position i browser
  console.log('Skärm position:', e.screenX, e.screenY); // Visar position i datorskärm
  console.log('Position i elementet:', e.offsetX, e.offsetY); // Visar position i elementet
  // pageX och pageY: I hela documentet
  console.log(e.shiftKey); // Har shift tryckts ned samtidigt som eventet?
  console.log(e.ctrlKey); // Har ctrl tryckts ned samtidigt som eventet?
  console.log(e.altKey); // Har alt tryckts ned samtidigt som eventet?
};

button.addEventListener('click', buttonClick);
*/

/*
// ### EVENTS DEL 3 ###

let button = document.querySelector('#btn');
let box = document.querySelector('#box');
let output = document.querySelector('#output');

const runEvent = e => {
  console.log('Event type:', e.type);
  output.innerHTML = `Positionen är nu ${e.offsetX} samt ${e.offsetY}`;
  box.style.backgroundColor = `rgb(${e.offsetX}, 100, ${e.offsetY})`;
};

// Olika event
// button.addEventListener('click', runEvent);      // Singel klick
// button.addEventListener('dblclick', runEvent);   // Dubbel klick
// button.addEventListener('mousedown', runEvent);  // När man trycker ner musknapp
// button.addEventListener('mouseup', runEvent);    // Släpp musknapp
// box.addEventListener('mouseenter', runEvent);    // Hovra över elementet
// box.addEventListener('mouseleave', runEvent);    // Lämna elementet
// box.addEventListener('mouseover', runEvent);     // Äntra element ELLER child-element
// box.addEventListener('mouseout', runEvent);      // Lämna element ELLER child-element
box.addEventListener('mousemove', runEvent);     // När musen flyttar sig
*/

// ### EVENTS DEL 4 ###

let itemInput = document.querySelector('input[type=text]');
let form = document.querySelector('form');
let select = document.querySelector('#superSelect');

const runEvent = e => {
  e.preventDefault(); // Hindra submitten från att skicka iväg formuläret
  console.log('Event type:', e.type);

};

// itemInput.addEventListener('keydown', runEvent);  // När man skriver i fältet
// itemInput.addEventListener('keyup', runEvent);    // När man släpper knapp
// itemInput.addEventListener('keypress', runEvent); // När man håller ner
// itemInput.addEventListener('focus', runEvent);    // När man klickar i fält
// itemInput.addEventListener('blur', runEvent);     // När man klickar ur fält
// itemInput.addEventListener('cut', runEvent);      // Vid cut
// itemInput.addEventListener('copy', runEvent);     // Vid copy
// itemInput.addEventListener('paste', runEvent);    // Vid paste

// Kungen av form-events
itemInput.addEventListener('input', runEvent);  // keydown, cut, paste

// För selecten
// select.addEventListener('change', runEvent);
select.addEventListener('input', runEvent);

form.addEventListener('submit', runEvent); // När man submittar formuläret
