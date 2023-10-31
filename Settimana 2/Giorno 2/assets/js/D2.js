/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numeroUno = 4;
let numeroDue = 7;
if (numeroUno < numeroDue) {
  document.getElementById('esercizio1').innerHTML = '4 è minore di 7';
}
else if (numeroUno > numeroDue) {
  document.getElementById('esercizio1').innerHTML = '7 è maggiore di 4';
}
else { 
  document.getElementById('esercizio1').innerHTML = 'i numeri sono uguali';
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numeroFornito = 3 
if (numeroFornito !== 5) {
console.log('not equal');
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let var0 = 18
if (var0 % 5 === 0) {
  document.getElementById('esercizio3').innerHTML = 'il numero è perfettamente divisibile per 5';
}
else {
  document.getElementById('esercizio3').innerHTML = 'il numero non è perfettamente divisibile per 5';
}


/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numeroTre = 5;
let numeroQuattro = 3;
if (numeroTre === 8 || numeroQuattro === 8) {
  document.getElementById('esercizio4').innerHTML = 'il valore di uno dei due numeri è 8'
}
else if (numeroTre - numeroQuattro === 8 || numeroTre + numeroQuattro === 8) {
  document.getElementById('esercizio4').innerHTML = 'la loro addizione/sottrazione è uguale a 8'
}  

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let shoppingCart = 45;
if (shoppingCart <= 50) {
  document.getElementById('esercizio5').innerHTML = shoppingCart + 10
}
else if (shoppingCart > 50) {
  document.getElementById('esercizio5').innerHTML = shoppingCart 
}


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*let shoppingCart = 45;
if (shoppingCart <= 50) {
  document.getElementById('esercizio6').innerHTML = (shoppingCart - shoppingCart * 20 /100) + 10
}
else if (shoppingCart > 50) {
  document.getElementById('esercizio6').innerHTML = shoppingCart 

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*let var1 = 17
let var2 = 34
let var3= 188
if (var1>var2)

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let var15 = 'ciaociao';
document.getElementById('esercizio8').innerHTML = typeof var15;




/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let var4 = 15
if (var4 % 2 === 0) {
  document.getElementById('esercizio9').innerHTML = 'il numero è pari'
}
else {
  document.getElementById('esercizio9').innerHTML = 'il numero è dispari'
}


/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val > 5) {
      console.log("Più di 5");
    } else if (val ) {
      console.log("Uguale a 10 o maggiore");
    }

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
me.city = 'Toronto';
document.getElementById('esercizio11').innerHTML = me.city;

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName;
document.getElementById('esercizio12').innerHTML = me.lastName;

