// https://coursework.vschool.io/jest-testing/

var sum = require('./sum.js') //can just write ./sum, dont need the .js (but maybe helpful to understand what is going on)

//if you dont want specific tests to run, put lower case 'x' in front - 'xtest(...')

//describe is wrapper for all tests regarding one function
//describe('description of function being tested', function(){
// })

describe('the sum function', function(){

    it('should only receive numbers as inputs', function(){
        expect(sum('a', true)).toBe('Please provide two numbers')
        expect(sum(4, 'string')).toBe("Please provide two numbers")
    })

    test('adds 1 + 2 to equal 3', function() {
        expect(sum(1, 2)).toBe(3)
    })

    // test('adds 1 + 2 to equal 3', function() {
    //     expect(sum(1, 2)).not.toBe(3)
    // })

    it("should return a number", function() {
        expect(typeof sum(1, 2)).toBe("number")
        expect(typeof sum(5, 40)).toBe("number")
    })
})
