// https://coursework.vschool.io/count-code/

// Write a function that returns the number of times that the string "code" appears anywhere in the given string, except we'll accept any letter for "d", so "cope" and "cooe" would also count.

// Return the count, including any substitutions for the letter "d".
// function countCode(string) {  
  
// }

//Output: 
// countCode("aaacodebbb") returns 1
// countCode("codexxcode") returns 2
// countCode("cozexxcope") returns 2
// Extra credit
// Allow any uppercase characters to substitute for "c"

//testing with Jest
    // npm init -y 
    // npm i --save-dev jest (installs jest with DEV dependency (see in package.json))

    // function countCode(string){
    //     if(typeof string !== "string"){
    //         return "You must provide a string"
    //     }
    // }

    // module.exports = countCode

    function countCode(str){
        return str.match(/co\De/gi).length; 
        // /co is looking for literal co together. 
        // \D is looking for anything that is not a digit (because of capital D). \d would look for a digit specifically
        // And then it looks for literal e
        // g says look at the global str so it doesn't stop at first occurrence
        // i says to ignore the case
    }
    
    console.log(countCode("aaacodebbb"));
    console.log(countCode("codexxcode"));
    console.log(countCode("cozexxcopecote"));