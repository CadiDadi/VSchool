//https://coursework.vschool.io/strunctions/

// Strunctions
// 28 AUGUST 2017
// "It's like a function but for strings!" - Dan Hitt

// Let's Practice String Methods.

// Implement all of the listed String Methods below using at least 3 unique Functions.

// String Methods

// .concat()        xx
// .indexOf()       xx
// .lastIndexOf()
// .match()
// .replace()
// .slice()
// .split()
// .toLowerCase()   xx
// .toUpperCase()   xx
// .substr()


function lowerCombine(word1,word2) {
    return word1.toLowerCase().concat(word2.toUpperCase())
}
console.log(lowerCombine('Fun','DIp'))

function myIndexOf(word1) {
    return word1.indexOf('o')
}
console.log(myIndexOf('god'))
