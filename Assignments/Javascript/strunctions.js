//https://coursework.vschool.io/strunctions/

// Strunctions
// 28 AUGUST 2017
// "It's like a function but for strings!" - Dan Hitt

// Let's Practice String Methods.

// Implement all of the listed String Methods below using at least 3 unique Functions.

// String Methods

// .concat()        xx
// .indexOf()       xx
// .lastIndexOf()   xx
    //The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.
// .match()
    // The match() method retrieves the matches when matching a string against a regular expression.
// .replace()       xx
// .slice()         xx
// .split()         xx
// .toLowerCase()   xx
// .toUpperCase()   xx
// .substr()        xx

// .concat()        
// .toLowerCase()   
// .toUpperCase()   
function Combine(word1,word2) {
    return word1.toLowerCase().concat(word2.toUpperCase())
}
console.log(Combine('Fun','DIp'))

// .indexOf()       
function myIndexOf(word3) {
    return word3.indexOf('a')
}
console.log(myIndexOf('my car'))

// .lastIndexOf()
var animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo']
console.log(animals.lastIndexOf('Dodo')) // returns 3
console.log(animals.lastIndexOf('Tiger')) // returns 1

//slice
function mySlice(sliced) {
    //slice at 1/2
    console.log(sliced.slice(0, sliced.length / 2))
    //slice at 1/3
    console.log(sliced.slice(0, sliced.length / 3))
    //slice at index position 2
    console.log(sliced.slice(2))
    //slice a segment from index 6-8
    console.log(sliced.slice(6,8))
    //splice starts from the end
    console.log(sliced.slice(-7))
}
var slice1 = mySlice('slice me in half')

// .split()
var str = '650 W South Temple'
var street = str.split(" ", 2)
console.log(street)

function func() { 
    var str = '650 W South Temple'
    var array = str.split(" ") 
    return array  
} 
console.log(func())

function schoolAddress() {
    var parking = '150 State St'
    var wherePark = parking.split(" ", 2)
    return wherePark
}
console.log(schoolAddress())

// .match()
//g = global, so finds all of the instances it matches
//i = case sensitive search
//regexp - we wont use this much, but good to know https://coursework.vschool.io/demystifying-regex/

// returns 'and', 'and'
function matchSwitch (str, word) {
    var andCount = str.match(/and/g)
    console.log(andCount)
}
matchSwitch('bird and cow and fox', 'and')

////match()
var paragraph = 'The quick brown fox jumped over the lazy dog. It barked.';
var regex = /[A-Z]/g;
var found = paragraph.match(regex);
console.log(found); // expected output: Array ["T", "I"]

////match()
var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
var regexp = /[A-E]/gi;
var matches_array = str.match(regexp);

console.log(matches_array);  // ['A', 'B', 'C', 'D', 'E', 'a', 'b', 'c', 'd', 'e']


// .replace()
//returns money, goodbye
var myReplace = 'hello goodbye'
var replaced = myReplace.replace('hello', 'money')
console.log(replaced)


// .substr()   NOT WORKING
var str = 'Mozilla';
console.log(str.substr(1, 2));
// expected output: "oz"
console.log(str.substr(2));
// expected output: "zilla"
