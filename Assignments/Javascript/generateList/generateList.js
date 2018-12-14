var data = [
    {
        name: "Rick",
        age: 76
    },
]

var list = document.getElementById('list')

// Imperative Programming
for(var i = 0; i < data.length; i++){
    var myDiv = document.createElement('div')
    var myH1 = document.createElement('h1')
    var myP = document.createElement('p')

    myH1.textContent = data[i].name
    myP.textContent = data[i].age

    myDiv.appendChild(myH1)
    myDiv.appendChild(myP)

    list.appendChild(myDiv)
}

// Declarative Programming
for(var i = 0; i < data.length; i++){
    list.innerHTML += `
        <div class="blue">
            <h1>${data[i].name}</h1>
            <p>${data[i].age}</p>
            <button> Delete </button>
        </div>
    `
}



