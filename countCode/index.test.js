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
/////////////////////
// it and test do same thing, but is good to distinguish to better understand


var countCode = require("./index") //dont need to write index.js, just index

describe("the countCode function", function(){
    test("should rcv a string as a function", function(){
        expect(countCode(9)).toBe("You must provide a string as an argument")
        expect(countCode(true)).toBe("You must provide a string as an argument")
    })
    test("should output a number", function(){
        expect(typeof countCode("somestring")).toBe("number")
    })
    test("should return correct count", function(){
        expect(countCode("aaacodebbb")).toBe(1)
        expect(countCode("codexxcode")).toBe(2)
        expect(countCode("cozexxcope")).toBe(2)

    })
})

