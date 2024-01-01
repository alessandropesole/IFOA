
const arrayTombola = []
const arrayNumeriEstratti = []
for (let i=1; i<77 ; i++) {
    arrayTombola.push(i)
}
console.log(arrayTombola);


function popolateTombola() {
const containerTombola = document.getElementById('containerTombola')
arrayTombola.forEach((el) => {
    let numberCard = `
    <div class="col-2 text-center numberContainer"  style="border:1px solid black">
    <span class="numeri" id="number">${el}</span>
    </div>
    `
    containerTombola.innerHTML += numberCard
}) 
}



function extractNumber () {
   
    const number = document.querySelectorAll('.numberContainer');
    const bottone = document.getElementById('bottone');
    bottone.addEventListener('click', () => {
        const randomNumber = Math.floor(Math.random() * 76) +1;
        arrayNumeriEstratti.push(randomNumber);
        number.forEach((el) => {
            if (parseInt(el.innerText) == randomNumber) {
                el.classList.add('selectedNumber')
        }});
        arrayTombola.forEach((el) => {
            if(el === randomNumber) {
                arrayTombola.splice(randomNumber, 1) [0]
            }
        })
        console.log(arrayTombola);
        return arrayNumeriEstratti
    })
    
    
}

window.onload = () => {
    popolateTombola()
    extractNumber()
}