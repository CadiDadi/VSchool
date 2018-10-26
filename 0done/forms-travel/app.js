// forms

// Part 1
//https://coursework.vschool.io/html-forms-part-1/

//part 2
// material: https://coursework.vschool.io/html-forms-part-2/

//assignment: https://coursework.vschool.io/travel-form/

//e short for event
// document.location.addEventListener("submit", function(e){
//     e.preventDefault()
//     var checkedLocation = [];
//     var checkedBoxes = document.querySelectorAll("input[name=likes]:checked");
//     for (var i = 0; i < checkedBoxes.length; i++) {
//         checkedLocation.push(checkedBoxes[i].value);
//     }
//     console.log(checkedLocation)
// });

// https://www.sitesbay.com/js-program/javascript-sum-of-two-numbers-in-javascript
function add(){
    var a,b,c;
    a=Number(document.getElementById("first").value);
    b=Number(document.getElementById("second").value);
    c= a + b;
    document.getElementById("answer").value= c;
    }


var myForm = document.userInfo
myForm.addEventListener('submit', function(e) {
    e.preventDefault()
    var firstName = myForm.firstName.value
    var lastName = myForm.lastName.value
    var age = myForm.age.value
    var gender=myForm.genderType.value

    var location = myForm.location
    var checkedLocation = [];
    var checkedBoxes = document.querySelectorAll("input[name=loco]:checked");
    for (var i = 0; i < checkedBoxes.length; i++) {
        checkedLocation.push(checkedBoxes[i].value);
    }
      
    ///do same as location for DIET

    // to separate into different lines - new line: \n
    alert(`First Name: ${firstName} \n Last Name: ${lastName} \n Age: ${age} /n Gender: ${gender} \n location: ${checkedLocation} \n diet`) 
})

//   console.log(document.userInfo.lastName)

// userInfo.addEventListener('submit', function(event){
//     e.preventDefault()
//     var firstName = userInfo.firstName.value
//     var lastName = userInfo.lastName.value

//     alert(`First Name: ${firstName}, Last Name: ${lastName}`)
// })

// // 2 //

// document.gender.addEventListener('submit', function(event){
//     event.preventDefault()

//     var noun = document.gender.noun.value
//     var verb = document.gender.verb.value
//     var adverb = document.gender.adverb.value
    
//     alert(`The ${noun}  did ${verb} ${adverb}  in it's home`)
// })






