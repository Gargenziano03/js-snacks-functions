/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
let iniziale = 'a';


// Dichiara la funzione qui.
function stessaIniziale(names, iniziale) {
    const nomiOttenuti = [];
    for (let i = 0; i < names.length; i++) {
        if (names[i].charAt(0).toUpperCase() === iniziale.toUpperCase()) {
            nomiOttenuti.push(names[i]);
        }
    } return nomiOttenuti;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(stessaIniziale(names, iniziale));
//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]