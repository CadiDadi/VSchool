(function(){

    const colorBox = document.getElementById('color-box')
    const colorButton = document.getElementById('color-changer')
    const discoButton = document.getElementById('disco-button')

    // Add or remove colors from this box to see your colors displayed
        // Try adding: "yellow", "purple", "lightblue", "firebrick", "grey", "black", "pink"
    const colors = ["blue", "green", "red"]
    let currentIndex = 0
    let discoMode = false
    let discoInterval = null

    function changeColor(){
        let randomColor = colors[currentIndex]
        if(currentIndex === colors.length - 1){
            currentIndex = 0
        } else {
            currentIndex++
        }
        colorBox.style.backgroundColor = randomColor
    }

    function toggleDisco(){
        discoMode = !discoMode
        if(discoMode){
            discoButton.textContent = "Disco Mode ON"
            // Change the number to speedup or slow down disco
            discoInterval = setInterval(changeColor, 100) 
        } else {
            discoButton.textContent = "Disco Mode OFF"
            clearInterval(discoInterval)
            discoInterval = null
        }
    }

    colorButton.addEventListener("click", changeColor)
    discoButton.addEventListener("click", toggleDisco)

})()