// Loops //

// for 
// while

// Operators
//  ++      => increment by one
//  --      => decrement by one
//  +=      => a = a + num    
//  -=      => a = a - num   
//  *=      => a = a * num
//  /=      => a = a / num

// Anatomy of the 'for' loop
    // var i = 0   =>  start point/iterator
    // i <= 100    =>  stop point - Should I run again, will stop at 100
    // i++         =>  increment amount - Adding 1 to our variable on each loop

//write loop that console logs 0 - 10
    // for(var i = 0; i <= 10; i++) {
    //     console.log(i)
    // }
//write loop that console logs EVEN numbers from 0-10
    //     //method 1
    //     for(var i = 0; i <= 10; i += 2) {
    //         console.log(i)
    //     }
    //     //method 2
    //     for(var i = 0; i <= 10; i++) {
    //         if(i % 2 === 0)
    //         console.log(i)
    //     }
    // //write for loop prints every 5 numbers from 20 - 0
    //     for(var i = 20; i >= 0; i -= 5) {
    //         console.log(i)
    //     }

//20181019 practice exercise
//             var friends = [
//                 {
//                     name: "Rick",
//                     age: 70
//                 },
//                 {
//                     name: "Morty",
//                     age: 14
//                 },
//                 {
//                     name: "Jerry",
//                     age: 54
//                 },
//                 {
//                     name: "Summer",
//                     age: 18
//                 },
//                 {
//                     name: "Mr. Poopie Butthole",
//                     age: 31
//                 },
//                 {
//                     name: "Pickle Rick",
//                     age: 70
//                 }
//             ]
// //     //1. write for loop console logs every character's name
//         for(var i = 0; i < friends.length; i++) {
//             console.log(friends[i].name);
//         }
// //     //2. write for loop console logs a string for each character that has the following structure: "'Name' is 'age' years old"
//         for(var i = 0; i < friends.length; i++) {
//             console.log(friends[i].name + ' is ' + friends[i].age + ' years old.')
//         }
// //     //3. add a new property to each obgect, console log array after the loop to make sure the property was added
//         for(var i = 0; i < friends.length; i++) {
//             friends[i].hasThisManySeries = 6
//         }
//         console.log(friends)
    //4. nesting - why returning an undefined after calling the catchPhrase? not an error, function will just return it (not sure why).
        var person = {
            name: 'steve',
            age: 50,
            isAlive: true,
            address: {
                street: '3rd st',
                city: 'slc'
            },
            catchPhrase: function() {
                console.log(person.address)
            }
        }
        console.log(person.catchPhrase())

// % - modulo  modulus
    // Returns the remainder of a division  
        // ex:  3 % 2 === 1
        // ex: 2 % 2 === 0


 //////////////////NEED GO THRU THE REST OF THIS/////////////////////////////////////////////////       

// While 

// var player = {
//     name: 'steve',
//     isAlive: true
// }

// while(player.isAlive){
//     if(player.name === "steve"){
//         player.isAlive = false
//     }

// }

// Other key words used in loops:
    // break      => break out of the loop and move on to the next line of code
    // continue   => move the next iteration

// PRACTICE Q's

// Loop through the following array, and log to the console 
// "hooray" for every party there is.
// var eventsAtWork = ["work", "pretend to work", "party", "work", "meeting", "party", "daily grind", "work", "party"]

// for(var i = 0; i < eventsAtWork.length; i++){
//     if(eventsAtWork[i] === 'party'){
//         console.log('hooray')
//     }
// }

// Loop through the following array, and count how many 
// "trues" there are.
    // var booleans = [true, true, false, true, false, false, false, true, true, true]
    // var truthCounter = 0

    // for(var i = 0; i < booleans.length; i++){
    //     if(booleans[i]){
    //         truthCounter++
    //     }
    // }

// console.log(truthCounter)

// Add an isAdmin property to each of the users in this array.
    // var users = [
    //   {
    //     name: "Sophie",
    //     age: 12
    //   },
    //   {
    //     name: "Larry",
    //     age: 32
    //   },
    //   {
    //     name: "Cathy",
    //     age: 40
    //   }

    // console.log(users) // They do not have an isAdmin property yet

    // for(var i = 0; i < users.length; i++){
    //     users[i].isAdmin = true
    // }
    // console.log(users) // All users now have an isAdmin property

// var animals = ["dog", "cat", "octopus", "blowfish", "lion"]
// for (var i = 0; i < animals.length; i++){
//   console.log(animals[i])
// }

// var eventsAtWork = ["work", "pretend to work", "party", "work", "meeting", "party", "daily grind", "work", "party"]
// for (var i = 0; i < eventsAtWork.length; i++) {
//     if(eventsAtWork == "party") { 
//         console.log("hooray")
//     }
// }

// /////
// var booleans = [true, true, false, true, false, false, false] 
// var truthCounter = 0
// for (var i = 0; i < booleans.length; i++) {
//     if(booleans[i]) {
//         truthCounter++  
//     }
// }
// console.log(truthCounter)

// ////
// var users = [
//     {
//       name: "Sophie",
//       age: 12
//     },
//     {
//       name: "Larry",
//       age: 32
//     },
//     {
//       name: "Cathy",
//       age: 40
//     }
// ]
// console.log(users)

// for(var i = 0; i < users.length; i++) {
//     users[i].isAdmin = true
// }
// console.log(users)


// Loops and Arrays Practice

// #1
// Loop through the following array and count how many "computers" there are. Log the final count:

// var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
// var isComputer = "computer"
// for (var i = 0; i < officeItems.length; i++) {
//     if(officeItems === isComputer) {
//         officeItems++  
//     }
// }
// console.log(officeItems)

// #2
// Loop through the following array and log to the console "old enough" if they are 18 or older, and "not old enough" if thy aren't 18.

// var peopleWhoWantToSeeMadMaxFuryRoad = [
//   {
//     name: "Mike",
//     age: 12,
//     gender: "male"
//   },{
//     name: "Madeline",
//     age: 80,
//     gender: "female"
//   },{
//     name: "Cheryl",
//     age: 22,
//     gender: "female"
//   },{
//     name: "Sam",
//     age: 30,
//     gender: "male"
//   },{
//     name: "Suzy",
//     age: 4,
//     gender: "female"
//   }
// ] 
// for(var i = 0; i < users.length; i++) {
//     users[i].isAdmin = true
// }
// console.log(users)

// Optional bonus challenges for this problem

// #1
// Log to the console a personalized message like:

// Mike is not old enough to see Mad Max

// or

// Madeline is old enough to see Mad Max.


// #2
// Check to see if the movie goer is a male or female for an even more personalized message.

// Mike is not old enough to see Mad Max Fury Road, don't let HIM in.

// or

// Madeline is old enough. SHE'S good to see Mad Max Fury Road.

// Optional Bonus challenge

// Imagine you have a button that toggles a light on and off. Loop through the following array of numbers and toggle the button the numbers of times for each number. The array [2, 3, 2] would toggle the button 7 times.

// The light is off to start with. Log to the console whether or not the light is on at the end.

// Sample Arrays:

// [2, 5, 435, 4, 3] // "The light is on"
// [1, 1, 1, 1, 3]   // "The light is on"
// [9, 3, 4, 2]      // "The light is off"