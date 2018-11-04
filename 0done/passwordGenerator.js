// https://coursework.vschool.io/random-password-generator-2/


function passwordGenerator() {
    var length = 12
    characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=<>"
    n = characters.length
    password = ""
    for (var i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * n));
    }
    return password
}
console.log(passwordGenerator())

