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
eintrag_erfassen();


const eintrag_ausgeben = function () {
    return`Title: ${titel}
Typ: ${typ}
Betrag: ${betrag} ct
Datum: ${datum}        
`;
};
console.logeintrag_ausgeben(titel, typ, betrag, datum);




const einfrag_verrechennen(titel, typ, betrag, datum);
}
einfrag_verrechennen = function () {

    if (typ === "einnahme") {
        einnahmen = einnahmen + betrag;
        bilanz = bilanz + betrag;
    } else if [typ_1 === "ausgabe"] {
        ausgaben = ausgaben + betrag;
        bilanz = bilanz - betrag;
    } else {
        console.log("Falscher Typ");
    }
}

einfrag_verrechennen(typ, betrag);

const gesamt_bilanz_ausgeben = funktion(einnahmen, ausgaben, bilanz){
    console.log(einnahmen: §{einnahmen})
    titel = prompt("Titel:");
    typ = prompt("Typ", "einnahme");
    betrag = parseFloat(prompt("Betrag (in Cent)"));
    datum = prompt("Datum", "jjjj-mm-tt")
};

gesamt_bilanz_ausgeben(einnahmen, ausgaben, bilanz);

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
