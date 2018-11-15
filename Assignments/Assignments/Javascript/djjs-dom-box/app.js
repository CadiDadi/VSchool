////DOM Manipulation

// assignment
// https://coursework.vschool.io/dj-js/

// resources
// https://coursework.vschool.io/javascript-dom-manipulation/
// https://coursework.vschool.io/event-listeners/
// https://www.w3schools.com/jsref/dom_obj_event.asp

//log
// console.log(document)
//dir
// console.dir(document)

// // Window ->
// console.dir(window)

// Grab that input
// var candyInput = document.getElementById('candyInput')
    // .value => see what the user typed

// // Grab the candyList 'ul'
// var candyList = document.getElementById('candyList')

// // Create the new HTML element 
// var newCandyItem = document.createElement('li')

// // Add Text to an element
//     // .textContent  &  .innerHTML
// newCandyItem.textContent = "Oreos"

// // Tell list to add a new child 'newCandyItem'
// candyList.appendChild(newCandyItem)
// // candyList.innerHTML = 'as<h1> Hello World </h1>'

// OTHER DOM SELECTORS
    // getElementById(id)
    // getElementsByClassName(className)
    // getElementsByTagName('div')

 
/////////add 3 items - exercise - GOT TO ADD ONE, BUT NOT > 1/////
// var addThree = document.getElementById('addThree') 
// var addToThree = addThree.value
// var newThree = document.createElement('div', 'div')
// addThree.textContent = ['cats', ' dogs']
// addThree.appendChild(newThree)


//////event listeners/////
//click,scroll,etc

// First way of writing event listener
// document.getElementById('addCandy').addEventListener('click', function (){
//     var input = document.getElementById('candyInput').value
//     document.getElementById('candyList').innerHTML += `<li>${input}</li>`
// })

// Second way of writing event listener
// document.getElementById('addCandy').click(function (){
//     var input = document.getElementById('candyInput').value
//     document.getElementById('candyList').innerHTML += `<li>${input}</li>`
// })

// window.addEventListener('scroll', function () {
//     document.getElementById('box1').style.backgroundColor = 'red'
// })

// function myFunction(){
//     console.log("You clicked me!");
// }

// document.getElementById("this-div").addEventListener('click', function(){
//     console.log("You clicked me!");
// })

//////////assignment///////////

// https://coursework.vschool.io/dj-js/

// change the color of a square on the page by interacting with different HTML Events.

//shortener (write box1 instead of docu...1")
var box1 = document.getElementById("box1")

// The square's color will change as follows:


// Blue when the mouse hovers over the square
box1.addEventListener("mouseover", myFunction2)
function myFunction2(){
    box1.style.backgroundColor = "blue"
}

// Red when the mouse button is held down (single click) over the square
box1.addEventListener("click", myFunction1)
function myFunction1(){
    box1.style.backgroundColor = "red"
}

// Yellow when the mouse button is let go over the square
box1.addEventListener("mouseup", myFunction3)
function myFunction3(){
    box1.style.backgroundColor = "yellow"
}

// Green when the mouse is double clicked in the square
box1.addEventListener("dblclick", myFunction1)
function myFunction1(){
    box1.style.backgroundColor = "green"
}

// Orange when the mouse scroll is used somewhere in the window (not just over the square).
box1.addEventListener("mouseleave", myFunction4)
function myFunction4(){
    box1.style.backgroundColor = "orange"
}

// You should also be able to press the first letter of the colors (typing "r" on the keyboard for "red", for example) and have the box1 change to that color.sss Check this site for a full list of keyboard key codes:  https://www.w3schools.com/jsref/dom_obj_event.asp

// box1.addEventListener("keydown", myFunction5)
// function myFunction5(){
//     box1.style.backgroundColor = "purple"
// }





    