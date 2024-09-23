var myNum: number = 50;
if (myNum % 2 == 0) {
    console.log("The number is even");
}
else {
    console.log("The number is odd")
}



let arrayNumbers : Number[] = [200,250,230,150,105,400];
let threshold : Number = 230;
for (var i=0; i<arrayNumbers.length; i++)
{
    if (arrayNumbers[i] > threshold) 
    {
        console.log(arrayNumbers[i])
    }
}



type User = {name: string, age:number, isAdmin:boolean};

let users : User[] = [
    {name: "Ghayda", age: 27, isAdmin: true},
    {name: "Ali", age: 22, isAdmin: false },
    {name: "Sara", age: 30, isAdmin: true},
]

let oldestAge=0;
let oldestName="";
for (var i=0; i<users.length; i++)
{
    if (users[i].age>oldestAge)
    {
        oldestAge= users[i].age;
        oldestName= users[i].name;
    }
}
console.log(oldestAge);
console.log(oldestName);

