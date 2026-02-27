console.log("Hii");
//!type inference
var a = 10;
a = 20;
// a="hii"
//!type annotation
var b = "hello";
// let c:number=20
// let d:boolean=true
// let e:null
// let f:undefined
var g;
g = "hii";
console.log(b);
console.log(a);
console.log(g);
//! array and tuples
var arr = [10, 20, 30, 40, 3.14];
var arr1 = ["Priyanshu", 40, true];
var arr2 = ["Priyanshu", 40, true];
console.log(arr);
arr1.push(false);
// arr2.push(false);
console.log(arr);
console.log(arr1);
var stud = {
    name: "priyanshu",
    age: 20
};
console.log(stud);
var greet = function (name, age) {
    console.log("name is : ".concat(name, " and age is : ").concat(age));
};
greet("Priyanshu", 20);
var greet1 = function (name, age) {
    console.log("name is : ".concat(name, " and age is : ").concat(age));
};
greet1("Priyanshu");
var greet2 = function (name, age) {
    if (age === void 0) { age = 35; }
    console.log("name is : ".concat(name, " and age is : ").concat(age));
};
greet2("Priyanshu");
var add = function (a, b) {
    return a + b;
};
console.log(add(10, 12));
var sub = function (a, b) {
    if (b === void 0) { b = 10; }
    return a - b;
};
console.log(sub(10));
var mul = function (a, b) {
    return a * b;
};
console.log(mul(10, 10.12));
var arr3 = [234, "Priyanshu", 123, "Arradhya"];
console.log(arr3);
var arr4 = [234, "Priyanshu", 123, "Arradhya"];
// arr4.push("Rohan")
console.log(arr3);
console.log(typeof arr4);
console.log(typeof arr);
var user1 = {
    name: "priyanshu",
    age: 20,
    id: 20
};
var user2 = {
    name: "Aaradhya",
    // age:24
    id: 22
};
console.log(user1);
user2.name = "Arraruu";
// user2.id=26
console.log(user2);
var mydog = {
    name: "tommy",
    age: 2,
    breed: "Vodaphone"
};
console.log(mydog);
var myCar = {
    brand: "Toyota",
    colour: "red",
    sunroof: function () {
        return "NO";
    },
    type: function () {
        return "Hybrid";
    }
};
console.log(myCar.sunroof(), " ", myCar.type());
