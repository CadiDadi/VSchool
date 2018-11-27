///////// map exercises /////////////////////////
// https://coursework.vschool.io/array-map-exercises/

// Use the built-in .map() method on arrays to solve all of these problems

// 1) Make an array of numbers that are doubles of the first array
        var arr = [1,2,3,4];
        var newarr = arr.map(function(item){
            return item + 1;
        })
        console.log(newarr) // returns [ 2, 3, 4, 5 ]

        function doubleNumbers(arr){
            var returnsTheDoubledNumbers = arr.map(function(item){
                return item * 2;
            })
            console.log(returnsTheDoubledNumbers) // returns [4, 10, 200]
        }
        doubleNumbers([2, 5, 100]); 

// 2) Take an array of numbers and make them strings
        function stringItUp(arr){
            var stringified = arr.map(function(item){
                return item.toString()
            })
            console.log(stringified) 
        }
        stringItUp([2, 5, 100]) //returns ["2", "5", "100"]

// 3) Capitalize first letter of each of an array of names & turn rest into lower case
        function capitalizeNames(arr){
            var capitalized = arr.map(function(item){
                return item.charAt(0).toUpperCase() + item.substr(1).toLowerCase()
            })
            console.log(capitalized) 
        }
        capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]) //returns ["John", "Jacob", "Jingleheimer", "Schmidt"]

// 4) Make an array of strings of the names

        namesOnly = [
            {
                name: "Angelina Jolie",
                age: 80
            },
            {
                name: "Eric Jones",
                age: 2
            },
            {
                name: "Bob Ziroll",
                age: 100
            }
        ]
        // ["Angelina Jolie", "Eric Jones", "Bob Ziroll"]

        var onlyNames = namesOnly.map(function(object){
            return object.name;
        })
        console.log(onlyNames)
// 4. example 
        var countries = {
            China: 1371980000,
            India: 1276860000,
            Pakistan: 190860000
        };
        var countriesFiltered = Object.keys(countries).filter(function(key) {
            return countries[key]
        })
        .map(function(key) {
            return countries[key]
        });
        console.log(countriesFiltered)  // Returns: [321786000, 255461700, 204873000, 190860000]


// 5) Make an array of strings of the names saying whether or not they can go to The Matrix

        makeStrings = [
            {
                name: "Angelina Jolie",
                age: 80
            },
            {
                name: "Eric Jones",
                age: 2
            },
            {
                name: "Bob Ziroll",
                age: 100
            }
        ]
        const canGoOver18 = makeStrings.map(function(person){
            if(person.age > 18){
                return `${person.name} can go`
            } else {
                return `${person.name} cannot go`
            }
        })
        console.log(canGoOver18)

// 6) Make an array of the names in <h1>s, and the ages in <h2>s

        readyToPutInTheDOM = [
            {
                name: "Angelina Jolie",
                age: 80
            },
            {
                name: "Eric Jones",
                age: 2
            },
            {
                name: "Bob Ziroll",
                age: 100
            }
        ]
        var putInH1H2 = readyToPutInTheDOM.map(function(person){
            return `<h1>${person.name}</h1><h2>${person.age}</h2>`
        })
        console.log(putInH1H2)
        // ["<h1>Angelina Jolie</h1><h2>80</h2>", 
        // "<h1>Eric Jones</h1><h2>2</h2>", 
        // "<h1>Bob Ziroll</h1><h2>100</h2>"]
