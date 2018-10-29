//DEBUG EXERCISE - TAKE CODE AND FIX IT (SEE ESCAPE.JS, similar exercise)


// https://coursework.vschool.io/mutability-and-value-types/

// https://github.com/VSchool/stuck-debug

// In your assignments/exercises folder in terminal, copy and paste the following:
      //   git clone https://github.com/VSchool/stuck-debug.git && cd stuck-debug && rm -rf .git/ && npm install
// Goal: This program should have the user:
      //   Pick flowers and and keep looping if they select 'pick flowers',   Shoot guns and and keep looping if they select 'shoot guns', Fight bears and end the program if they select 'fight bears'.
      //   It should tell them to select an option if they choose 'Cancel'

// var ask = require("readline-sync");

// var options = ['pick flowers', 'shoot guns', 'fight bears'];
// var option = 'undecided';

// while(options = 'fight bears'){
//   ask.keyInSelect(options, "What would you like to do today?: ");
//   if(options = 'pick flowers'){
//     console.log("You pick some flowers. You make a bouquet.");
//   } else {
//     console.log("You shoot guns.");
//   }
// }
// console.log("You fought a bear and got beat up!");

///////
var readlineSync = require('readline-sync')

var go = false
// var stop = false
while(!go){
  var options = ['pick flowers', 'shoot guns', 'fight bears']
  // var option = 'undecided'
  var index = readlineSync.keyInSelect(options, 'Whatcha want to do?')
  if(index === 0){
    go = false
    console.log('go pick flowers')
  }
  else if(index === 1){
    go = false
    console.log('go shoot')
  }
  else if(index === 2){
    go = true
    console.log('go fight some bears')
  }
  // -1 equals when press 0
  else if(index === -1){
    go = false
    console.log('Select an option') 
  }
