
/// return if even or odd ///
function isEven() {
            console.log("it's even")
        }

var isOdd = function() {
    console.log("it's odd")
}

function checkNumbers(arr) {
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 0) {
            isEven()
        }
        else {
            isOdd()
        }
    }
}
checkNumbers([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])


///// return odd #s /////
function removeEven(arr, invert = false) {
    for (let i = 0; i < arr.length; ++i) {
        const even = arr[i] % 2 === 0
        if (even ^ invert) {
            arr.splice(i--, 1)
        }
    }
}

const arr1 = [0, 1, 2, 3, 4, 5, 6]
removeEven(arr)
console.log(arr)


