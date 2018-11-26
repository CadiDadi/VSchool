// https://coursework.vschool.io/multiple-arr-methods-practice-2/

// Multiple arr Methods Part 2

const peopleAndPets = [
    {
        firstName: "Sarah",
        lastName: "Palin", 
        age: 47,
        pets: [
            {
                name: "Alfred",
                type: "dog",
                nickNames: ["Lil Alfred", "Alfy", "Alfinator"]
            },
            {
                name: "Charles",
                type: "cat",
                nickNames: ["Charley"]
            },
            {
                name: "Bark Obama",
                type: "dog",
                nickNames: ["Barack", "Mr. President"]
            },
            {
                name: "Christopher George Latore Wallace",
                type: "dog",
                nickNames: ["Notorious D.I.G.", "Diggie Smalls"]
            }

        ]
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12,
        pets: [
            {
                name: "Howard",
                type: "dog",
                nickNames: []
            },
            {
                name: "Bear",
                type: "dog",
                nickNames: []
            }
        ]
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78,
        pets: [
            {
                name: "Bird Person",
                type: "bird",
                nickNames: ["Phoenixperson"]
            },
            {
                name: "Krombopulos Michael",
                type: "Gromflomite",
                nickNames: ["Assassin man"]
            },
            {
                name: "Squanchy",
                type: "Cat-person",
                nickNames: ["Squanch", "Smarf", "Thunder Cat"]
            }

        ]
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 23,
        pets: [
            {
                name: "Morty Jr.",
                type: "Gazorpazorp",
                nickNames: ["Gwendolyn Jr."]
            },
            {
                name: "Snuffels",
                type: "dog",
                nickNames: ["Snowball"]
            }

        ]
    }
]

// Create an arr of pets' names.
        console.log('---Create an arr of pets names---')
        const pets = (arr) => {
            const petNames = []
            arr.forEach(obj => {
                obj.pets.forEach(pet => {
                    petNames.push(pet.name)
                })
            })
            return petNames
        }
        console.log(pets(peopleAndPets))

// Display the pets' names in <li>s. 
        console.log('---Display the pets names in <li>s---')
        const petLI = (arr) => {
            let petNameLI = []
            arr.forEach(obj => {
                obj.pets.forEach(pet => {
                    //   if (pet.type === "dog") {
                        petNameLI.push(`<li>${pet.name}</li>`) 
                    }
                )
            })
            return petNameLI
        }
        console.log(petLI(peopleAndPets))
  
// Only display names of pets if their owners are older than 40.
        console.log('---Only display names of pets if their owners are older than 40---')
        const petOwn40 = (arr) => {
            let petNameLI = []
            arr.forEach(obj => {
                if (obj.age > 40) {
                    obj.pets.forEach(pet => {
                        petNameLI.push(pet.name) 
                    })
                }
                
            })
            return petNameLI
        }       
        console.log(petOwn40(peopleAndPets))
  
