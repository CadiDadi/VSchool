
// https://coursework.vschool.io/rpg/
// https://coursework.vschool.io/colossal-adventure-console-rpg/

// extra stuff - https://coursework.vschool.io/rpg-strategy/

// The point of this exercise is to better master Javascript functions, loops, conditionals, and some data types.

// Project Requirements:
// Console must greet player with a fun message
// Console must ask for the player's name and store it
// Walking:
// The console will ask the user to enter a "w" to walk
// Every time the player walks, a random algorithm will be run that determines if a wild enemy has appeared (A 1/3 or 1/4 chance of being attacked)
// If a wild enemy appears:
// The enemy is random (can be chosen out of a minimum of 3 different enemy names)
// The user can decide to attack or run
// If attacking, you will choose a random attack power between a min and max
// If running, you will choose a random number between 1 and 2 - meaning a 50% chance of escaping
// After the player attacks or runs the enemy attacks back for a random damage amount
// If the player kills the enemy you can give the Player some HP and a special item that is stored in the inventory
// If the enemy kills the player the console prints an cool death message and the game ends
// Inventory
// When the player kills enemies, they are awarded with items
// If the user enters 'Print' in the console, the console will print the players name, HP, and each item in their inventory
// Passing Criteria: Demo to the Instructor/TA & Code Review
// An instructor or TA will look through your code with you and make sure you have a solid grasp on using functions, loops, and conditionals in JavaScript, as well as to verify that you're following JavaScript code standards and good general programming practices.

var readline = require('readline-sync')

////////// nate's notes /////////// 

///////
// Players and Enemies Constructors //
function Player(name, hp){
    this.name = name
    this.hp = hp
    // attack for a random amount
    this.attack = function(){
        // returns a random number between 30 - 50
        return Math.floor(Math.random() * (50 - 30) + 30)
    }
}
function Enemy(type, hp){
    this.type = type
    this.hp = hp
    // attack for a random amount hp damage
    this.attack  = function(){
        return Math.floor(Math.random() * (25 - 5) + 5)
    }
}
////////
// Global Vars //
var player1 = new Player("Steve", 100)
var playerChoiceOptions = ["walk", "other stuff"]

// Game Functions //
function walk(){
    console.log("you walked!")
    // Generate Random number between 1 - 4
        // If attacked (1/4 chance), trigger attack function
            // attackSequence()
        // else, the user is taken back to initial question ( or anything else you'd like )
}

///////
// Game Loop //

console.log("Greetings Traveller!")
player1.name = readline.question("May I have your name? ")
console.log(`Thank you ${player1.name}, let's begin!`)

// End game conditions:
    // Player dies
    // Player wins (whatever that is)
    // Player has option to quit at anytime

    // While the player is alive
while(player1.hp > 0){
    // play the game
    var userChoice = readline.keyInSelect(playerChoiceOptions, "What would you like to do? ")
    // If the user choose to walk
    if(userChoice === 0){
        walk() 
    }
}

////////////////////////////////////////////////////
// You will have functions with loops inside of them
// Think, Do I need this action repeated?  Put it in a while loop
function attackSequence(){
    // var currentEnemy = new Enemy("orc", 200)
    while(player is alive && enemy is alive){
        // player attacks enemy
        // enemy attacks player
    }
    // battleResolution() // give the player loot
}

////////////////////////////
// Simulated Battle Sequence
    // var orc = new Enemy("Orc", 30)
    // console.log(orc)
    // var pAttackAmount = player1.attack()
    // var oAttackAmount = orc.attack()
    // orc.hp -= pAttackAmount
    // console.log(`The player hit the ${orc.type} for ${pAttackAmount} hp!`)
    // player1.hp -= oAttackAmount
    // console.log(`The ${orc.type} hit the player for ${oAttackAmount} hp!`)
    // console.log(enemy2)

function Enemy(type, hp){
    this.type = type
    this.hp = hp
    //attack for random amount
    this.attack = function(){
        //creates random # between 30-50
        Math.floor(Math.random() * (50 - 30) + 30)
    }
}
// var player1 = new Player('Scott', 100)
// console.log(player1)
// var orc = new Enemy('Orc', 30)

// console.log(player1.attack())
// console.log(orc)

// orc.hp -= player1.attack()
// player1.hp -= orc.attack()
// console.log(orc)























