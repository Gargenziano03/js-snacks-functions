/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function ricercaVocali(str){
    const vocali = ['a','e','i','o','u'];
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        const element = str[i];
        if (vocali.includes(element)) {
            counter++
        }
    }return counter
}


// Invoca la funzione qui e stampa il risultato in console
console.log(ricercaVocali(word));



//Risultato atteso se si passa 'javascript': 3 (a, a, i)