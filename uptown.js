
// https://coursework.vschool.io/uptown-function-you-up/

// Create three functions using the provided array as an argument.

var lyrics = ["This", "hit", "that", "ice", "cold", 
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", 
              "myself", "I'm", "so", "pretty"];
              
// First function: Prints the contents of the array, lyrics, to the console as a string, including necessary spaces.

/////////convert var into a function//////////
///var
// var stringified = lyrics.toString()
// console.log(stringified)
// ///function
// function convert() {
//     var stringified = lyrics.toString()
//     console.log(stringified)
//     }
// convert()
//////////////////////////////////////////

// Second function: Prints lyrics backwards ("pretty so I'm myself kiss Gotta...").

function reverseString(str) {
    return lyrics.split("").reverse().join("");
}
reverseString(lyrics)

function reverseString(str) {
    return str.split("").reverse().join("");
}
reverseString("hello");

// Third function: Prints every other word to the console, (e.g. "this that cold Pfeiffer...").


// Optional Challenge

// Fourth function: Prints all of lyrics, but every two words are switched ( "hit This ice that Michelle cold...").


// Fifth function: Prints lyrics in a random order.

