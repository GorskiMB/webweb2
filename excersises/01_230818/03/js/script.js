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
