

// material:
// https://coursework.vschool.io/javascript-constructor-functions/

// assignment:
// https://coursework.vschool.io/employee-records/
 
/////// Marcus notes: //////////////////

// function Car (mk, yr, mdl, color){
//     this.make = mk;
//     this.age = yr;
//     this.model = mdl;
//     this.color = color;
//     this.nos = function (){
//         console.log('Vrooooooooom')
//     }
//     this.changeColor = function(newColor){
//         this.color = newColor
//     }
    // this.growOlder = function(newAge){
    //     this.age++  // will increment by one each time the function is called - below: subaru.growOlder()
    // }
// }
// var subaru = new Car ("Subaru", 20, "Outback", "Black")
// console.log(subaru)
// subaru.changeColor('blue')
// subaru.growOlder()
// subaru.growOlder()
// subaru.growOlder()
// subaru.growOlder()
// console.log(subaru)

// function Person (name, hp, attacks){
//     this.name = name;
//     this.hp = hp;
//     this.attacks = attacks;
//     this.hit = function(newHp){
//         this.hp -= newHp
//     }
// }
// var tyler = new Person ('Tyler', 9001, ['kameyha meyha', 'kick'])
// console.log(tyler)
// tyler.hit(Math.floor(Math.random()*1000))
// console.log(tyler)


////////assignment//////////

// First, you will create an array named employees
var employees = []

// Next, you will create an Employee constructor with the first three attributes defined at the time of instantiation and the fourth will be defaulted to "Full Time".
// This constructor will also have a method called printEmployeeForm that prints the employee's information to the console.
function Employee (name, title, salary, status){
    this.name = name
    this.title = title
    this.salary = salary
    this.status = "Full Time"
    this.printEmployeeForm = function(){
        console.log('Name: ' + name + 'Title: ' + title + 'Salary: ' + salary + 'Status: ' + status)
    }
}

// Instantiate three employees
var jo = new Employee('Jo', 'CEO', '4m', 'retired')
// console.log(jo)

// Call the printEmployeeForm method for each employee
jo.printEmployeeForm()

var flo = new Employee('Flo', 'CFO', '3m', 'retired')
// console.log(flo)
// flo.printEmployeeForm()
var mo = new Employee('Mo', 'CIO', '2m', 'retired')
// console.log(mo)
// mo.printEmployeeForm()
// console.log(employees)

// Put the generated employees into the employees array using whichever method you prefer.
employees.push(jo)
// console.log(employees)
// CAN PUSH MORE THAT ONE OBJECT TO AN ARRAY AT THE SAME TIME:
employees.push(flo, mo)
console.log(employees)

// Override the status attribute to "Contract"
jo.status = 'Contract'
console.log(jo)
