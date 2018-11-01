
// https://coursework.vschool.io/higher-order-functions/

/// there are additional functions in here

// assignments
        // https://coursework.vschool.io/array-map-exercises/
        // https://coursework.vschool.io/array-filter-exercises/
        // https://coursework.vschool.io/array-reduce-exercises/
        // https://coursework.vschool.io/array-sort-exercises/
// extra
        // https://coursework.vschool.io/settimeout-setinterval/

/////////////////////////////////////////////

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
    // var arr = [1, 2, 3, 4]
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

    // var arr2 = [1, 2, 3, 4, 5, 6]
    // var filteredArray = arr2.filter(function(item){
    //                         if(item % 2 === 0){
    //                             return item
    //                         }
    //                     })
    // console.log(filteredArray)  // returns [2, 4, 6]


///////// map exercises /////////////////////////
// https://coursework.vschool.io/array-map-exercises/

// Use the built-in .map() method on arrays to solve all of these problems

//////done/////  1) Make an array of numbers that are doubles of the first array
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

///////done/////// 2) Take an array of numbers and make them strings
// function stringItUp(arr){
//     var stringified = arr.map(function(item){
//         return item.toString()
//     })
//     console.log(stringified) //returns ["2", "5", "100"]
// }
// stringItUp([2, 5, 100]); 

//////done///// 3) Capitalize first letter of each of an array of names & turn rest into lower case
function capitalizeNames(arr){
    var capitalized = arr.map(function(item){
        return item.charAt(0).toUpperCase() + item.substr(1).toLowerCase()
    })
    console.log(capitalized) //returns ["John", "Jacob", "Jingleheimer", "Schmidt"]
}
capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]); 

/////////// 4) Make an array of strings of the names
function namesOnly(arr){
    ///enter code here
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
// ["Angelina Jolie", "Eric Jones", "Bob Ziroll"]

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


////////// 5) Make an array of strings of the names saying whether or not they can go to The Matrix

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
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]) 
// // ["Angelina Jolie can go to The Matrix", 
// // "Eric Jones is under age!!", 
// // "Bob Ziroll can go to The Matrix"]

// 6) Make an array of the names in <h1>s, and the ages in <h2>s

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
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]) 
// // ["<h1>Angelina Jolie</h1><h2>80</h2>", 
// // "<h1>Eric Jones</h1><h2>2</h2>", 
// // "<h1>Bob Ziroll</h1><h2>100</h2>"]


//////// array filters//////////////////////////
// https://coursework.vschool.io/array-filter-exercises/

//notes
    var arr2 = [1, 2, 3, 4, 5, 6]
    var filteredArray = arr2.filter(function(item){
                            if(item % 2 === 0){
                                return item
                            }
                        })
    console.log(filteredArray)  // returns [2, 4, 6]

    // Use the built-in array method .filter() to solve all of these problems

    // 1) Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
    
    function fiveAndGreaterOnly(arr) {
        
    }
    fiveAndGreaterOnly([3, 6, 8, 2]); /// [6, 8]

    // 2) Given an array of numbers, return a new array that only includes the even numbers.
    function abc(xyz){
        var filteredArray = xyz.filter(function(item){
            if(item % 2 === 0){
                console.log(item)
            }
        })
    }
    // whatever in () of abc represents xyz
    abc([1,2,3,48,8]) 
    abc([33,44,66,77,99])


    // 3) Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length
    // function fiveCharactersOrFewerOnly(arr) {
    
    // }
    
    // fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"]) // ["by", "dog", "wolf", "eaten"]
    // 4) Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.
    // function peopleWhoBelongToTheIlluminati(arr){
    
    // }
    
    // peopleWhoBelongToTheIlluminati([
    //     {
    //         name: "Angelina Jolie",
    //         member: true
    //     },
    //     {
    //         name: "Eric Jones",
    //         member: false
    //     },
    //     {
    //         name: "Paris Hilton",
    //         member: true
    //     },
    //     {
    //         name: "Kayne West",
    //         member: false
    //     },
    //     {
    //         name: "Bob Ziroll",
    //         member: true
    //     }
    // ])
    // 5) Filter out all the people who are not old enough to see The Matrix (younger than 18)
    // function ofAge(arr){
    
    // }
    
    // ofAge([
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














////////marcus notes///////

// var numbers = [1,2,3];

// var numTotal = numbers.reduce(function(total, num){
//     return total + num
// })

// console.log(numTotal)

// var sortedArray = [1,57,93,2,13];

// sortedArray.sort(function(a,b){
//   //a - b sorts low to high
//   //b - a sorts high to low
//   return b - a
// })

// var sortedWords = ['dog', 'cat', 'ant', 'mouse']
// sortedWords.sort()

// console.log(sortedWords)


// var numbers = [12,54,3,62,19,79];

// var foundNumber = numbers.find(function(number){
//   return number < 5
// })
// console.log(foundNumber)

// var numbers = [13,30,5,62,18,53]

// var someNum = numbers.some(function(number){
//   return number > 100
// })
// console.log(someNum)

// var everyNum = numbers.every(function(number){
//   return number < 100 
// })
// console.log(everyNum)



