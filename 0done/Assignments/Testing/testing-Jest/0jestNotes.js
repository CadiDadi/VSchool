/////////// setup //////////////

// 1. create package.json file - npm init -y 
// 2. install jest:
    // a. 1. npm i jest
    // a. 2. modify package.json script/test:
    //         "scripts": {
    //             "test": "jest"
    //         },
    // b. npm i --save-dev jest (installs jest with DEV dependency (see in package.json))
// 3. watchAll (optional) - keeps testing dialog open, so then just need to enter 'test' not 'npm test' in console. set up with:
        // npm test -- -- watchAll

// file setup:

// -file 1 - our code/functions:
//         name it: addition.js
//         export it: module.export = addition
// -file 2 - to test our code/functions:
//         name it: addition.test.js
//         import it: var reverse = require('./reverse.js')

// https://coursework.vschool.io/jest-testing/
// https://coursework.vschool.io/bdd-vs-tdd-2/




