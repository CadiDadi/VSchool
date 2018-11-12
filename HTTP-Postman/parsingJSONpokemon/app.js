// see generateList.js (similar)

// https://coursework.vschool.io/http-and-the-internet/
// https://coursework.vschool.io/postman/
// https://coursework.vschool.io/postman-practice/
// https://coursework.vschool.io/parsing-json/


var xhr = new XMLHttpRequest()

xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        var jsonData = xhr.responseText;
        var data = JSON.parse(jsonData);
        
        // console.log(data)
        // console.log(data.objects)
        // console.log(data.objects[0].name) 
        // console.log(pokemon[3].name)
                
        var pokemon = data.objects[0].pokemon       
        var list = document.getElementById('list')
        for(var i = 0; i < pokemon.length; i++){
            list.innerHTML += `<div><li>${pokemon[i].name}</li></div>`
        }
    }
}

xhr.open("GET", "https://vschool-cors.herokuapp.com?url=http://api.vschool.io/pokemon", true)
xhr.send()

// have to change js code for this:
// xhr.open("GET", "https://vschool-cors.herokuapp.com?url=http://api.vschool.io/scott/todo", true)
// xhr.send()





















