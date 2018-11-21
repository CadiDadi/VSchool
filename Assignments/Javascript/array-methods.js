// assignment

//https://coursework.vschool.io/array-methods-exercise/

// Array Methods Exercise

// Create a new JavaScript file and put these two arrays at the beginning. You will perform operations with them.

var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

// // After every command, console.log() your arrays. A good way to do that is to use:

// // console.log("fruit: ", fruit);
// // console.log("vegetables: ", vegetables);

// // Remove the last item from the vegetable array.
var vegetablesSlice = vegetables.slice(0, 3)
console.log(vegetablesSlice);

// // Remove the first item from the fruit array.
var fruitSlice = fruit.slice(1, 4)
console.log(fruitSlice)

// // Find the index of "orange."
var orangeIndex = fruitSlice.indexOf('orange')
console.log(orangeIndex)

// // Add that number to the end of the fruit array.
var fruitSliceOrangeIndex = fruitSlice.concat(orangeIndex)
console.log(fruitSliceOrangeIndex)

// // Use the length property to find the length of the vegetable array. Log that to the console.
var vegetablesLength = vegetablesSlice.length
// console.log(vegetablesLength)
console.log(vegetablesSlice);

// // Add that number to the end of the vegetable array.
var vegetablesAddLength = vegetablesSlice.concat(vegetablesLength)
console.log(vegetablesAddLength)

// // Put the two arrays together into one array. Fruit first. Call the new Array "food".
var food = fruitSliceOrangeIndex.concat(vegetablesAddLength)
console.log(food)

// // Remove 2 elements from your new array starting at index 4 with one method.
var foodRemove = food.splice(4, 2)
console.log(food)

// Reverse your array.
var foodRemoveReverse = food.reverse()
console.log(foodRemoveReverse)

// Log your array as a string to the console.

// If you've done everything correctly, the last step should print the following to the console:
// 3,pepper,1,watermelon,orange,apple



////////////practice///////////////
// var arr = [1,2,3,4,5]
// console.log(arr)
// console.log(arr.length)
// // .push() - adds element to end of arra
// arr.push(6)
// console.log(arr)
// // .pop()
// arr.pop()
// console.log(arr)
// // .shift()
// arr.shift()
// console.log(arr)
// // .unshift()
// arr.unshift(0)
// console.log(arr)
// // .slice()
// console.log(arr.slice(2))
// // .splice()
// console.log(arr.splice(1,3,'blue',false))
// console.log(arr)
// // .indexOf()

// // .lastIndexOf()

// // .join()

// // .concat()





