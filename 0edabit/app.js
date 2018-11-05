// Resources:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
/////////////////////////////////////////////////

// Find the Index
    // Create a function that takes an array and a string as arguments and return the index of the string.
function findIndex(arr, str) {
	return arr.indexOf(str)
}
console.log(findIndex(['abc', 'ghj', 'banana', 'grape'], 'grape')) // ➞ 3
console.log(findIndex(["a", "g", "d"], "d")) // ➞ 2
console.log(findIndex([1,2,3],2)) // ➞ 1

// Is the Number Less than or Equal to Zero?
function lessThanOrEqualToZero(num) {
    if(num <= 0){
        return 'true'
    }
    else{
        return 'false'
    }
}
console.log(lessThanOrEqualToZero(-3)) // ➞ true
console.log(lessThanOrEqualToZero(3)) // ➞ false

// Return the Next Number from the Integer Passed
    // Create a function that takes a number as an argument, increments the number by +1 and returns the result.
function addition(num) {
    return ++num 
    // return num + 1 //also works
}
console.log(addition(2)) // ➞ 3
console.log(addition(3)) // ➞ 4

// Find the Amount of Digits a Number Has
    // Create a function that takes a number as an argument and returns the amount of digits it has.
function findDigitAmount(num) {
	return num.toString().length
}
console.log(findDigitAmount(123))
console.log(findDigitAmount(12345))

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

// Convert Number to Corresponding Month Name
function month_name(num) {
	let monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
	let month = monthArray[num - 1]
	return month
}
console.log(month_name(2)) // ➞ February
console.log(month_name(5)) // ➞ May








