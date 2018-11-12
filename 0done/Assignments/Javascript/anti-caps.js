

// https://coursework.vschool.io/anti-caps/

// Write a function called antiCaps, which accepts a string and manipulates it as follows.

// Uppercase characters will become lowercase.
    function toLower(letter) {
        return letter.toLowerCase()
    }
    console.log(toLower("LOWer")) // ➞ lower
// Lowercase characters will become uppercase.
    function toCaps(letter) {
        return letter.toUpperCase()
    }
    console.log(toCaps("uppEr")) // ➞ UPPER
// return true if a letter (or all letters) is uppercase, and false if the letter is lowercase:
    function isCaps(letter) {
    return letter === letter.toUpperCase()
    }
    console.log(isCaps("H")) // ➞ true
    console.log(isCaps("h")) // ➞ false
    console.log(isCaps("Hi")) // ➞ false
    console.log(isCaps("HI")) // ➞ true

// antiCaps('Hello') 
// antiCaps('racEcar') 
// antiCaps('bAnAnA') 
// // Output: 
// // hELLO
// // RACeCAR
// // BaNaNa

// Extra Credit:
// Have the function return double letters if originally uppercase
// Have the function return the letter and a symbol if originally lowercase.