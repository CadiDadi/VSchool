

/////////convert var into a function//////////
var lyrics = ["This", "hit", "that", "ice"];

var stringified = lyrics.toString()
console.log(stringified)
///function
function convert() {
    var stringified = lyrics.toString()
    console.log(stringified)
    }
convert()
//////////////////////////////////////////

////////////// inline vs block elements /////////////////

// https://coursework.vschool.io/html-block-vs-inline/

// block - elements take up full width of page
// inline - places elements side by side
// inline-block: ??

// Common block elements:
    // Paragraphs (<p>)
    // Headers (<h1> through <h6>)
    // Divisions (<div>)
    // Lists and list items (<ol>, <ul>, and <li>)
    // Forms (<form>)

// Common inline elements:
    // Spans (<span>)
    // Images (<img>)
    // Anchors (<a>)
// ------------------------
// Conditionals - if, else if, else

// if(condition(s)) {
//     actions
// }

// var person = {
//     name: 'Rick',
//     age: 26
// }

//switch,case,default w/ break(stops code when condition met, otherwise will run the matching Case, as well as all cases after it(regardless if matches)). This is an alternative to if,else if,else statements - a little cleaner code, in certain conditions.
// switch(person.age) {
//     case 15:
//         console.log('you are 15')
//         break;
//     case 16:
//         console.log('you are 16') 
//         break;   
//     case 26:
//         console.log('you are 26')
//         break;
//     default:
//         console.log('default runs if no cases match')
// }

// if(person.age > 18 && person.name[0] === 'R') {
//     console.log('you are old enough to see movie')
// }

// if(person.age > 18) {
//     console.log('too old')
// }
// else if(person.age < 18) {
//     console.log('too young')
// }
// else if(person.age === 18) {
//     console.log('ok')
// }
// else {
//     console.log('say what???')
// }


// var array = [1,2,3,4,5]
// var string = 'hello'
// console.log(array[2])
// console.log(string[1])

// var object1 = {
//     name: 'amy',
//     age: 7
// }

//these return the same thing - may be used in different situations
// console.log(object1.age)
// console.log(object1['age'])

// Write a function using the .splice() and .split() methods to remove the name Albert from the following string and replace it with your own.
function a(){
var str = "Hello my name is Albert"
var newStr = str.split(' ')
newStr.splice(4 ,1, 'Scott')
console.log(newStr.join(' '))
}

/////  WHILE loop vs FOR loop  /////
// WHILE loop 
var totalWhile = 0
 while(totalWhile < 3){
     totalWhile++
     console.log(totalWhile)
 }
 // FOR loop
 for(var totalFor = 0; totalFor < 3; totalFor++){
     console.log(totalFor)
 }

