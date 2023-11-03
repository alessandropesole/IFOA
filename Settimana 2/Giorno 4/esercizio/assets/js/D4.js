/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/


/* SCRIVI QUI LA TUA RISPOSTA */
function lati(l1,l2) {
    return 'l\'area del rettangolo è ' + l1 * l2;
  }


console.log(lati(3,5));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/



/* SCRIVI QUI LA TUA RISPOSTA */
function crazySum(n1,n2) {
    let somma = n1 +n2
    if (n1 !== n2) {
        return 'i numeri hanno valore diverso e il risultato è ' + somma
    }
    else if (n1 === n2) { 
        return 'i numeri sono uguali e il risultato è ' + somma * 3
        
    }
}
console.log(crazySum(3,4));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazyDiff(n) {
    let differenzaAssoluta = Math.abs(n - 19);
    if (n <= 19) { 
        return 'il numero fornito è minore o uguale a 19 e il risultato è ' + differenzaAssoluta
    }
    else if (n > 19) {
        return 'il numero fornito è maggiore di 19 e il risultato è ' + differenzaAssoluta * 3
    }
}
console.log(crazyDiff(15));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/


/* SCRIVI QUI LA TUA RISPOSTA */
function boundary(a) {
    if (a >= 20 && a <= 100) {
        return true
    }
    else if (a === 400) {
        return true
    }
    else { 
        return false
    }
}
console.log(boundary(403))

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function epify(stringa) {
    if (stringa.startsWith("EPICODE")) {
      return stringa;
    } else {
      return "EPICODE " + stringa;
    }
  }
  console.log(epify('EPICODE pippo pluto'));
  console.log(epify('è un corso online'))
   

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/



/* SCRIVI QUI LA TUA RISPOSTA */
function check3and7 (b) {
    if (b % 3 === 0) {
        return 'il numero ' + b + ' è multiplo di 3.';
}
else if (b % 7 === 0) {
    return 'il numero ' + b + ' è multiplo di 7.'; 
}
else {
    return 'il numero ' + b + ' non è multiplo di 3 o di 7.';
}
}
console.log(check3and7(8));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/


/* SCRIVI QUI LA TUA RISPOSTA */
function reverseString(epicode) {
    let arrayEpicode=epicode.split('');
    let arrayCapovolto = arrayEpicode.reverse();
    let epicodeCapovolto = arrayCapovolto.join('');
    return epicodeCapovolto;
 }
 console.log(reverseString('peppino'));


/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let frase = 'prova esercizio numero otto'

function upperFirst(frase) {
    let arrayFrase = frase.split(' '); 
    let risultato = [];
    for (let i = 0; i < arrayFrase.length; i++) {
        let primaLettera = arrayFrase[i].charAt(0);
        let parolaTagliata = arrayFrase[i].slice(1);
        let parolaFinale = primaLettera.toUpperCase() + parolaTagliata;
        risultato.push(parolaFinale);
    }
    return risultato.join(' ');
}
console.log(upperFirst(frase))


/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function cutString(cut) {
     return cut.slice(1, cut.length - 1); 
}
console.log(cutString('ciao a tutti'));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function giveMeRandom(numero) {
    let arrayNumeri = [];
    for (let i = 0; i < numero; i++) {
        arrayNumeri.push(Math.floor(Math.random() * 11));

}
return arrayNumeri;
}
console.log(giveMeRandom(7));