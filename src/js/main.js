"use strict";

let titel_1 = prompt("Titel:");
let typ_1 = prompt("Typ", "einnahme");
let betrag_1 = parseFloat(prompt("Betrag (in Cent)"));
let datum_1 = prompt("Datum", "jjjj-mm-tt");

let einnahmen = 0;
let ausgaben = 0;

console.log(`Title: ${titel_1}
    Typ: ${typ_1}
    Betrag: ${betrag_1} ct
    Datum: ${datum_1}`
);

if (typ_1 === "einnahme") {
    einnahmen += betrag_1;
} else {
    ausgaben += betrag_1;
}

let titel_2 = prompt("Titel:");
let typ_2 = prompt("Typ", "einnahme");
let betrag_2 = parseFloat(prompt("Betrag (in Cent)"));
let datum_2 = prompt("Datum", "jjjj-mm-tt");

console.log(`Title: ${titel_2}
    Typ: ${typ_2}
    Betrag: ${betrag_2} ct
    Datum: ${datum_2}`
);

if (typ_2 === "einnahme") {
    einnahmen += betrag_2;
} else {
    ausgaben += betrag_2;
}

let bilanz = einnahmen - ausgaben;
let positiv = bilanz >= 0;

console.log(`Gesamteinnahmen: ${einnahmen} ct`);
console.log(`Gesamtausgaben: ${ausgaben} ct`);
console.log(`Bilanz: ${bilanz} ct`);
console.log(`Bilanz ist positiv: ${positiv}`);
