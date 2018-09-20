// Våra variabler
let form      = document.querySelector('#addForm');
let itemList  = document.querySelector('#items');
let filter     = document.querySelector('#filter');

const queryParent = (e, query) => {
  let elem = e.target;
  while (!elem.parentElement.querySelector(query)) {
    console.log('HEJ');
    elem = elem.parentElement;
  }
  console.log(elem);
  return elem;
};

// Add items
const addItem = e => {
  e.preventDefault(); // För att undvika att submit laddar om sidan
  console.log(e);

  // Hämta text från inputfält
  let newItemText = document.querySelector('#item').value;

  // Gör texten till en textnod
  let text = document.createTextNode(newItemText);

  // Skapade en <li>
  let li = document.createElement('li');

  // Lägg till classer
  li.className = 'list-group-item';

  // Lägg på texten på li
  li.appendChild(text);

  // Skapa en knapp
  let button = document.createElement('button');

  // Lägg till classer till knappen
  button.className = 'btn btn-danger btn-sm float-right delete';

  // Skapa textnod för knapp
  let buttonText = document.createTextNode('X');

  // Lägg på texten på knappen
  button.appendChild(buttonText);

  // Lägg på knappen på li
  li.appendChild(button);

  // Lägg till li i slutet av ul
  itemList.appendChild(li);
};

const removeItem = e => {
  // 1. Inntehåller target classen 'delete'?
  if (e.target.classList.contains('delete')) {
    console.log('Den innehåller deleteklassen');

    // 2. Kontrollera om man vill med confirm (typ en alert som returnerar true eller false)
    if (confirm('Är du säker på att du vill deleta?')) {
      // Om "ok" (true): kör denna kod
      console.log('Snyggt jobbat med confirm');

      // Ta bort sätt 1:
      // let justDenna = e.target.parentElement;
      // Ta bort uls child
      // itemList.removeChild(justDenna);
      // itemList.removeChild(e.target.parentElement);

      // Ta bort sätt 2:
      // e.target.parentElement.remove(); // Fungerar likadant
      // e.target.parentElement.remove(); // Fungerar likadant
      queryParent(e, '#addForm').remove(); // Fungerar likadant
    }
  }

  else {
    console.log('Den innehåller INTE deleteklassen');
  }
};

// Filtreringsfunktion (lite avancerat men wtf...)
const filterItems = e => {
  console.log('Filter körs igång');
  // 1. Gör om texten till liten text
  let text = e.target.value.toLowerCase();

  // 2. Hämta alla li's i listan (Ger oss en sk HTML-collection, INTE en array)
  let items = itemList.getElementsByTagName('li');

  // 3. Gå igenom varje item i items. ForEach bara med arrays
  Array.from(items).forEach(item => {
    // Få ut text ur li (textnod är FÖRSTA barnet)
    let itemName = item.firstChild.textContent;
    // Matchar värderna? -1 ges om de INTE matchar
    if (itemName.toLowerCase().indexOf(text) != -1) {
      console.log(itemName.toLowerCase().indexOf(text));
      // Om de matchar
      item.style.display = 'block'; // Visa elementet
    }

    else {
      item.style.display = 'none'; // Dölj listordet som ej matchar
    }
  });

};

// Lägg till event-listeners
form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
filter.addEventListener('input', filterItems); // Eller keyup
