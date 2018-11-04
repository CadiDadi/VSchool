// http://coursework.vschool.io/count-code/

//testing with Jest
    // npm init -y 
    // npm i --save-dev jest (installs jest with DEV dependency (see in package.json))

    function countCode(string){
        if(typeof string !== "string"){
            return "You must provide a string as an argument"
        }
    }


    module.exports = countCode

    