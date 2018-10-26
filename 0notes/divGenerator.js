//generates a list of numbered divs:
        // div class='div0>div0</div>
        // <div class='div1>div1</div>
        // <div class='div2>div2</div>
        // ...


for (var i = 0; i < 20; i++) {
    console.log("<div class='div" + i + "'>div" + i + "</div>")
}