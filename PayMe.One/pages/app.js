

var giftCards = document.giftForm
giftCards.addEventListener('submit', function(event){
    event.preventDefault()

    var moonCards = giftCards.moonTotal.value
    var lamboCards = giftCards.lamboTotal.value
    var holidayCards = giftCards.holidaysTotal.value  
    var totalcards = Number(moonCards)+Number(lamboCards)+Number(holidayCards)
    document.getElementById('cardssCaptured').textContent = totalcards

    var moonTotal = giftCards.moonTotal.value * 20
    var lamboTotal = giftCards.lamboTotal.value * 20
    var holidayTotal = giftCards.holidaysTotal.value * 20  
    var totalcards = Number(moonTotal)+Number(lamboTotal)+Number(holidayTotal)
    document.getElementById('cardsTotal').textContent = '$ ' + totalcards
})




