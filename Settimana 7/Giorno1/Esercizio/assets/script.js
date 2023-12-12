class User {
    constructor (firstName, lastName, age, location) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.location = location
    
    }
     confrontaEta (otherUser) {
      if(this.age > otherUser.age) {
        return`${this.firstName} è più vecchio di ${otherUser.firstName}.`
        } else if(this.age < otherUser.age) {
        return`${this.firstName} è più giovane di ${otherUser.firstName}.`
        } else {
        return`${this.firstName} è della stessa età di ${otherUser.firstName}.`
  }
}
}

 casoA = new User('Lebron', 'James', '36', 'Los Angeles' )
 casoB = new User('Lamelo', 'Ball', '27', 'New Orleans' )
 casoC = new User('Kareem', 'Abdoul Jabar', '70', 'Detroit')
 console.log(casoA.confrontaEta(casoB))
 console.log(casoB.confrontaEta(casoC))
 console.log(casoC.confrontaEta(casoA))

