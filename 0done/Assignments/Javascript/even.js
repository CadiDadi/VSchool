//Create a for loop that iterates through 101 numbers (from 0 - 100). If the current iteration is an Odd number, print "Odd" to the console, otherwise print "Even".

//https://coursework.vschool.io/evenodd-looping/

///////////notes/////////

//components of for loop:
// for (
//     var i //creating i variable 
//     = #; //this is where the loop will start, can be any number 0,20,33,etc
//     i < 10; //set where the loop will end. 
//         1. can be <, <=, >, >=  
//         2. set the end point #
//     i++ //this is how it increments or decrements.  i++ is increment by 1, i += 3 will increment by 3, i-- will decrement by 1
    //*careful of start point, end point, and incrementation/decrementation - can cause infinite loop
        // Operators
            //  ++      => increment by one
            //  --      => decrement by one
            //  +=      => a = a + num    
            //  -=      => a = a - num   
            //  *=      => a = a * num
            //  /=      => a = a / num
// )

/////////////////

// for (var i = 0; i < 10; i++) {
//     if(i % 2 === 0) {
//         console.log('even')
//     }
//     else{
//         console.log('odd')
//     }
// }

// //divisible by another number besides 2 - must include === 0
// for (var i = 1; i < 10; i++) {
//     if(i % 3 === 0) {
//         console.log('divisible by 3')
//     }
//     else{
//         console.log("not div by 3")
//     }
// }

//start at 0, increment by  3
// i += 2 is the same as i = (i = 2)
for (var i = 0; i < 10; i += 3) {
    console.log(i)
}

//start at 10, decrement by 1
for (var i = 10; i >= 0; i--) {
    console.log(i)
}

//starrt at 10, decrement by 4
for (var i = 10; i >= 0; i -= 4) {
    console.log(i)
}