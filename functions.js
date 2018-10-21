
// What is a function? 
//     - a javaScript procedure
//     Ex: Fridge, oven, toaster

// Defining a function 
//     - Declaration
//         function nameOfFunction (){
//             console.log('this is a function declaration')
//         }
//     - Expression
//         var nameOfFunction = function (){
//             console.log('this is a function expression')
//         }

// Key Parts 
//     - function keyword
//     - () hold parameters
//     - name of the function 
//     - {} hold the code block

//     function name (parameters){
//         code block
//     }

//call a function - write the name of the function and () after: 
//    nameOfFunction()

// inside a function code block, whenever you RETURN something, it will STOP and not run anything else within a function (so put return statement at the end of the code block)
    //this will console log AND return peanut butter
        // function makePB () {
        //     console.log('peanut butter')
        //     return 'peanut butter'
        // }
    //this will ONLY return peanut butter
        // function makePB () {
        //     return 'peanut butter'
        //     console.log('peanut butter')
        // }

// two types of functions - declarations & expressions

    // javascript reads TOP to BOTTOM, however:
    // hoisting - function declarations get HOISTED to the TOP and get read first (expressions DO NOT). so when calling a function:
        // -DECLARATIONS - can call them from anywhere in page, because the Declarations get Hoisted (read first)
                // declaration - can be hoisted
                    // nameOfFunction() //can call it before the function declaration
                    // function nameOfFunction() {
                    //     console.log('this is a function declaration')
                    // }
        // -EXPRESSIONS - do not get hoisted, so they must be CALLED AFTER then are written (they must be below the expression in the code)
                // expression - cant be hoisted
                    // var nameOfFunction2 = function() {
                    //     console.log('this is a function expression')    
                    // } 
                    // nameOfFunction2()  //must be called after the function expression is written

// nameOfFunction(arguments)

// function toaster (slot1, slot2){
//     console.log(slot1 + ' and ' + slot2)
// }
// var toastedItems = toaster('bread', 'waffle')
// console.log(toastedItems)

// parameters are like slots in a toaster
// arguments are the stuff in the slots, i.e. bread, waffles, bagels

// function makePB () {
//     console.log('peanut butter')
//     return 'peanut butter'
// }

// function makeJelly (type) {
//     console.log(type + ' jelly')
//     return type + ' jelly'
// }

// function makeSandwich () {
//     return 'this is a ' + makePB() + ' and ' + makeJelly('grape') + ' sandwich'
// }

// console.log(makeSandwich())


/////////////////////
//Assignment
//https://coursework.vschool.io/exercise-functions/

    // Write a function that accepts two numbers as parameters, and returns the sum.
        function adding (zz,yy) {
            console.log(zz + yy)
        }
        var added = adding(2,3)

    // Write a function that accepts three numbers as parameters, and returns the largest of those numbers.
        console.log(Math.max(1, 3, 2));
        /////////
        // function large(1,3,2){

        // }
    // Write a function that accepts one number as a parameter, and returns whether that number is even or odd. (Return the string "even" or "odd");
        // function evenOdd(even1) {

        // }
        function isEven(x) {
            //return even if even
            if (x % 2 === 0) {
                console.log('even')
            }
            //return odd otherwise
            else {
                console.log('odd')
            }
        }
        var even = isEven(4)
        var odd = isEven(3)
    // Write a function that accepts a string as a parameter.  
        function string1(myString) {
            if (string1.length <= 20) {
                console.log('20 characters or less')
            }
            else {
                console.log('more than 20 characters')

            }
            // If the string is more than twenty characters long, return the first half of the string.
            if (myString.length % 2 == 0) {
                console.log(myString.slice(0, myString.length / 2))
            }            
            // If the length of the string is less than or equal to twenty characters long, return the string concatenated with itself (string + string).
            // console.log(string1 + string1)
            
            
            var twentyOrLess = string1('scott')
            var overTwenty = string1('650 salt lake city, utah 84116')



// Optional Challenge

    // Write a function that accepts a number ‘n’ as a parameter. Then print the first ‘n’ Fibonacci numbers and return their sum.

    // Write a function to solve the quadratic equation. (It should accept three numbers as parameters, and then return an array with the resulting x values.)

    // Write a function that accepts a string as a parameter. Return the most frequently occuring letter in that string.
    
