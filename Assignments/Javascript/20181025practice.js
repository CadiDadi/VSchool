
// 1. Make a function that takes a string and returns that string reversed
        //method 1
        let reverseStr = function(str) {
            // var arr = str.split('')
            // var reversedArr = arr.reverse()
            // return reversedArr.join('')
        // method 2 - Chaining (alternate way to write this):
            return str.split('').reverse().join('')
        }
        console.log(reverseStr("Hello World")) // "dlroW olleH""
        console.log('-------')

// 2. output whether something is a number
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
        console.log('-------')

// 3. is even? true or false
        var isEven = function(num) {    
            if(num % 2 === 0){
                return true
            } else {
                return false
            }
        }
        console.log(isEven(2)) // true
        console.log(isEven(3)) // false
        console.log('-------')

// 4. output the average of the numbers in an array
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
    console.log('-------')

// 5. combine arrays
    let combineArrays = function(arr1, arr2) {
        var result = []
        for(var i = 0; i < arr1.length; i++){
            result.push(arr1[i], arr2[i])
        }
        return result
    }
    console.log(combineArrays(["a", "b", "c"],  [1, 2, 3]))