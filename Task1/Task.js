var myNum = 50;
if (myNum % 2 == 0) {
    console.log("The number is even");
}
else {
    console.log("The number is odd");
}
var arrayNumbers = [200, 250, 230, 150, 105, 400];
var threshold = 230;
for (var i = 0; i < arrayNumbers.length; i++) {
    if (arrayNumbers[i] > threshold) {
        console.log(arrayNumbers[i]);
    }
}
var users = [
    { name: "Ghayda", age: 27, isAdmin: true },
    { name: "Ali", age: 22, isAdmin: false },
    { name: "Sara", age: 30, isAdmin: true },
];
var oldestAge = 0;
var oldestName = "";
for (var i = 0; i < users.length; i++) {
    if (users[i].age > oldestAge) {
        oldestAge = users[i].age;
        oldestName = users[i].name;
    }
}
console.log(oldestAge);
console.log(oldestName);
