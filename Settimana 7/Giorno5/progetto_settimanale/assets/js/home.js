const url = "https://striveschool-api.herokuapp.com/api/product/"
const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4MTNhNWMwNTgzNTAwMTg1MjJjOGQiLCJpYXQiOjE3MDIzNzI4MDAsImV4cCI6MTcwMzU4MjQwMH0.9DiGLCYaUZa8DNIFWUBdnxWV5AS2HH5gRspW4s8-O0A"
const header = {
    "Authorization": token,
    "Accept": "application/json",
    "Content-Type": "application/json"
    }

let products = []

async function getData() {
    let response = await fetch (url, {
        headers: header,
    })
    let result = await response.json();
    products = result   
    createCard(products)

}
window.onload = getData()



function createCard(products) {
    const card = document.getElementById('cardDiv')
    card.innerHTML = ''

    products.forEach(product => {
        let newCard = `
        <div class="card m-5" style="width: 18rem;">
        <img src="${product.imageUrl}" class="card-img-top w-100" alt="product image">
        <div class="card-body">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text">Marca: ${product.brand}</p>
          <p class="card-text">Caption: ${product.description}</p>
          <p class="card-text">Prezzo: ${product.price}</p>
          <div class="card-footer d-flex justify-content-between">
          <button type="button" class="btn btn-warning"> <a href="./back.html?id=${product._id}">Modifica</a> </button>
          <button type="button" class="btn btn-primary" )"><a href="./details.html?id=${product._id}" class="btn btn-primary">Dettagli</a></button>
      </div>
        </div>
      </div>
        `
        card.innerHTML += newCard;
    });
}



