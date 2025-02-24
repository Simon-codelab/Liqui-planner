"use strict";

document.addEventListener("DOMContentLoaded", function () {
    let einnahmen = 0;
    let ausgaben = 0;
    let bilanz = 0;
    let eintraege = [];

    const formular = document.getElementById("eingabeformular");
    const monatslistenContainer = document.getElementById("monatslisten");

    formular.addEventListener("submit", function (event) {
        event.preventDefault(); // Verhindert das Neuladen der Seite

        // Werte aus dem Formular holen
        let titel = document.getElementById("titel").value;
        let typ = document.querySelector("input[name='typ']:checked").value;
        let betrag = parseFloat(document.getElementById("betrag").value.replace(",", "."));
        let datum = document.getElementById("datum").value;

        // Validierung: Alle Felder müssen ausgefüllt sein
        if (!titel || isNaN(betrag) || betrag <= 0 || !datum) {
            alert("Bitte alle Felder korrekt ausfüllen!");
            return;
        }

        // Neues Objekt in die Liste hinzufügen
        let eintrag = { titel, typ, betrag, datum };
        eintraege.push(eintrag);

        // Bilanz aktualisieren
        if (typ === "einnahme") {
            einnahmen += betrag;
            bilanz += betrag;
        } else {
            ausgaben += betrag;
            bilanz -= betrag;
        }

        // UI aktualisieren
        updateUI();
        formular.reset(); // Formular zurücksetzen
    });

    function updateUI() {
        monatslistenContainer.innerHTML = ""; // Alte Liste löschen

        let gruppierteDaten = gruppiereNachMonat(eintraege);

        Object.keys(gruppierteDaten).forEach(monat => {
            let gesamtMonatsBilanz = 0;
            let monatsListe = document.createElement("article");
            monatsListe.classList.add("monatsliste");

            let h2 = document.createElement("h2");
            h2.innerHTML = `<span class="monat-jahr">${monat}</span>`;

            let ul = document.createElement("ul");

            gruppierteDaten[monat].forEach(eintrag => {
                gesamtMonatsBilanz += eintrag.typ === "einnahme" ? eintrag.betrag : -eintrag.betrag;
                let li = document.createElement("li");
                li.classList.add(eintrag.typ);

                li.innerHTML = `
                    <span class="datum">${eintrag.datum}</span>
                    <span class="titel">${eintrag.titel}</span>
                    <span class="betrag">${eintrag.betrag.toFixed(2)} €</span>
                    <button class="entfernen-button">🗑</button>
                `;

                li.querySelector(".entfernen-button").addEventListener("click", function () {
                    loescheEintrag(eintrag);
                });

                ul.appendChild(li);
            });

            let monatsbilanzSpan = document.createElement("span");
            monatsbilanzSpan.classList.add("monatsbilanz", gesamtMonatsBilanz >= 0 ? "positiv" : "negativ");
            monatsbilanzSpan.textContent = `${gesamtMonatsBilanz.toFixed(2)} €`;

            h2.appendChild(monatsbilanzSpan);
            monatsListe.appendChild(h2);
            monatsListe.appendChild(ul);
            monatslistenContainer.appendChild(monatsListe);
        });
    }

    function gruppiereNachMonat(eintraege) {
        return eintraege.reduce((gruppen, eintrag) => {
            let [jahr, monat] = eintrag.datum.split("-");
            let key = `${monat}/${jahr}`;

            if (!gruppen[key]) {
                gruppen[key] = [];
            }
            gruppen[key].push(eintrag);
            return gruppen;
        }, {});
    }

    function loescheEintrag(eintrag) {
        eintraege = eintraege.filter(e => e !== eintrag);
        
        if (eintrag.typ === "einnahme") {
            einnahmen -= eintrag.betrag;
            bilanz -= eintrag.betrag;
        } else {
            ausgaben -= eintrag.betrag;
            bilanz += eintrag.betrag;
        }

        updateUI();
    }
});
