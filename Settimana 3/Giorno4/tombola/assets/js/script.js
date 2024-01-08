
const arrayTombola = []
const arrayUserCards = []

for (let i=1; i<77 ; i++) {
    arrayTombola.push(i)
}

for (let i = 1; i<24; i++) {
    const randomCard = Math.floor(Math.random() * 76) + 1 
    arrayUserCards.push(randomCard)
}

function populateUserCard() {
    const row = document.getElementById('rowUsers')
    arrayUserCards.forEach((el) => {
        const userCard = `
        <div class="col-2 containerNumeriUser">
        <span class="numeriUser">${el}</span>
        </div>
        `
        row.innerHTML += userCard
    })
}

function populateTombola() {
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
    const userNumbers = document.querySelectorAll('.containerNumeriUser .numeriUser')
    const number = document.querySelectorAll('.numberContainer');
    const bottone = document.getElementById('bottone');
    bottone.addEventListener('click', () => {
        let randomNumber = Math.floor(Math.random() * 77);
       
        number.forEach((el) => {
            if (parseInt(el.innerText) === randomNumber) {
                el.classList.add('selectedNumber');     
        }});    
        userNumbers.forEach((el) => {
            if (parseInt(el.innerText) === randomNumber) {
                el.classList.add('selectedNumber')   
        }});
        console.log(arrayTombola);
        arrayTombola.splice(randomNumber, 1)[0];
        })
        
}

window.onload = () => {
    populateTombola()
    extractNumber()
    populateUserCard()
}