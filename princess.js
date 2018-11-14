// https://coursework.vschool.io/the-princess-is-in-another-castle/

// The Princess Is In Another Castle
// 14 JULY 2015 on Exercise, JavaScript, Problem Solving, Programming Principles, Level 2
// Requirements:

// Create a class for a player that has the following properties:

// name of type String

// totalCoins of type Number

// status of type String (options are Powered Up, Big,Small, and Dead)

// hasStar of type Boolean (Is a star active?)

// setName of type function - sets 'name' to "Mario" or "Luigi". Has a parameter called namePicked where you pass in "Mario" or "Luigi"

// gotHit of type function - this is called whenever the player is hit by an enemy. gotHit() will set the status property accordingly. (Statuses go from "Powered Up" to "Big" to "Small" to "Dead".)

// gotPowerup of type function - called when a powerup is received and sets the status accordingly. (Statuses go from "Small" to "Big" to "Powered Up". If you are Powered Up and it hits this function, you get a star)

// gameActive of type Boolean, true by default, becomes false when status is Dead

// addCoin of function - adds a coin to totalCoins

// print of type function - prints to the console the name, totalCoins, status, and star properties. Make sure you make this look nice such as:

// Name: Luigi,
// Status: Small, etc, etc
// Use that class to create the object.

// Create a random range function that returns either 0, 1, or 2.

// If the value is 0 call the gotHit() function on the object.
// If the value is 1 call the gotPowerup() function on the object
// If the value is 2 call the addCoin() function

// Then call the print method on the object.

// Now put the random range function inside a setInterval function that ends after gameActive === false

// The end product will look something like this:

        // see animated screen on website - https://coursework.vschool.io/the-princess-is-in-another-castle/


