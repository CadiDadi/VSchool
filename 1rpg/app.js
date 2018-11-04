var readline = require('readline-sync')

var gameEnd = false;
var items = ['sword', 'potion', 'club']

////////////Player//////////////

function Player (name, hp){
    this.name = name;
    this.hp = hp;
    this.items = [];
    this.attack = function(){
        //hp damage amount
        return Math.floor(Math.random()*3)+1
    }
}
var player1 = new Player('Traveller', 100)
///////////////////////////

// player1.hp -= enemy1.attack()
// console.log(player1.hp)

////////////start log//////////////

console.log("\nWelcome to BlackWood Jungle! \n")
var userName = readline.question('What is your name? ')
console.log(`\nHi ${userName}, enjoy your time here! \nBut beware of the wild animals!! `)

while(!gameEnd){
    // keyIn - have to press specific keys
    // ****add action if press any other keys
    var action = readline.keyIn('\n 1. Would you like to take a walk down the path? If so, press [w]. \n 2. If you are too scared, press [x] to leave now. \n  3. To fight press [f]. \n 4. To check your current weapons available to you, press [i]. \n\n Enter your option: ', {limit: ['w', 'x', 'i', 'f']})
    if (action === 'w'){
        walk()
        // break
    }
    else if (action === 'f'){
        fight()
        break
    }
    else if (action === 'i'){
        printInventory()
    }
    else if(action === 'x'){
        console.log("You're a chicken, get out of here!")
        break
    }
    //do i need this?
    else{
        console.log(gameEnd)
    }
}

function walk(){
    var walkRandom = (Math.floor(Math.random() * 3))
    console.log(walkRandom)
    if(walkRandom === 1) {
        enemy1.hp -= player1.attack()
        //change Enemy (all instances) to reflect which enemy
        console.log('\nEnemy attacked player \n')
        console.log(`Player hp: ${player1.hp} \nEnemy hp: ${enemy1.hp} \n`)
    }
    else{
        console.log("\nYou're lucky, no enemies attacked you on your walk! \n")
    }
}
////////////EnemieS//////////////
/////fix-finish - randomEnemy and fight
function Enemy (name, hp){
    this.name = name;
    this.hp = hp;
    this.attack = function(){
        //hp damage amount
        return Math.floor(Math.random()*10)+1
    }
}
var enemy1 = new Enemy("ghoul", 100)

)
function randomEnemy(){
    var enemyRandom = (Math.floor(Math.random() * 3))
    console.log(enemyRandom)
    //use Enemy constructor to create random enemies here
}
//all enemy1 need changed
function fight(){
    var currentEnemy = generateEnemy(function{
    //what here?
    })
    while(player1.hp >= 0 && enemy1.hp >=0){
        if(Math.random() < .5){
            player1.hp -= enemy1.attack()
            console.log('\n Enemy attacked player')
            console.log(`Player hp: ${player1.hp}\nEnemy hp: ${enemy1.hp}`)
        }else {
            enemy1.hp -= player1.attack()
            console.log('Player attacked enemy')
            console.log(`Player hp: ${player1.hp}\nEnemy hp: ${enemy1.hp}`)
        }
    }
    if(player1.hp <= 0){
        gameEnd = true;
    }else {
        var itemFound = items[Math.floor(Math.random()*3)]
        player1.items.push(itemFound)
        //this resets enemy hp to 10? do i need this?
        // enemy1.hp = 10
        console.log(`You earned a ${itemFound}! n\Your Inventory: ${player1.items}`)
    }
}

