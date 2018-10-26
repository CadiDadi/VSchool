


// Make a function that takes a string and 
// returns that string reversed
// Input: "Hello World"
// Output: "dlroW olleH"
let reverseStr = function(str) {
    // var arr = str.split('')
    // var reversedArr = arr.reverse()
    // return reversedArr.join('')

// Method Chaining (alternate way to write this):
    return str.split('').reverse().join('')
}
console.log(reverseStr("Hello World")) // "dlroW olleH""

// Input: "3"
// Output: true
// Input: "three"
// Output: false
let isNum = function(str) {
    if(typeof str === "string"){

    }
    if(parseInt(str)){
        return true
    } else {
        return false
    }
    return parseInt(str) ? true : false
}
console.log(isNum("3")) // true
console.log(isNum("three")) // false

// is even? true or false
var isEven = function(num) {    
    if(num % 2 === 0){
        return true
    } else {
        return false
    }
    // return num % 2 === 0
}
console.log(isEven(2)) // true
console.log(isEven(3)) // false

// Input: [5, -10, 10, 20]
// Output: 6.25
let averageArray = function(arr) {
  // sum of all nums in the array
  var count = 0
    for(var i = 0; i < arr.length; i++){
        count += arr[i]
    }
  // divide by the amount of items in array
    return count / arr.length
}
console.log(averageArray([1, 2, 3, 4]))

// Input: ["a", "b", "c"] and [1, 2, 3]
// Output: ["a", 1, "b", 2, "c", 3]
let combineArrays = function(arr1, arr2) {
    var result = []
    for(var i = 0; i < arr1.length; i++){
        result.push(arr1[i], arr2[i])
    }
    return result
}
console.log(combineArrays(["a", "b", "c"],  [1, 2, 3]))