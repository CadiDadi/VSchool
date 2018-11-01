var readline = require('readline-sync')

var gameEnd = false;
var items = ['sword', 'potion', 'club']


function Player (name, hp){
    this.name = name;
    this.hp = hp;
    this.items = [];
    this.attack = function(){
        return Math.floor(Math.random()*3)+1
    }
}

function Enemy (name, hp){
    this.name = name;
    this.hp = hp;
    this.attack = function(){
        return Math.floor(Math.random()*3)+1
    }
}

var enemy1 = new Enemy('Orc', 10)
var player1 = new Player('Scott', 100)

// console.log(player1.hp)
// player1.hp -= enemy1.attack()
// console.log(player1.hp)


while(!gameEnd){
    var action = readline.keyIn('Would you like to walk or fight? Press [w] to walk or [f] to fight.', {limit: ['w', 'f', 'p']})
    if (action === 'w'){
        walk()
    }else if (action === 'f'){
        fight()
    }else if (action === 'p'){
        printInventory()
    }
}

function fight (){
    while(player1.hp >= 0 && enemy1.hp >=0){
        if(Math.random() < .5){
            player1.hp -= enemy1.attack()
            console.log('Enemy attacked player')
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
        enemy1.hp = 10
        console.log(`You earned a ${itemFound}, Player Items: ${player1.items}`)
    }
}