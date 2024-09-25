;
var GhaydaObj = {
    name: "ghayda",
    ageFunction: function (age) {
        if (age > 18) {
            console.log("Adult");
        }
        else {
            console.log("Minor");
        }
    }
};
GhaydaObj.ageFunction(27);
GhaydaObj.ageFunction(15);
var teacher1 = {
    teacherName: "Sara",
    subjects: ["Maths", "Physics", "Science"]
};
var teacherArr = teacher1.subjects;
for (var i = 0; i < teacherArr.length; i++) {
    console.log(teacherArr[i]);
}
var productArr = [
    { name: "telephone", price: 100, quantity: 2 },
    { name: "laptop", price: 250, quantity: 7 },
    { name: "tablet", price: 70, quantity: 6 }
];
productArr.forEach(function (element) {
    if (element.quantity > 5) {
        element.price = element.price * 0.90;
    }
});
console.log(productArr[1].price);
console.log(productArr[0].price);
