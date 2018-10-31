
// https://coursework.vschool.io/higher-order-functions/

//  **see exercises below

// Higher Order Array Methods   
    // Definition - A function that either:
        // - takes one or more functions as arguments
        // - returns a function

// The standard for loop
    // var arr = [1, 2, 3, 4]
    // for(var i = 0; i < arr.length; i++){
    //     console.log(arr[i]) //returns vertical list: 1 2 3 4
    // }

// BASE SYNTAX for Higher Order Array Methods:   arr.map(function(item){})

// .forEach() => loops over array letting you perform operations
    // ALWAYS RETURNS UNDEFINED so you WONT set it equal to a variable like this
        // ex:  var finalArr = arr.forEach()

    // var newArr = []
    // arr.forEach(function(num){
    //     newArr.push(num + 1)
    // })
    // console.log(newArr)  // returns [ 2, 3, 4, 5 ]
    

// .map() => loops over the array
    // Returns a NEW array with specified changes, you will want to save result in a variable:
        // ex:  var newArr = arr.map()

    // var arr2 = [1, 2, 3, 4, 5, 6]
    // var newArr = arr2.map(function(item){
    //                 if(item % 2 === 0){
    //                     return item
    //                 } 
    //             })
    // console.log(newArr) //returns [ undefined, 2, undefined, 4, undefined, 6 ]

// .filter() => loops over the array
    // Returns a NEW array with filtered criteria ONLY. you will want to save result in a variable:
        // ex:  var newArr = arr.filter()

    // var filteredArray = arr2.filter(function(item){
    //                         if(item % 2 === 0){
    //                             return item
    //                         }
    //                     })
    // console.log(filteredArray)  // returns [2, 4, 6]


///////// map exercises /////////////////////////
// https://coursework.vschool.io/array-map-exercises/

// Use the built-in .map() method on arrays to solve all of these problems

// 1) Make an array of numbers that are doubles of the first array
var arr = [1,2,3,4];
var newarr = arr.map(function(item){
    return item + 1;
})
console.log(newarr) // returns [ 2, 3, 4, 5 ]

function doubleNumbers(arr){
    var returnsTheDoubledNumbers = arr.map(function(item){
        return item * 2;
    })
    console.log(returnsTheDoubledNumbers) // returns [4, 10, 200]
}
doubleNumbers([2, 5, 100]); 

// 2) Take an array of numbers and make them strings
function stringItUp(arr){
    var stringified = arr.map(function(item){
        return item.toString()
    })
    console.log(stringified) //returns ["2", "5", "100"]
}
stringItUp([2, 5, 100]); 

// 3) Capitalize each of an array of names

function capitalizeNames(arr){
    var capitalized = arr.map(function(item){
        return item.charAt(0).toUpperCase() + item.substr(1).toLowerCase()
    })
    console.log(capitalized) //returns ["John", "Jacob", "Jingleheimer", "Schmidt"]
}
capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]); 

// 4) Make an array of strings of the names

////example////
// var countries = {
//     China: 1371980000,
//     India: 1276860000,
//     Pakistan: 190860000
// };
// var countriesFiltered = Object.keys(countries).filter(function(key) {
//     return countries[key]
// })
// .map(function(key) {
//     return countries[key]
// });
// console.log(countriesFiltered)  // Returns: [321786000, 255461700, 204873000, 190860000]

function namesOnly(arr){

}
namesOnly([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]) 
// returns ["Angelina Jolie", "Eric Jones", "Bob Ziroll"]

// 5) Make an array of strings of the names saying whether or not they can go to The Matrix

// function makeStrings(arr){

// }

// makeStrings([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]) 
// // ["Angelina Jolie can go to The Matrix", 
// // "Eric Jones is under age!!", 
// // "Paris Hilton is under age!!", 
// // "Kayne West is under age!!", 
// // "Bob Ziroll can go to The Matrix"]

// 6) Make an array of the names in h1s, and the ages in h2s

// function readyToPutInTheDOM(arr){

// }
// readyToPutInTheDOM([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]) 
// // ["<h1>Angelina Jolie</h1><h2>80</h2>", 
// // "<h1>Eric Jones</h1><h2>2</h2>", 
// // "<h1>Paris Hilton</h1><h2>5</h2>", 
// // "<h1>Kayne West</h1><h2>16</h2>", 
// // "<h1>Bob Ziroll</h1><h2>100</h2>"]


//////// array filters//////////////////////////
// https://coursework.vschool.io/array-filter-exercises/