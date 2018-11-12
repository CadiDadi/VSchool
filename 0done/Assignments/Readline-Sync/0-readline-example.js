
// https://www.npmjs.com/package/readline-sync
// https://coursework.vschool.io/string-manipulation/
// https://www.npmjs.com/package/readline-sync

var ask = require('readline-sync')

// Create a new directory
// create the package.json:      `npm init -y` 
// install needed dependencies:  `npm i readline-sync` OR npm i --save readline-sync (this saves it to package.json so that when anyone downloads/gets your project it automatically installs all the dependencies required)
// require needed package and save it in a variable

var randomNum = Math.random() * 100
var roundedDown = Math.floor(randomNum)
console.log(randomNum)

var rNum = Math.ceil(Math.random() * 100)
console.log(rNum)

var name = ask.question("May I have your name? ")
var age = ask.question("My I also have your age? ")

var answer = ask.keyInYN("Is the sky blue? ") 
if(answer === true){
    console.log(" I knew it")
} else {
    console.log("you are wrong")
}
console.log(answer)


// for calculator:
// need use something like this:
    //         Let the user choose an item from a list:
    //         var readlineSync = require('readline-sync'),
    //         animals = ['Lion', 'Elephant', 'Crocodile', 'Giraffe', 'Hippo'],
    //         index = readlineSync.keyInSelect(animals, 'Which animal?');
    //         console.log('Ok, ' + animals[index] + ' goes to your room.');