// ☑ The addEventListener method OR onclick to call a function
// ☑ A for OR while loop
// ☑ A conditional statement (if, else if, else)

const onClickFunction = () => {
    document.getElementById("onClickButton").innerHTML = "On Click WORKED!"
}

document.getElementById("eventListenerButton").addEventListener("click", function() {
    document.getElementById("eventListenerButton").innerHTML = "Event Listener WORKED!"
    document.getElementById("eventListenerButton").style.background = 'purple'
  })

//event listener - click anywhere in document 
    //   document.addEventListener('click', function(){
    //       document.getElementById('demo').innerHTML = 'hi'
    //   })

// conditional statement (if, else if, else) - what time is it
function ifElseFunction() {
    var greeting;
    var time = new Date().getHours();
    if (time < 12) {
        greeting = "Good morning";
    } else if (time < 18) {
        greeting = "Good day";
    } else {
        greeting = "Good evening";
    }
    document.getElementById("ifElse").innerHTML = greeting;
}

const currentDate = () => {
    document.getElementById('date').innerHTML = Date()
}