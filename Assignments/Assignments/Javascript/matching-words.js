// https://coursework.vschool.io/matching-words/

// write a program that returns an array of every word that appears more than once in the phrase. Your final array should have just one instance of the repeated words. 
//Steps:
// Create a function that accepts the phrase.
// Create an array to store all repeated words.
// Only list the repeated words once in the new array.
// Return the new array.

const pirateInscription = 'Banh mi pull skateboard ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B lever lever listicle irony pop-up sriracha on the saliva. Shabby on chic eu iceland far next level far lever pull drinking the right vinegar fanny pack pull minim right chicharrones migas.';

//Method 1
    const matchWords = str => {
        const toArray = str.toLowerCase().split(" ")
        const count = {}
        const output = []
        for(let i = 0; i < toArray.length; i++){
            if(!count[toArray[i]]){
                count[toArray[i]] = 1
            } else if(count[toArray[i]] === 1){
                count[toArray[i]]++
                output.push(toArray[i])
            }
        }
        return output
    }
    console.log(matchWords(pirateInscription))

//Method 2 - returns in order of 1st instance of each repeated word
const matchingWords = str => {
    let toArr = str.split(" ")
    let matchingArray = []
    for(let i = 0; i < toArr.length; i++) {
        if((i !== toArr.lastIndexOf(toArr[i])) && !matchingArray.includes(toArr[i])) {
            matchingArray.push(toArr[i])
        }
    }
    return matchingArray
}
console.log(matchingWords(pirateInscription))




