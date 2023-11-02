//Ricevere attraverso un form il nome e l'anno di nascita, calcolare l'età, verificare se la persona è maggiorenne o minorenne, salutarla indicando la maggiore o minore età

/*
1. LEGGERE IL CAMPO NOME E MEMORIZZARLO
2. LEGGERE IL CAMPO ANNO E MEMORIZZARLO
3. CALCOLARE ETA'
4. VERIFICA LA MAGGIORE O MINORE ETA'
5. SCRIVERE NELL'HTML
6. CANCELLARE IL FORM


EVENTO SCATENANTE 
click verifica

VARIABILI GLOBALI 
nome
anno
stato (maggiorenno o minorenne)
*/

let nome;
let anno;
let eta;
let stato;
let errore = document.getElementById('errore');

function eventHandler() {     //delinea l'ordine delle funzioni in successione
    leggiForm();
    if (anno >=1900 && anno <=2023)  {
        errore.innerHTML = '&nbsp;';
    calcolaEta();
    verifica();
    scrivi();
    cancellaForm(); } else  { 
        errore.innerHTML= 'Attenzione! Compilare tutti i campi e inserire un numero tra 1900 e 2023';
        return;
    }
} 

function leggiForm() {
    nome = document.getElementById('nome').value;
    anno = document.getElementById('anno').value;
    console.log(nome,anno);
}

function calcolaEta() {
    eta = 2023 - anno;
    console.log(eta);
}

function verifica() {
    stato = (eta >= 18) ? 'maggiorenne' : 'minorenne';
    console.log(stato);
}

function scrivi() {
    document.getElementById('mioNome').innerHTML = 'Ciao ' + nome;
    document.getElementById('miaVerifica').innerHTML = 'La tua età è ' + eta + ' anni; sei ' + stato;
}

function cancellaForm() {
    document.getElementById('nome').value= '';
    document.getElementById('anno').value= '';
}


