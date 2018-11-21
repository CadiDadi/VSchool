
/////////////////////
// it and test do same thing, but is good to distinguish to better understand


var countCode = require("./index") //dont need to write index.js, just index

describe("countCode function", function(){
    test("should return string", function(){
        expect(countCode(9)).toBe("argument is string")
        expect(countCode(true)).toBe("argument is string")
    })
    test("should return number", function(){
        expect(typeof countCode("string")).toBe("number")
    })
    test("return correct count", function(){
        expect(countCode("aaacodebbb")).toBe(1)
        expect(countCode("codexxcode")).toBe(2)
        expect(countCode("cozexxcope")).toBe(2)

    })
})

