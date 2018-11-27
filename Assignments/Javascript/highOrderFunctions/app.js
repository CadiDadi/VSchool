
// https://coursework.vschool.io/higher-order-functions/

/// there are additional functions in here

// assignments
        // https://coursework.vschool.io/array-filter-exercises/
        // https://coursework.vschool.io/array-reduce-exercises/
        // https://coursework.vschool.io/array-sort-exercises/
// extra credit
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



//////// array filters//////////////////////////
// https://coursework.vschool.io/array-filter-exercises/

//notes
    // var arr2 = [1, 2, 3, 4, 5, 6]
    // var filteredArray = arr2.filter(function(item){
    //                         if(item % 2 === 0){
    //                             return item
    //                         }
    //                     })
    // console.log(filteredArray)  // returns [2, 4, 6]

    // Use the built-in array method .filter() to solve all of these problems

    // 1) Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
    
    // a)
        // function BiggerElements(val){
        //  return function(value, index, array){
        //  return (value >= val)
        //     }
        // }
        // var result = [11, 45, 4, 31, 3, 99, 64, 10].filter(BiggerElements(10))
        // console.log(result)

    // b)
            // function fiveAndGreaterOnly(arr) {

            // }
            // fiveAndGreaterOnly([3, 6, 8, 2]); /// [6, 8]
            // function fiveAndGreaterOnly(arr) {
            //     var fivePlus = arr.filter(function(item){
            //         if(item >= 5){
            //             console.log(item)
            //         }
            //     })
            // }
            // fiveAndGreaterOnly([3, 6, 8, 9, 2]); /// [6, 8]

    // 2) Given an array of numbers, return a new array that only includes the even numbers.
            // function abc(xyz){
            //     var filteredArray = xyz.filter(function(item){
            //         if(item % 2 === 0){
            //             console.log(item)
            //         }
            //     })
            // }
            // // whatever in () of abc represents xyz
            // abc([1,2,3,48,8]) 
            // abc([33,44,66,77,99])

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
