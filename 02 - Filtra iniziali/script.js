/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
let iniziale = 'A';
let nomiOttenuti = []

// Dichiara la funzione qui.
function stessaIniziale(names, iniziale) {
    for (let i = 0; i < names.length; i++) {
        if (names.charAt(0).toUpperCase() === iniziale.toUpperCase()) {
            nomiOttenuti.puch(names[i])
        }
    } return nomiOttenuti;
}

// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]