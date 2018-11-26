// https://coursework.vschool.io/es6-practice-object-literals-destructuring-rest-and-spread-operators/

// Use the Rest Operator to help this function return an array of animals, no matter how many animals are passed to it:

        const collectAnimals = (...animals) => animals
        console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"))

// Write a function that returns a food object with the array names as properties using Object Literals:

        const combineFruit = (fruit, sweets, vegetables) => {
            return {fruit, sweets, vegetables}
        }
        // this assigns arrays (can be anything) to fruit, sweets, vegetables
        console.log(combineFruit(["apple", "pear", 22222],
                    ["cake", "pie"],
                    ["777"]))

// Use destructuring and use the property names as variables.

    // 1
        const person = {
            name: "Steve",
            age: 61,
            friends: ["Joe", "Guy"]
        }
        console.log(person.name)

        // destructuring - call NAME instead of PERSON.NAME (both work)
        const { name, age, friends } = person
        console.log(name)

    // 2
        const vacation = {  
            location: "TEXAS",
            duration: "7 weeks"
        }
        const { location, duration } = vacation
        // ES-5
            // function parseSentence(vacation){
            //     return `We're going to have a good time in ${location} for ${duration}`
            // }
        // ES-6
            parseSentenceES6 = vacation => `We're going to have a good time in ${location} for ${duration}`
            console.log(location)
            console.log(duration)
            console.log(parseSentenceES6())

// Write destructuring code to assign variables that will help us return the expected string. Also, change the string to be using Template literals:

        const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];
        const returnFavorites = (arr) => {
            const [firstFav, secondFav, thirdFav, fourthFav] = favoriteActivities
            return `My top three favorite activities are, ${firstFav},${secondFav}, ${thirdFav}, and ${fourthFav}`
        }
        console.log(returnFavorites(favoriteActivities))

// Use the Rest and Spread Operator to help take any number of arrays, and return one array. You will need to change how the arrays  are passed in. You may write it assuming you will always recieve three arrays if you would like to.

// SPREAD
        // a
        const arr1 = [1, 2, 3, 4]
        const arr2 = [5, 6, 7, 8]
                        // SPREAD
        const newArr = [...arr1, ...arr2]
        console.log(newArr)

        // b
        function combineAnimals() { 
            const realAnimals = ["dog", "cat", "mouse"]
            const magicalAnimals = ["jackolope"]
            const mysteriousAnimals = ["platy"]         
            const collectedArraysOfAnimals = [...realAnimals, ...magicalAnimals, ...mysteriousAnimals]
            console.log(collectedArraysOfAnimals)
        }
        combineAnimals()   // => ["dog", "cat", "mouse", "jackolope", "platy"]

// Try to make the following functions more ES6xy:

const array = [3,6,7,8]
    //#1
        // ES5
            // const mappedArrayES5 = array.map(function(num){
            //     return num + 1
            // })
            // console.log(mappedArrayES5) // => [ 4, 7, 8, 9 ]
        // ES6
            const mappedArrayES6 = array.map(num => num * 2)
            console.log(mappedArrayES6) // => [ 6, 12, 14, 16 ]

//Reduce()
        const product = (...numbers) => numbers.reduce((acc, number) => acc * number, 1)
        console.log(product(2,3,4)) // => 24 (2*3*4)
        console.log(product(2,3,5)) // => 30 (2*3*5)

//Make the following function more ES6xy. Use at least both the rest and spread operators:

const restAndSpread = [1, 2, 3];
const arrFirst = (arr, ...chars) => arr.concat([...chars])
console.log(arrFirst(restAndSpread, 4, 5, 6))
const charsFirst = (arr, ...chars) => [...chars].concat(arr)
console.log(charsFirst(restAndSpread, 4, 5, 6))

    