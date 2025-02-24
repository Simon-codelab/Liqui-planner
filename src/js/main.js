"use strict";


let einnahmen = 0,
    ausgaben = 0,
    bilanz = 0,
    titel, 
    typ, 
    betrag, 
    datum;

const eintrag_erfassen = function () {
    titel = prompt("Titel:");
    typ = prompt("Typ", "einnahme");
    betrag= parseFloat(prompt("Betrag (in Cent)"));
    datum= prompt("Datum", "jjjj-mm-tt");
}

console.log(`Title: ${titel}
    Typ: ${typ}
    Betrag: ${betrag} ct
    Datum: ${datum}`
);

eintrag_erfassen();
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

let bilanz_0 = einnahmen - ausgaben;
let positiv = bilanz >= 0;

console.log(`Gesamteinnahmen: ${einnahmen} ct`);
console.log(`Gesamtausgaben: ${ausgaben} ct`);
console.log(`Bilanz: ${bilanz} ct`);
console.log(`Bilanz ist positiv: ${positiv}`);
