////Preliminaries

//1
if(5 > 3) {
    console.log('is greater than')
}

cat = {
    length: 3
}
//2
if(cat.length === 3) {
    console.log('is the length')
}
//3
if('cat' === 'dog') {
    console.log('same')
}
else {
    console.log('not the same')
}

////Bronze
var person = {
    name: "Bobby",
    age: 19
}

//1
if(person.age >= 18) {
    console.log(person.name + ' is allowed to go to the movie')
}
//2
if(person.name[0] === 'B') {
    console.log('name starts with B, then allowed entry')
}
//3
if(person.name[0] === 'B' && person.age > 18) {
    console.log('name B & over 18, allowed entry')
}

////Silver

a = 1
b = '1'
// console.log(a)
// console.log(b)

//1
if(a === b) {
    console.log('strict')
}
else if(a == b) {
    console.log('loose')
}
else {
    console.log('not equal at all')
}

//2
c = 2
d = 4
e = 10
f = 5
g = 2

if(a <= c && c === d) {
    console.log('yes, 1 <= 2 and 2 = 4')
}

//3
if((a <= c && c === d) || (d > e && (f + e) > e)) {
    console.log('1 <= 2 and 2 = 4  OR 4 > 10 and (5+10)>10')
}

////gold

//1







