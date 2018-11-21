// https://coursework.vschool.io/error-handling/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors

// try {
//     try_statements
//  }
//  [catch (exception_var_1 if condition_1) { // non-standard
//     catch_statements_1
//  }]
//  ...
//  [catch (exception_var_2) {
//     catch_statements_2
//  }]
//  [finally {
//     finally_statements
//  }]
//  try_statements
//  The statements to be executed.
//  catch_statements_1, catch_statements_2
//  Statements that are executed if an exception is thrown in the try block.
//  exception_var_1, exception_var_2
//  An identifier to hold an exception object for the associated catch clause.
//  condition_1
//  A conditional expression.
//  finally_statements
//  Statements that are executed after the try statement completes. These statements execute regardless of whether an exception was thrown or caught.

////////nate notes/////////
// var a = 1

// try {
//     // whatever code in here throws an error
//     if(a !== 0){
//         throw new Error("The variable a was not equal to 0")
//     }
// }

// catch(error) {
//     console.log(error)
// }

// // Run this code no matter what happens in the try and catch blocks
// finally {
//     console.log("I am running no matter what!")
// }

// "\n" (must be in quotes) makes a line break in console output

//example
      // function greeting(greetingType){
      //     if(typeof greetingType !== "string"){ 
      //       // if the statement is TRUE [greeting(greetingType) is NOT Equal (!==) to a string: greeting(4)], it will THROW THE ERROR, and output: 
      //               // 1. the error message: "\n\n You must... 
      //               // 2. the error
      //               // g
      //       // if the statement is FALSE, the ERROR IS NOT THROWN.
      //               // Examples:
      //                     // if change greetingType to a string: greeting('four' or '4' (both are strings))
      //                     // if change: !=== to ===
      //       throw new Error("\n\n You must provide a string as input! \n This is the error: \n")
      //     }
      //     return greetingType
      // }
      // try {
      //     greeting(4)
      // }
      // catch(error){
      //     console.log(error)
      // }
      // finally {
      //   console.log("\n finally statements are always outputted \n")
      // }

//example
        // var input = "6";
        // try {
        //   if(input == "") {
        //     throw "Input can not be empty";
        //   } else if(input.length > 5) {
        //     throw "Input is to big";
        //   } else {
        //     console.log("\n Your code runs fine!");
        //   }
        // } 
        // catch(err) {
        //   console.log(err);
        // } 
        // finally {
        //   console.log("finally statements run no matter what");
        //   console.log("the input was " + input + "\n");
        // }

///assignment//////
// https://coursework.vschool.io/catch-me-if-you-can/

// 1a) Write a function that returns the sum of two numbers. Throw an error if either argument is not of the data type number.
// 1b) Call the sum function inside a try block using "1" and "2" as arguments. Use console.log within a catch block to inform the user of the error.

          // function sum(x, y){
          //   //check data types first and throw error
          //   if(typeof x !== "number" || typeof y !== "number"){
          //     throw new Error('  one or both paramaters are not a number')
          //   }
          //   return x + y
          // }
          // // 1st set statement to check
          // try{
          //     sum(1, 2)             
          // }
          // catch(error){
          //     console.log(error)
          // }
          // //  2nd statement to check
          // try{
          //   sum('1', 'two')             
          // }
          // catch(error){
          //     console.log(error)
          // }        
          // finally {
          //   console.log(" \n Did any errors occur checking **the 2 TRY statements** if typeof x & y were numbers? \n if not error log, then no errors :) \n")
          // }

// 2a) Given a user object, write a function called login that takes a username and password as parameters. Throw an error if either of them don't match. Otherwise, log to the console a message saying "login successful!"
// 2b) Call the login function within a try block. In one instance use the correct credentials, and in another use incorrect ones. Make sure you see the appropriate message!

          var user = {username: "sam", password: "123abc"};
          function login(username, password){
              //check credentials
              if(username !== user.username || password !== user.password){
                  throw new Error('\n username and/or password are incorrect \n')
              }
          }
          try{
            login('sam', '123abc')
          }
          catch(error){
            console.log(error)
          }
          try{
            login('jonny', '123abc')
          }
          catch(error){
            console.log(error)
          }
          finally {
            console.log(" \n Did username and password match? \n if not error log, then no errors \n")
          }






























