
https://coursework.vschool.io/http-and-the-internet/

https://coursework.vschool.io/postman/
https://coursework.vschool.io/postman-practice/
https://coursework.vschool.io/parsing-json/

//////////////////
postman

POST - posting new object
    *can only post 1 at a time(multiple objectswithin one object?)
    -object ID not required in URL
    -Body(may have to scroll up if cant see Title Bar with Body)/Raw/JSON

GET

PUT
    -must use an object's ID in URL
    -change some part of object info

DELETE
    -select object ID you want to delete (dont delete the whole thing by not using an ID (unless want to delete all))


///////////
CRUD

In computer programming, create, read, update, and delete (CRUD) are the four basic functions of persistent storage. Alternate words are sometimes used when defining the four basic functions of CRUD, such as retrieve instead of read, modify instead of update, or destroy instead of delete.


AJAX
https://coursework.vschool.io/ajax/

    // Asychronous Javascript and XML
        // It is the ability for a webpage to reload a specific peice
        // without having to refesh the entire page.


////////nate notes///////////

var xhr = new XMLHttpRequest()

// 4 states/steps for an HTTP request
    // 1: The request is sent
    // 4: The response came back

xhr.onreadystatechange = function(){
    // This is saying:
        // Once the data has come back && the data is in good order
    if(xhr.readyState == 4 && xhr.status == 200){
        var jsonData = xhr.responseText
        var data = JSON.parse(jsonData)
        // parsePokemon(data)
    }
}

//     Request Type             - URL -                                         -  Async (true)
xhr.open("GET", "https://vschool-cors.herokuapp.com?url=http://swapi.co/api/people", true)
//     Send Request
xhr.send()

// function parsePokemon(data){

// }














