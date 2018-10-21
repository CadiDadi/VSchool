// 1. functions inside objects are called Methods

// ex function:
// function speak(word) {
//     console.log(word)
// }
// speak('hello')

// adding this function as a method inside an object:
var person = {
    name: 'Lexi',
    speak: function(word) {
        console.log(word + this.firstName)
    }
}
console.log()
person.speak('hello')

