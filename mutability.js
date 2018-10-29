// Javascript Datatypes & Mutability 

    // Primitive
        // - Number
        // - Boolean
        // - String
        // - undefined
        // - null
        // - NaN
 
    // Reference 
        // - Array
        // - Object
        // - Function

// Mutability //
    // Primitive datatypes are immutable
    // Reference datatypes are mutable

    // primitive values exist, we simply point at them with variables
        // var myNumber = 42
        // myNumber = 43    // variable now points to 43 instead of 42
        // console.log(myNumber)

        // var str = "cat"
        // console.log(str)
        // str[0] = "h"
        // console.log(str) // returns cat as "cat" is primitive type and cannot be changed

    // reference values are mutable, aka they can be changed
        // var person = {
        //     name: "Rick",
        //     age: 78,
        //     catchPhrase: "Wubba Lubba dub dub",
        //     sayCatchPhrase: function(){
        //         console.log(`${this.catchPhrase}`)
        //     }
        // }

        // console.log(person)
        // person.age++
        // console.log(person) // Age in the object increases by 1
    
        // var arr = ["c", "a", "t"]
        // console.log(arr)
        // arr[0] = "h"
        // console.log(arr)
    

// Pass by Reference vs Pass by Value
    // Primitive values are passed by value
    // Reference values are passed by reference

    // Pass by value example
        var a = 1
        var b = a
            a = 2
        // console.log(b) // 1



    // Pass by Reference example:
        var person = {
            name: "Rick",
            age: 12
        }

        console.log(person)
        var c = person
        c.age++
        console.log(person) 
        /* 
            though the mutation was directed on 
            the variable 'c', that variable was referencing the same
            object that 'person' is referencing, so they both
            reflect the changes
        */
