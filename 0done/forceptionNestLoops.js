
// https://coursework.vschool.io/exercise-loops/
// https://coursework.vschool.io/nested-loops/
// https://coursework.vschool.io/for-within-for-within-for/

// Exercise - Loops

// Loops help you reduce your lines of code when performing a task multiple times. Here you will learn how to use some of the different looping structures. Beware of infinite loops!

function sString(mString){
    return 'Scott'
}
console.log(sString() + ' Ashcroft')
////////
function makePB () {
    console.log('peanut butter')
    return 'peanut butter'
}
function makeJelly (type) {
    console.log(type + ' jelly')
    return type + ' jelly'
}
function makeSandwich () {
    return 'this is a ' + makePB() + ' and ' + makeJelly('grape') + ' sandwich'
}
console.log(makeSandwich())

// Write a function that accepts a string as input.
// Write a loop to print out each letter of a string individually.

//method 1
function scottString(myString){
    var myString = 'scott'
for (var i = 0; i < myString.length; i++) {
    console.info(myString[i])
  }
}
scottString()

//method 2
var str = 'crypto'
for (var i = 0; i < str.length; i++) {
    console.log(str.charAt(i))
}

// With ES6
[...str].forEach(c => console.log(c))

// With ES5
for (var x = 0, c=''; c = str.charAt(x); x++) { 
    console.log(c) 
}

// ES5 without the for loop:
str.split('').forEach(function(c) {
    console.log(c);
})

// Write a function that accepts a string and a single character as inputs. Write a loop that iterates over the string, and prints the position of the first occurrence of the specified character. If the character is not found, tell that to the user.

// function single(string1, char3){
//     var string1 = 'tacos'
//     var char3 = 
// }
// console.log(single())

// String indexOf() : This method returns the index within this string of the first occurrence of the specified character or -1, if the character does not occur.
// Syntax:
// public int indexOf(int ch )
// Parameters:
// ch : a character.
 
function findAt(){
        // Initialising String 
        var gfg = new String("Welcome to geeksforgeeks")  
        console.log("Found the first 'g' at position : ")  
        // Initial index of 'g' will print 
        // prints 11 
        console.log(gfg.indexOf('z'))
} 
findAt()

// Write a function that accepts an array of numbers as a parameter. Quit the function when the number 42 is found. Let the user know if 42 is not found.


// Write a function that accepts 10 numbers in an array and then prints out the smallest number out of the ten without using Math.min()



///misc///












