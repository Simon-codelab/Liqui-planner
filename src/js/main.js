"use strict";

let title_1 = prompt("Titel:");
let typ_1 = prompt("Typ", "einnahme");
let betrag_1 = parseInt(prompt("Betrag (in Cent)"));
let datum_1 = prompt("Datum", "jjjj-mm-tt");

console.log('Title: ${titel_1}');
console.log('Typ: ${typ_1}');
console.log('Betrag: ${betrag_1} ct');
console.log('Datum: ${datum_1}');

let title_2 = prompt("Titel", );
let typ_2 = prompt("Typ", "einnahme");
let betrag_2 = parseInt(prompt("Betrag", "z.B. 100,00"));
let datum_2 = prompt("Datum", "jjjj-mm-tt");

console.log('Title: ${titel_2}');
console.log('Typ: ${typ_2}');
console.log('Betrag: ${betrag_2} ct');  
console.log('Datum: ${datum_2}');


//GesamtBilanz

let einnahmen;
let ausgaben;
let bilanz = betrag_1 + betrag_2;

let positiv = bilanz >= 0;
console.log('Bilanz ist positiv: ${positiv}');