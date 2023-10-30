/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
string: sequenza di caratteri senza specifiche
number: numero di qualsiasi tipo
boolean: valore vero o falso
null: valore intenzionalmente assente
undefined: valore non (ancora) presente
data: data in ogni suo formato
*/

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let myName = 'Alessandro';
console.log(myName);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// Soluzione 1
console.log(12+20);
// Soluzione 2 
let somma = 12+20;
// Soluzione 3
let numero1 = 12;
let numero2 = 20;
console.log(numero1 + numero2);
// Soluzione 4
let nuovoNumero1 = 12;
let nuovoNumero2 = 20;
let nuovaSomma = nuovoNumero1 + nuovoNumero2;
console.log(nuovaSomma);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12;
console.log(x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
myName= 'Pesole'
console.log(myName);
const persona = myName;
persona = 'Alessandro Pesole';
// persona = 'Alessandro Pesole'; Questa istruzione genererà un errore di riassegnazione di valore a una costante

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// Soluzione 1
console.log(4 - x);
//Soluzione 2
let y = 12;
console.log(y - 4)
// Soluzione 3
let sottrazione = 4 - x;
console.log(sottrazione);
// Soluzione 4 
let nuovaSottrazione = y - x;
console.log(sottrazione)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name1 = 'john';
let name2 = 'John';
console.log('I due nomi sono uguali?' + (name1 === name2));
// Soluzione 2
let verifica = name1 === name2;
console.log('I due nomi sono uguali?' + verifica);

let altraVerifica = name1.toLowerCase() === name2.toLowerCase();