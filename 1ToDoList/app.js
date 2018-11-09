// axios

//https://www.taniarascia.com/how-to-use-local-storage-with-javascript/
// https://www.sitepoint.com/building-list-jquery-local-storage/

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
    //done// Images should be displayed as images if there are any

axios.get('https://api.vschool.io/scott/todo').then(function(response){
    // const toDoGet = response.data
    // toDoGet.forEach(function(toDoItem){
    //     listTodos(toDoGet)
    // })
listTodos(response.data)
})
function listTodos(arr){
    for(var i = 0; i < arr.length; i++){
        // completed task element (for checkbox)
            var todoId = arr[i]._id
        // Create container for specific TodoS
            var todoContainer = document.createElement('div')
        // Add a class to that container (if you want)
            todoContainer.classList.add('todo')
        // add CSS to task containerS
            todoContainer.style.backgroundColor = '#e5e5e5'
            todoContainer.style.borderStyle = 'solid'
            todoContainer.style.padding = "0px 5px 0px 5px"
            todoContainer.style.margin = '5px'
        //title 
            var title = document.createElement('h2')
            title.textContent = arr[i].title
            title.style.borderStyle = 'solid'
            title.style.borderWidth = '1px'
            title.style.padding = "1px 5px"
            title.style.margin = '10px 3px 5px 3px'
        //description
            var headerDescription = document.createElement('h5')
            headerDescription.textContent = arr[i].description
            headerDescription.style.borderStyle = 'dotted'
            headerDescription.style.borderWidth = '1px'
            headerDescription.style.padding = "5px"
            headerDescription.style.margin = '1px 10px 1px 20px'
        //priceholder    
            var priceHolder = document.createElement('h5')
            priceHolder.textContent = arr[i].price
            priceHolder.style.borderStyle = 'dotted'
            priceHolder.style.borderWidth = '1px'
            priceHolder.style.padding = "5px"
            priceHolder.style.margin = '1px 10px 1px 20px'
            if(!arr[i].price){
                priceHolder.style.display = 'none'
            }
        //image holder (note setAttribute)
            var imageHolder = document.createElement('img')
            imageHolder.setAttribute('src', arr[i].imgUrl)
            imageHolder.style.height = '70px'
            imageHolder.style.width = '70px'
            imageHolder.style.padding = "5px"
            imageHolder.style.margin = '1px 0px 1px 70px'
            if(!arr[i].imgUrl){
                imageHolder.style.display = 'none'
            }
        //checkbox
            var checkbox = document.createElement('input')
            checkbox.type = "checkbox" 
            checkbox.id = todoId 
            checkbox.addEventListener("change", function(event){
                // event.preventDefault()
                let completeObj = {}
                completeObj.completed = this.checked
                console.log(checkbox.id)
                axios.put(`https://api.vschool.io/scott/todo/${this.id}`, completeObj).then(function(response){
                    console.log(response.data)
                })
            })
        // label for checkbox
            var label = document.createElement('label')
            label.style.color = '#00ff'
            label.style.fontSize = '14px'
            label.appendChild(document.createTextNode(' completed'))
        //checkbox - if tasks are complete, CSS strikethrough - to indicate complete (do in CSS, right now show up different color)
            if(arr[i].completed === true){                    
                    //if COMPLETED status is TRUE, changes todo box color to green
                    checkbox.checked = true
                    todoContainer.style.backgroundColor = '#3f3'
                    imageHolder.style.display = 'none'
                    headerDescription.style.display = 'none'
                    priceHolder.style.display = 'none'

                    // title.strike()
            } 
        // delete button
            var deleteButton = document.createElement('button')
            deleteButton.textContent = "Delete Task"
            deleteButton.id = todoId 
            deleteButton.style.margin = '4px'
            deleteButton.style.backgroundColor = '#ff0000' 
            deleteButton.addEventListener("click", function(event){
                // event.preventDefault()
                axios.delete(`https://api.vschool.io/scott/todo/${this.id}`).then(function(response){
                    console.log(response.data)
                    // todoContainer.removeChild(this.parentNode)
                })
            })
console.log(arr[i].completed)
                         
        // Put elementS on the DOM
            todoContainer.appendChild(checkbox)
            todoContainer.appendChild(label)
            todoContainer.appendChild(title)
            todoContainer.appendChild(headerDescription)
            todoContainer.appendChild(priceHolder)
            todoContainer.appendChild(deleteButton)
            todoContainer.appendChild(imageHolder)
            document.getElementById('list-container').appendChild(todoContainer)
    }
}
// Part 2 - POST a new todo
    //done// The user can add new todos to their list. The new item should be posted to the todo API so a future reload of the page will still display that new todo item.

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
    //User can attach an image Url  - sample image url -   http://pngimg.com/uploads/smiley/smiley_PNG36233.png
        var imageUrl = todoForm.imageUrl.value
    // Put the inputS in an object
        var newTodo = {}
        newTodo.title = title
        newTodo.description = description
        newTodo.price = price
        newTodo.imgUrl = imageUrl
    // Send a Post request
        axios.post('https://api.vschool.io/scott/todo', newTodo).then(function(response){
        listTodos(response.data) // should be new todo with an _id added
    // Then refresh page to see item added to existing list.
        })
        .catch(function(err){
            console.log(err)
        })
})
    
// Part 3 - PUT - Part 1  //done - in part 1// 
    //done - in part 1// Each todo will have a checkbox where it can be marked complete or incomplete
    //done - in part 1// Checking the checkbox should update the database
// Part 4 - DELETE  //done - in part 1// 
    // A user will be able to delete todos (this is different from marking a todo as "completed")
    // Each todo should be rendered with a button marked "X" or "Delete" that when clicked, will delete the Todo
// Part 5 - PUT Part 2
    // Each Todo will have an "edit" button.
    // When clicked, the info will change to input boxes that are autofilled with the old Todo data
    // A user can change the value of these inputs
    // When the "edit" button is clicked, it will change to a "save" button.
    // When "save" is clicked, the form will disapear, and the new values will be displayed.
    // On save, the todo will be edited in the database
    // Read through the "using id" section in the API documentation to learn how to delete items using the item's unique id.


