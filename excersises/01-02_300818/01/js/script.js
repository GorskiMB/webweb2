/*

// ### Datatyper - Nummer och Strängar ###

let nummer = 35; // Number

let decSiffra = 35.5; // Number

let ord = 'Hej'; // String (Sträng)

let sifferOrd = '35'; // Också en sträng

console.log(sifferOrd + ' ' + sifferOrd);

console.log(sifferOrd, sifferOrd); // Samma sak

// ### Datatyper - Booleaner, undefined, NULL ###

let loggedIn = false; // Boolean

let isNerdy = true; // Boolean

let emptyVariable; // undefined

let choosenColor = 'Red'; // String

choosenColor = null; // NULL

console.log(emptyVariable);

console.log(typeof(sifferOrd));

// ### Variabler ###

let minVariabel = 900;

minVariabel = 800; // Kan reassignas

const writtenInStone = 3.14; // Konstant

//writtenInStone = 3.15; // Går ej att reassigna

console.log(minVariabel + writtenInStone); // Skriver ut till konsolen

// ### Hur döper vi variabler? ###

let minVariabelMedSiffra = 1337; // Camel Case ANVÄND!!

let MinVariabelMedSiffra = 12; // Partial Case

let min_PHP_variabel = 34; // Underscore (Används i PHP, ibland JS)

*/

/*

// ### Arrayer (Listor) ###

let cars = ['Audi', 'Bentley', 'Chevrolet']; // Array

console.log(cars[1]); // Bentley

console.log(cars[3]); // undefined

let colors = new Array('Red', 'Green', 'Blue');

colors[3] = 'Yellow';

console.log(colors);

colors.push('Ett element i slutet av arrayen'); // Lägg till ett element i slutet

console.log(colors);

colors.pop(); // Ta bort ett element i slutet

colors.splice(2, 0, 'Pink', 'Grey', 'Black'); // På pos 2: Ta bort 0, Lägg till 3

console.log(colors);

let numbers = [1, 5, 3, 7666, 434, 'femton', 54];

console.log(numbers.sort()); // Sortera

console.log(...numbers); // Spread operator (X R T E D G)

console.log(numbers.length);

// SKAPA EN ARRAY MED 5 DJUR. LÄGG TILL OXE, TJUR, HÖNA NÄST FÖRST.

let djur = new Array(
  'Anka',
  'Svan',
  'Skata',
  'Magpie',
  'Flamingo'
);

djur.splice(1, 0, 'Oxe', 'Tjur', 'Höna');

console.log(djur);

*/

/*

// ### Loopar ###

// for-loop
for (let i = 0; i < 10; i++) { // i börjar som 0, är max 9, ökar med 1 varje loop
  console.log(`Hej på dig nummer ${i}`);
}

let cars2 = ['Audi', 'Bentley', 'Chevrolet'];

for (let i = 0; i < cars2.length; i++) {
  console.log(`Hej på dig bil ${cars2[i]}`);
}

// while-loop
let j = 0;

while (j < 50) {
  console.log(`Nu är vi på siffran ${j}!`);
  j++; // Utan denna kommer loopen att loopas för evigt!
}

// ES6 forEach-loop med backticks och Arrowfunctions
let ovningsArray = [1, 2, 4, 5, 6, 4, 6]; // Skapa en array...

ovningsArray.forEach(item => { // ES6-way (Nytt)
  console.log(`Jag loopar ut siffran ${item}`); // item kan heta vad som helst
});

// Old school, men samma forEach loop som ovan
ovningsArray.forEach(function(item) {
  console.log('Jag är gammaldags och loopar ut ' + item);
});

*/

/*

// ### Vilkor (Conditionals) ###

let number1 = 5, // Ett '=' tecken: tillsätt (assign) ett värde till variablen
    number2 = 6,
    number3 = '6'; // OBS, en textsträng, inte samma datatyp som siffran 6.

//if-sats
if (number1 != number2) { // Två '==' jämnför värden
  console.log('False!');
}

if (number1 !== number2) { // Tre '===' jämnför värden OCH DATATYP (Sträng och Siffra)
  console.log('False!');
}

//if-else

if (number1 == number2) {
  console.log('De har samma värde!');
}

else {
  console.log('Blip!');
}

if (number1 != number2 && number3 != number2) {
  console.log('Inget stämmer');
}

else {
  console.log('Allt stämmer');
}

// switch

let band = 'Dave Brubeck Quartet';

switch (band) {
  case 'Lasse Stefanz':
    alert('Nej tack');
    break; // Break hoppar ut ur loopen

  case 'Queen':
    alert('Jovisst!');
    break;

  case 'Dave Brubeck Quartet':
    alert('Yezz');
    break;

  default: // Om inget case stämmer: gör detta
    alert('Har ingen aning om det här bandet');
}

*/

/*

// ### Functions ###

const sum = (a, b) => { // const = variabel typ, sum = namnet, (a, b) = parametrar, => {här körs koden}
  return a + b;
};

const sum2 = (a, b) => a + b; // Samma sak

const sum3 = a => a * 25; // Samma sak, endast ETT argument

console.log(sum(34, 54));

// IIFE - functioner som körs direkt

const goDirect = (function() {
  console.log('Kör direkt!');
})(); // OBS! två () här

// Eller så här... (Old school)
(function letsGo() {
  console.log('Sätt nummber 3');
})();

// Med arrow function
const goDirect2 = (() => {
  console.log('Kör direkt med Arrow function!');
})();

// Old-school syntax function
function oldSchoolVanligFunction(a, b) {
  // Koden körs
}

// Old-school anonym
var anonymFunction = function(a, b) {
  // Koden körs
};

*/

/*

// ### Objekt ###

let person = {
  name: 'James', // En sträng
  lastName: 'Bond',
  age: 45, // Number
  children: [ // En gardråb
    'mini-James',
    'Mini-Mee',
    'Agent Mini'
  ],
  adress: { // Ett rum i lägenheten
    street: 'Storgatan 13',
    city: 'Ludvika',
    country: 'Sweden'
  },

  fullName() {
    return 'Detta är ' + this.name + ' ' + this.lastName;
  },

  someInfo() {
    return `${this.fullName()}\n` +
    `Stad: ${this.adress.city}\n` +
    `Ett barn: ${this.children[2]}`;
  }

};

console.log(person.age);
console.log(person.adress.street);
console.log(person.children[0]);
console.log(person.fullName());
console.log(person.someInfo());

// Skapa objekt på andra sätt:
let banana = new Object(); // Konstruktorn "new" istället för att märka upp
banana.color = 'green'; // Lägg till properties
banana.shape = 'banana shaped';
banana.status = 'omogen';
banana.describe = function() { // OBS EJ arrow function (=>) för metoder INUTI objekt
  return `${this.color} and ${this.shape} and ${this.status}`;
};

console.log(banana.describe());

//Constructor pattern (ett vanligt sätt att skapa objekt)
const fruitMaker = function(name, color, shape, status, flavor) {
  this.name = name;
  this.color = color;
  this.shape = shape;
  this.status = status;
  this.flavor = flavor;
  this.message = function() {
    return `Yo! I'm a ${this.name} and you shot me!`;
  };
};

let lemon = new fruitMaker('Lemon', 'yellow', 'round', 'sour', 'good');
let apple = new fruitMaker('Apple', 'red', 'round', 'omogen', 'apple taste');

console.log(apple.name, lemon.name);
console.log(apple.message());
console.log(lemon.message());

*/

/*

// ### Arrayer med objekt ###

let user = [
  {
    name: 'Emil Willbas',
    age: 23
  },
  {
    name: 'Uberto Eco',
    age: 90
  },
  {
    name: 'Calle Klein',
    age: 43
  }
];

console.log(user[2]);

// Objekt gillar inte arrow functions (=>), MEN forEach-loopar gillar arrow functions

const human = {
  firstName: 'Herbert',
  lastName: 'Andersson',
  hobbies: [
    'fiska',
    'sticka',
    'Formel 1'
  ],
  showHobbies: function() {
    this.hobbies.forEach(hobby => {
      console.log(`${this.firstName} gillar ${hobby}`);
    });
  }
};

human.showHobbies();

// forEach =
for (let i = 0; i < human.hobbies.length; i++) {
  console.log(`${human.firstName} gillar ${human.hobbies[i]}`);
}

*/
