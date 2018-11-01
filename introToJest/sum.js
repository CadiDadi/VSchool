

function sum(a, b){
    return a + b 
}

function sum(a, b){
    if(typeof a !== "number" || typeof b !== "number"){
        return "Please provide two numbers"
    }
    return a + b
}


//exporting so any file in this directory can use the function 'sum'
module.exports = sum














