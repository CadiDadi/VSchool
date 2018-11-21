
// https://coursework.vschool.io/no-duplicates/
// http://coursework.vschool.io/if-statements/

// Given a string, your task is to remove any duplicate letters. Any letters removed should be added to another string called "duplicates".

// Example:

// var input = "bookkeeper larry";

// No duplicates: "bokepr lay"
// The Extras: "okeerr"



// Create variable that stores the string without duplicates.
var string = 'dont run with scissors'
var uni = [...new Set(string)]
console.log(uni)
var x = uni.join()
console.log(x)
var y = x.replace(/,/g,'');
console.log(y)
// Create a variable that stores the letters removed.
var compar= (string, diffBy) => string.split(diffBy).join('')
var diff = compar(string, y)
console.log(diff)


////
function getDifference(a, b) {
    var i = 0;
    var j = 0;
    var result = "";

    while (j < b.length) {
        if (a[i] != b[j] || i == a.length)
            result += b[j];
        else
            i++;
        j++;
    }
    return result;
}
console.log(getDifference("test fly", "test xy flry"));

//////
// const A = "The quick brown fox"
// const B = "The quick brown fox jumps over the lazy dog."
// const getDiff = (string, diffBy) => string.split(diffBy).join('')
// const C = getDiff(B, A)


// Have the function return the string without duplicate letters

// Create another function that returns the letters removed.


// Extra Credit:

// Create a function that randomly removes a letter.
// Create a function that scrambles the original string.
// Create a function using regular expressions that remove all vowels.




// function:

// function name(parameter1, parameter2, parameter3) {
//     code to be executed
// }



