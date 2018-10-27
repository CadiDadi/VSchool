// https://coursework.vschool.io/problem-solving-practice/

///////////  return largest #  (two examples) //////////

// Write a function that takes an array of numbers and returns the largest (without using Math.max())

//// 1. note when have string, must convert to array (.split)

function highAndLow(numbers) {
    var arr = numbers.split(" ").map(Number);
    var largest = arr[0];
    for (var i = 1; i < arr.length; i++) {
      if (arr[i] > largest) {
        largest = arr[i];
      }
    }
    return largest;
}  
console.log(highAndLow("4 5 29 54 4 0 -214 54 -64 1 -3 6 -6"));

// 2. array
function largest(numbers) {
    var arr = numbers.map(Number);
    var large = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > large) {
            large = arr[i];
        }
    }
    return large;
}
console.log(largest([3, 5, 20, 8, 1]));


// Write a function that takes an array of words and a character and return each word that has that letter present.

// lettersWithS trings(["#3", "$$$", "C%4!", "Hey!"], "!") // => ["C%4!", "Hey!"]


// Write a function that takes a num1 and num2 and returns whether num1 is divisible by num2.

// isDivisible(4, 2) // => true
// isDivisible(9, 3) // => true
// isDivisible(15, 4) // => false

function isDivisible (num1, num2) {
    if(num1 / num2 && num1 % num2 === 0) {
        return true
      } else {
        return false;
      }
}     
console.log(isDivisible(9,3))
console.log(isDivisible(9,4))
console.log(isDivisible(4,2))
console.log(isDivisible(15,4))