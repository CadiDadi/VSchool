// Assignment
    // https://coursework.vschool.io/array-filter-exercises/

    // Use the built-in array method .filter() to solve all of these problems

// Notes

    // .filter() => loops over the array
        // Returns a NEW array with filtered criteria ONLY. you will want to save result in a variable:
            // ex:  var newArr = arr.filter()

    // var arr2 = [1, 2, 3, 4, 5, 6]
    // var filteredArray = arr2.filter(function(item){
    //                         if(item % 2 === 0){
    //                             return item
    //                         }
    //                     })
    // console.log(filteredArray)  // returns [2, 4, 6]

// Assignment

// 1) Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
    
    // a)
    function BiggerElements(val){
        return function(value, index, array){
        return (value > val)
           }
       }
       var result = [11, 45, 4, 31, 3, 99, 64, 10].filter(BiggerElements(10))
       console.log(result)

   // b)
       function fiveAndGreaterOnly(arr) {
           return arr.filter(num => num > 5)
           }           
           console.log(fiveAndGreaterOnly([3, 6, 8, 2])) 


// 2) Given an array of numbers, return a new array that only includes the even numbers.
       function evensOnly(arr) {
           return arr.filter(num => num % 2 === 0)
           }           
           console.log(evensOnly([3, 6, 8, 7, 2, 2]))

// 3) Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length
        fiveCharactersOrFewerOnly = (arr) => {
                return arr.filter(word => word.length <= 5)
            }
            console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])) // ["by", "dog", "wolf", "eaten"]

// 4) Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.
        const people = [
            {
                name: "Angelina Jolie",
                member: true
            },
            {
                name: "Eric Jones",
                member: false
            },
            {
                name: "Bob Ziroll",
                member: true
            }
        ]
        peopleWhoBelongToTheIlluminati = () => {
            const members = people.filter(function(isMember){
                return isMember.member === true;
            })
            console.log(members)
        }  
        peopleWhoBelongToTheIlluminati(people)

// 5) Filter out all the people who are not old enough to see The Matrix (younger than 18)
        const filmGoers = [
            {
                name: "Angelina Jolie",
                age: 8
            },
            {
                name: "Eric Jones",
                age: 2
            },
            {
                name: "Paris Hilton",
                age: 69
            },
            {
                name: "Kayne West",
                age: 18
            },
            {
                name: "Bob Ziroll",
                age: 10
            }
        ]
        function oldEnough(arr){
            var oldEnough = filmGoers.filter(function(person){
                return person.age > 17
            })
            console.log(oldEnough)
        }
        oldEnough()