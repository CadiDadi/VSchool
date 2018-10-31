// https://coursework.vschool.io/letter-frequency/

// Warm up
// Find the frequency of all characters in a given word or phrase, and print them to the console.

// Contain the characters and their counts within an object.
// Each character will be its own key
// Each value will be the character's frequency.
// Example:

// Const phrase = 'slimy smelly solution';

// arrayIndex = (str) => {
// // Manipulation of str to create an object
// }

// console.log(arrayIndex(phrase));

// //Output: { s: 3, l: 4, i: 2, m: 2, y: 2, ' ': 2, e: 1, o: 2, u: 1, t: 1, n: 1 }

// Hint:

// function hint() {
//     const obj = {}
//     obj["s"] = 1
//     return obj
// }

// console.log(hint());

// //Output: {s: 1}
// Extra Credit

// Output the original string with all duplicate characters removed (i.e. "slimy eoutn").
// Output the same object, sorted by frequency.

function getFrequency(string) {
    var freq = {};
    for (var i=0; i<string.length;i++) {
        var character = string.charAt(i);
        if (freq[character]) {
           freq[character]++;
        } else {
           freq[character] = 1;
        }
    }
    return freq;
};
console.log(getFrequency('slimy smelly solution'))