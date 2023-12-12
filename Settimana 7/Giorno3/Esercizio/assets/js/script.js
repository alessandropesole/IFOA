const url = 'https://striveschool-api.herokuapp.com/books'
fetch (url)
.then(response => response.json()
.then (data => populateHomePage(data)))