// task1
// Task 1: Verify Interface Properties
// You are given an object that follows an interface Person with properties name and age. Check if the age is above 18 and print "Adult" if true, otherwise print "Minor."
interface Person {
    name: string,
    ageFunction : (age : number) => void
};

let GhaydaObj : Person = {
    name: "ghayda",
    ageFunction : (age : number) => {
        if (age > 18) {
            console.log("Adult")
        }
        else {
            console.log("Minor")
        }
    }

}

GhaydaObj.ageFunction(27);
GhaydaObj.ageFunction(15);


// task2
// Task 2: Iterate Through an Array in an Interface
// You are given an object that follows an interface Teacher with properties name and subjects (an array of subjects). Print all the subjects the teacher teaches.
interface teacherObj {
    teacherName : string,
    subjects : string[],
}

let teacher1 : teacherObj = {
    teacherName : "Sara",
    subjects : ["Maths","Physics","Science"]
}

let teacherArr = teacher1.subjects;
for (var i : number =0; i<teacherArr.length; i++)
{
    console.log(teacherArr[i])
}


// task3
// Task 3: Modify Object in an Array of Interfaces
// You are given an array of Product interfaces, where each product has a name, price, and quantity. Write a script to increase the price of each product by 10% if the quantity is greater than 5.
interface product  {
    name : string,
    price : number,
    quantity : number,
}
let productArr : product[] = [
    {name: "telephone", price: 100, quantity: 2},
    {name: "laptop", price:250, quantity: 7},
    {name: "tablet", price:70, quantity: 6}
]

productArr.forEach(element => {
    if (element.quantity>5) 
        {
            element.price= element.price*0.90;
        }    
});

console.log(productArr[1].price);
console.log(productArr[0].price);

// task4
// Validate Optional Function in Interface with Default Behavior
// You have an interface Device with an optional method start(). If the device has a start method, it should be called, otherwise, log "Device starting with default settings."

interface Device {
    start?(): void;
}

let D: Device =
{
    start() {
        console.log("Device has start");
    }
};

let D2: Device =
    {};

if (D.start) {
    console.log("Device a has start function");
}
else {
    console.log("Device doesn't have start function");
}

let check2 = (D2.start) ? console.log("Device has a start function") : console.log("Device doesn't a have start function");
