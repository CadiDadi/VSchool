
// https://coursework.vschool.io/uptown-function-you-up/


// convert array to a string

var lyrics = ["This", "hit", "that", "ice", "cold", "myself", "I'm", "so", "pretty"];
              
/////////convert var into a function//////////
/// both these work ///
// var stringified = lyrics.toString()
// console.log(stringified)

function convertVarToAFunction() {
    var stringified = lyrics.toString()
    console.log(stringified)
    }
convertVarToAFunction()
//////////////////////////////////////////

// Second function: Prints lyrics backwards ("pretty so I'm myself kiss Gotta...").

// reverse a string
function reverseString(str1) {
    return str1.split("").reverse().join("")
}
console.log(reverseString("hello"))

// reverse an array
function reverseArray(){
    var arr = ["This", "hit", "that", "ice", "cold", "myself", "I'm", "so", "pretty"]
    console.log((arr))
    console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
    var new_arr = arr.reverse()
    console.log((new_arr))
}
reverseArray()


// Print every other word to the console
var arr3 = ["This", "hit", "that", "ice", "cold", "myself", "I'm", "so", "pretty"]
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// filter out all elements that are located at an even index in the array.
let x = arr3.filter((element, index) => {
  return index % 2 === 0
})
console.log(x) 
// [1, 3, 5, 7, 9]

// Optional Challenge

// Fourth function: Prints all of lyrics, but every two words are switched ( "hit This ice that Michelle cold...").


// Fifth function: Prints lyrics in a random order.

