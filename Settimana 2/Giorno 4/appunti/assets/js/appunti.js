let numero1;
let numero2;
let operazione;

function eventHandler() {
    numero1 = document.getElementById('numero1').value;
    numero2 = document.getElementById('numero2').value;
    operazione = document.getElementById('operaazione').value;
    if(controlla)() {
        calcola();
    } else {
        return;
    }
}

function controlla() {
    if (numero === '' || numero2 === '' || operazione === '') {
        alert('inserire i due numeri e scegliere un\')
    }
}