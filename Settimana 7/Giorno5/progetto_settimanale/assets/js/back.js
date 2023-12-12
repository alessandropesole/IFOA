const url = "https://striveschool-api.herokuapp.com/api/product/"
const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4MTNhNWMwNTgzNTAwMTg1MjJjOGQiLCJpYXQiOjE3MDIzNzI4MDAsImV4cCI6MTcwMzU4MjQwMH0.9DiGLCYaUZa8DNIFWUBdnxWV5AS2HH5gRspW4s8-O0A"
const header = {
    "Authorization": token,
    "Accept": "application/json",
    "Content-Type": "application/json"
    }

let products = []

async function sendData() {
    const newRecord = {
        "name": document.getElementById('nameProduct').value,
        "description": document.getElementById('descriptionProduct').value,
        "brand": document.getElementById('brandProduct').value,
        "price": document.getElementById('priceProduct').value,
        "imageUrl": document.getElementById('urlImage').value,
    }
    
    let response = await fetch (url, {
        method: "POST",
        headers: header,
        body: JSON.stringify(newRecord)
    })
console.log(response.json());
   
}








