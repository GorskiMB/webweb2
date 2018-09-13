// Våra variabler
let form      = document.querySelector('#addForm');
let itemList  = document.querySelector('#items');

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
      e.target.parentElement.remove(); // Fungerar likadant
    }
  }

  else {
    console.log('Den innehåller INTE deleteklassen');
  }
};

// Lägg till event-listeners
form.addEventListener('submit', addItem);

itemList.addEventListener('click', removeItem);
