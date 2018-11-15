

// airline forms & simple calculator - same principles
//https://coursework.vschool.io/html-forms-part-1/
//https://coursework.vschool.io/html-forms-part-2/
// https://coursework.vschool.io/javascript-dom-manipulation/
// https://coursework.vschool.io/event-listeners/
// https://www.w3schools.com/jsref/dom_obj_event.asp

// mario assignment
// https://coursework.vschool.io/mario-pest-control/

//
var mariopest = document.marioForm
mariopest.addEventListener('submit', function(event){
    event.preventDefault()

    var goombaBaddies = mariopest.goombaTotal.value
    var bobombBaddies = mariopest.bobombTotal.value
    var cheepBaddies = mariopest.cheepsTotal.value  
    var totalPoints = Number(goombaBaddies)+Number(bobombBaddies)+Number(cheepBaddies)
    document.getElementById('baddiesCaptured').textContent = totalPoints

    var goombaTotal = mariopest.goombaTotal.value * 5
    var bobombTotal = mariopest.bobombTotal.value * 7
    var cheepTotal = mariopest.cheepsTotal.value *11  
    var totalPoints = Number(goombaTotal)+Number(bobombTotal)+Number(cheepTotal)
    document.getElementById('pointsTotal').textContent = totalPoints
})






