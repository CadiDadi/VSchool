

var reverse = require('./reverse.js')

test('reverses order of arr', function(){
    expect(reverse([1,2,3])).toEqual([3,2,1])
})
