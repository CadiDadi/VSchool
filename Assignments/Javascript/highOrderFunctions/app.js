
// https://coursework.vschool.io/higher-order-functions/

/// there are additional functions in here

// assignments
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

