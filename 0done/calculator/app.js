////DOM Manipulation

// assignment
//http://coursework.vschool.io/simple-calculator/

// resources
//https://coursework.vschool.io/html-forms-part-1/
//https://coursework.vschool.io/html-forms-part-2/
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


// Blue when the mouse hovers over the square
//shortener (write box1 instead of docu...1")
// var box1 = document.getElementById("box1")
// box1.addEventListener("mouseover", myFunction2)
// function myFunction2(){
//     box1.style.backgroundColor = "blue"
// }
document.getElementById('add').addEventListener('click',function (e){
    e.preventDefault()
    var a,b,c;
    a = Number(document.getElementById("first1").value);
    b = Number(document.getElementById("second1").value);
    c = a + b;
    document.getElementById("answer1").innerHTML = c;
    })

    document.getElementById('sub').addEventListener('click',function (e){
        e.preventDefault()
        var a,b,c;
        a = Number(document.getElementById("first2").value);
        b = Number(document.getElementById("second2").value);
        c = a - b;
        document.getElementById("answer2").innerHTML = c;
        })
    
    document.getElementById('mult').addEventListener('click',function (e){
        e.preventDefault()
        var a,b,c;
        a = Number(document.getElementById("first3").value);
        b = Number(document.getElementById("second3").value);
        c = a * b;
        document.getElementById("answer3").innerHTML = c;
        })
        


    