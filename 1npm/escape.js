
// https://coursework.vschool.io/escape-room/


//////// DEPENDENCIES - TO WORK IN YOUR JS FILE//////////
// // when you install a dependency, you have to REQUIRE IT at top of page:
// var readline = require('readline-sync')
// // AND you have to reference it within JS code BY NAME (readline):
// var age = readline.question("My I also have your age? ")
// var answer = readline.keyInYN("Is the sky blue? ") 
////////////////

var readlineSync = require('readline-sync')

console.log("\n Greetings Traveler! \n")
var userName = readlineSync.question('May I have your name? ')
//these two do the same thing, 1st one is better. Backticks!
console.log(`\n Hi ${userName}`)
console.log('Hi ' + userName)

var hasWon = false
var isDead = false
while(!hasWon && !isDead){
    var actions = ['open door', 'find key', 'put hand in hole']
    var index = readlineSync.keyInSelect(actions, 'What do you want to do?')
    if (index === 0) {
        hasWon = true
        console.log('You Won') 
    }
    else if (index === 1) {
        hasWon = true
        console.log('You Won')
    }
    else if (index === 2) {
        hasWon = true
        console.log('Your Dead')
    }
    else {
        console.log('Sorry, ' + index + ' is not valid, please try again')
    }
}











