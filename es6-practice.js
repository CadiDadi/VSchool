// https://coursework.vschool.io/es6-practice-object-literals-destructuring-rest-and-spread-operators/

// ES6 Practice - Slope Style

// Each problem is marked using Ski Slope difficulty ratings. Become a double black diamond ES6 writer!

// Rest and Spread Operator

//DONE// Use the Rest Operator to help this function return an array of animals, no matter how many animals are passed to it:

        const collectAnimals = (...animals) => animals
        console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"))
        // collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"); 
        // ["dog", "cat", "mouse", "jackolope", "platypus"]

//DONE// Write a function that returns a food object with the array names as properties using Object Literals:

        const combineFruit = (fruit, sweets, vegetables) => {
            return {fruit, sweets, vegetables}
        }
        console.log(combineFruit(["apple", "pear"],
                    ["cake", "pie"],
                    ["carrit"]))

//DONE// Use destructuring to fill in the blanks and use the property names as variables:

    //////////////
        const person = {
            name: "Steve",
            age: 61,
            friends: ["Joe", "Guy"]
        }
        //destructuring so can just call NAME instead of PERSON.NAME (both work)
        const { name, age, friends } = person
        console.log(name)
        console.log(person.name)
        console.log(person)
    //////////////
        // const vegetables = ["carrot", "pineapple", "tomato"]
        // const [carrot, pineapple] = vegetables
        // console.log(carrot, pineapple)
    //////////////
        const vacation = {  
            location: "Burly Idaho",
            duration: "2 weeks"
        }
        const { location, duration } = vacation
        function parseSentence(vacation){
            return `We're going to have a good time in ${location} for ${duration}`
        }
        console.log(location)
        console.log(duration)
        console.log(parseSentence())

//NOT DONE// Use destructuring to make this code ES6:

        // function returnFirst(items){
        //     const firstItem = items[0]; /*change this line to be es6*/
        //     return firstItem
        // }

//DONE// Write destructuring code to assign variables that will help us return the expected string. Also, change the string to be using Template literals:

        const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];
        const returnFavorites = (arr) => {
            const [firstFav, secondFav, thirdFav, fourthFav] = favoriteActivities
            return `My top three favorite activities are, ${firstFav},${secondFav}, ${thirdFav}, and ${fourthFav}`
        }
        console.log(returnFavorites(favoriteActivities))

//DONE// Use the Rest and Spread Operator to help take any number of arrays, and return one array. You will need to change how the arrays  are passed in. You may write it assuming you will always recieve three arrays if you would like to.

    //////////////
        const arr1 = [1, 2, 3, 4]
        const arr2 = [5, 6, 7, 8]

                        // SPREAD
        const newArr = [...arr1, ...arr2]
        console.log(newArr)
    //////////////
        function combineAnimals() { 
            const realAnimals = ["dog", "cat", "mouse"]
            const magicalAnimals = ["jackolope"]
            const mysteriousAnimals = ["platy"]         
            const collectedArraysOfAnimals = [...realAnimals, ...magicalAnimals, ...mysteriousAnimals]
            console.log(collectedArraysOfAnimals)
        }
        combineAnimals()   // ["dog", "cat", "mouse", "jackolope", "platy"]

//NOT DONE// Try to make the following function more ES6xy:

///////////////
        const array = [3,7,11,77,1,2,3,4,5,6,7,8]
        // ES5
            const mappedArrayES5 = array.map(function(num){
                return num + 1
            })
            console.log(mappedArrayES5)
        // ES6
            const mappedArrayES6 = array.map(num => num * 2)
            console.log(mappedArrayES6)
///////////////////
            const product = (...numbers) => numbers.reduce((acc, number) => acc * number, 1)
            console.log(product(2,3,4))

// Make the following function more ES6xy. Use at least both the rest and spread operators:

        function unshift(array, a, b, c, d, e) {  
          return [a, b, c, d, e].concat(array);
        }

// Write some destructuring code to help this function out. Use object literals to simplify it:

// function populatePeople(names){
//     return names.map(function(name){
//         name = name.split(" ");
//         // your code
//         return {
//             firstName: firstName,
//             lastName: lastName
//         }
// }
// populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"])
// //[
// //  {firstName: "Frank", lastName: "Peterson"},
// //  {firstName: "Suzy", lastName: "Degual"},
// //  {firstName: "Liza", lastName: "Jones"},
// //]