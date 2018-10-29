// https://coursework.vschool.io/javascript-calculator/

var readline = require("readline-sync")
   
var number1 = readline.question("Enter your first number:    ")   
var number2 = readline.question("Enter your second number:   ")  
var mathOperation = ['add','sub','mul','div']
var operation = readline.keyInSelect(mathOperation, "Enter the operation to perform: add, subtract, multiply, divide:           ")
var i = mathOperation[operation]
function mathFunction(num1, num2){
  if(i === 'add'){
    // Backticks ( ` ` ) allow us to embed any expression into the string, including function calls
    // ${ } - turns stuff into strings
    console.log(`Result: ${num1+num2}`)
  }
  else if(i === 'sub'){
    console.log(`Result: ${num1-num2}`)
  }
  else if(i === 'mul'){
    console.log( `Result: ${num1*num2}`)
  }
  else if(i === 'div'){
    console.log(`Result: ${num1/num2}`)
  }
  //////doesnt work/////
  // else if(i > 4){ 
  //   console.log('Please make a valid entry')
  // }
}
mathFunction(Number(number1), Number(number2))
