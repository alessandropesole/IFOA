
class ControlloNumeri {
    constructor(numeri = []) {
        if (Array.isArray(numeri)) {
            this.numeri = numeri;
        } else {
            console.log('non è un array');
        }
    }

    controllaEStampa() {
            this.numeri.forEach(numero => {
                if (numero % 3 === 0 && numero % 5 === 0) {
                    console.log("paperino");
                }
                else if (numero % 5 === 0) {
                    console.log('pluto');
                }
                else if (numero % 3 === 0) {
                    console.log('pippo');
                } else {
                    console.log(numero.toString());
                }
                   
                });
        
    }
}


const arrayNumeri = [2, 3, 6, 5, 8, 9, 10, 15];
const check = new ControlloNumeri(arrayNumeri);
check.controllaEStampa();


const main = document.getElementById('main');
const div1 = document.getElementById('child1');
const div2 = document.getElementById('child2');
const div3 = document.getElementById('child3');

main.addEventListener('click', () => {
    main.style.backgroundColor = 'green';
});

div1.addEventListener('click', (event) => {
    event.stopPropagation()
    div1.style.backgroundColor ='yellow';
});


div2.addEventListener('click', function (event) {
    if (div2.style.backgroundColor === 'red') {
        div2.style.backgroundColor = 'blue';
    } else {
        div2.style.backgroundColor ='red';
}
event.stopPropagation();
});

div3.addEventListener('click', function () { 
    div3.style.backgroundColor = 'purple';
})
