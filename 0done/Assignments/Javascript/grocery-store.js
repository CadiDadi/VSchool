
var shopper = {
    firstName: 'Darth',
    lastName: 'Vader',
    age: 177,
    human: false,
    groceryCart: ['milk', 'bread', 'eggs'],
    whosGroceryList: function(who) {
        console.log(who + this.firstName + " " + this.lastName + ":")
    }
}
console.log()
shopper.whosGroceryList("Here's your shopping list ")
console.log(shopper.groceryCart)




