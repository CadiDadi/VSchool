// axios

//https://www.taniarascia.com/how-to-use-local-storage-with-javascript/

// info & assignmentS
    // https://coursework.vschool.io/axios/
    // https://coursework.vschool.io/axios-todo-practice/
    // https://coursework.vschool.io/go-speed-clicker/

    // in html File, need add (in the body before app.js link):
        // <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
        // <script src="app.js"></script>
    // unless using in Node, you do not need this in js file. and it will not work if have the the Axios CDN url in html file (wont really use this)
        // var axios = require('axios')

// axios.get('https://swapi.co/api/people/1')
// console.log(lukeSkywalker)


// Axios Todo List Project

// API Documentation
    // Check our documentation on the V School Todo API to learn how to use it - https://coursework.vschool.io/v-schools-todo-api-documentation/

// Styling ideas:
    // If you want some pretty looking ToDo list website examples take a look - https://www.google.com/search?tbm=isch&q=bootstrap+todo&cad=h

// building a frontend site that pulls your list of todos down from the API to display them, and allows the user to perform other CRUD methods on them as well.

// For example, when the user adds a new todo, it will also POST that todo to the database using the provided API. This way, once the change is made, it's made permanently. When you refresh the page, since it's pulling from the data on the API, it should pull the current list of todos.

// You will do the parts of this assignment in steps. You're encouraged to have someone else look at your code between each step. This will help you to become comfortable talking about code, and might open you up to other ways of doing things. Any suggestions given to you by fellow students should be considered, but don't feel obligated to apply the suggestions you get.

// Requirements
    // Use the checklist in Trello to mark off each step before proceeding to the next.

// Part 1 - GET initial todo's
    //done// The user can see their current list of todos.
    //done// Todos show up as soon as the page loads.
    //done-ish(turns red instead of strikethrough//  If a todo item is complete, it should have a strikethrough line on it
    // Images should be displayed as images if there are any

function getData(){
    axios.get('https://api.vschool.io/scott/todo').then(function(response){
        console.log(response.data)
        listTodos(response.data)
    })
}
function listTodos(arr){
    for(var i = 0; i < arr.length; i++){
                    // var todoId = arr[i]._id  // delete button (x of 3) 
        // Create container for specific TodoS
            var todoContainer = document.createElement('div')
        // Add a class to that container (if you want)
            todoContainer.classList.add('todo')
        // add CSS color - grey
            todoContainer.style.backgroundColor = '#e5e5e5'
        // Create an html element
        // Put the Todo title inside of that element
            var title = document.createElement('h3')
            title.textContent = arr[i].title
        //make description show (3 lines code needed)
            var headerDescription = document.createElement('h5')
            headerDescription.textContent = arr[i].description
        //priceholder    
            var priceHolder = document.createElement('h5')
            priceHolder.textContent = arr[i].price
//image holder  ?????these 2 lines need fixed?????? //
            var imageHolder = document.createElement('img')
            imageHolder.setAttribute('src', arr[i].imgUrl)
        //checkbox
            var checkbox = document.createElement('input')
            checkbox.type = "checkbox"
        // checkbox.id = "id"
            var label = document.createElement('label')
        // label.htmlFor = "id"
            label.appendChild(document.createTextNode(' check if completed'))
        //if tasks are complete, CSS strikethrough - to indicate complete (do in CSS, right now show up different color)
            if(arr[i].completed === true){
                    title.style.backgroundColor = '#f3d'
                    // arr[i].completed.strike()
            }        
        // Put elementS on the DOM
            todoContainer.appendChild(title)
            todoContainer.appendChild(headerDescription)
            todoContainer.appendChild(priceHolder)
            todoContainer.appendChild(imageHolder)
            title.appendChild(checkbox)
            title.appendChild(label)
            document.getElementById('list-container').appendChild(todoContainer)
    }
}

// Part 2 - POST a new todo
    //done// The user can add new todos to their list. The new item should be posted to the todo API so a future reload of the page will still display that new todo item.

// TO DO - A user should be able to attach an imgUrl to the item

var todoForm = document.addTodoForm
todoForm.addEventListener("submit", function(event){
    event.preventDefault()
    // When the user submits
    // Grab the user inputS
        var title = todoForm.title.value
    // A user should be able to give the item a description (2 lines code (2nd = newToDo.description))
        var description = todoForm.description.value
    // A user should be able to give the item a price.
        var price = todoForm.price.value
    //image
        var imageUrl = todoForm.imageUrl
    // Put that inputS in an object
        var newTodo = {}
        newTodo.title = title
        newTodo.description = description
        newTodo.price = price
        newTodo.imageUrl = imageUrl
    // Send a Post request
        axios.post('https://api.vschool.io/scott/todo', newTodo).then(function(response){
        console.log(response.data) // should be new todo with an _id added
    // Then refresh page to see item added to existing list.
    })
})
getData()
    
// Part 3 - PUT Part 1
    //in part 1// Each todo will have a checkbox where it can be marked complete or incomplete
    //in part 1// Checking the checkbox should update the database

// Part 4 - DELETE
    // A user will be able to delete todos (this is different from marking a todo as "completed")
    // Each todo should be rendered with a button marked "X" or "Delete" that when clicked, will delete the Todo

// button.textContent = "Delete"// delete button 
// button.id = todoId  // delete button 


// Part 5 - PUT Part 2
    // Each Todo will have an "edit" button.
    // When clicked, the info will change to input boxes that are autofilled with the old Todo data
    // A user can change the value of these inputs
    // When the "edit" button is clicked, it will change to a "save" button.
    // When "save" is clicked, the form will disapear, and the new values will be displayed.
    // On save, the todo will be edited in the database
    // Read through the "using id" section in the API documentation to learn how to delete items using the item's unique id.


