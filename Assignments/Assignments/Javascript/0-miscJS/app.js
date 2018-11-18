//best resource - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// 1 REDUCE - the reduce() method reduces the array to a single value, adding the values 
    let numbers = [1,2,3];
    let numTotal = numbers.reduce(function(total, num){
        return total + num
    })
    console.log(numTotal) // => 6 (1+2+3) 

// 2 SORT
    // ex 1
        //a - b sorts low to high
        //b - a sorts high to low
        let sortedArray = [1,57,93,2,13];
        sortedArray.sort(function(a,b){
        return b - a
        })
        console.log(sortedArray)
    // ex 2
        let sortedWords = ['dog', 'cat', 'ant', 'mouse']
        sortedWords.sort()
        console.log(sortedWords)

// 3 FIND - The find() method returns the value of the FIRST element in the array that satisfies the provided testing function
    let numbers3 = [12,2,4,3,62,19,79];
    //ES-5 syntax
        // let foundNumber = numbers3.find(function(number){
        //   return number < 5
        // })
    //ES-6 syntax
        const foundNumber = numbers3.find(number => number < 5)
    console.log(foundNumber)

// 4 SOME - The some() method tests whether at least one element in the array passes the test implemented by the provided function
    //RETURNS BOOLEAN - TRUE or FALSE
        let numbers1 = [13,30,5]
        let numbers2 = [30,5,222]
        //ES-5 syntax
            let someNumUnder100 = numbers1.some(function(number){
            return number > 100
            })
            console.log(someNumUnder100) // => false

        //ES-6 syntax
            const someNumOver100 = numbers2.some(number => number > 100 )
            console.log(someNumOver100) // => true
// 5 EVERY - The every() method tests whether all elements in the array pass the test implemented by the provided function.
    //RETURNS BOOLEAN - TRUE or FALSE
        let numbersEvery = [13,30,5]
        //ES-5 syntax
            let everyNum = numbersEvery.every(function(number){
                return number > 100 
            })
            console.log(everyNum) // => false
        //ES-6 syntax
            let everyES6 = numbersEvery.every(number => number < 100)
            console.log(everyES6)  // => true
