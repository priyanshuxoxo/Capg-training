"use strict";
// let a = BigInt(1234567890123456789012345678901234567890);
let b = 1234567890123456789012345678901234567890;
let c = "Hello";
let d = "Hello";
console.log(Symbol(c) === Symbol(d));
console.log(c === d);

// console.log(typeof a);
console.log(typeof b);

//homogenous array
let arr = [1, 2, 3, 4, 5];
console.log(arr);
//heterogenous array
let arr2 = [1, "Hello", true, null, undefined, { name: "John" }, [1, 2, 3]];
console.log(arr2);

//object
let student = {
  name: "Priyanshu",
  age: 21,
  passed: true,
  college: "JECRC University",
};

console.log(student);
console.log(student.name);
delete student.passed;
console.log(student);

let namei = "Priyanshu";
console.log(namei[2]);
// delete namei[2];
// namei[2] = "b";
console.log(namei);

//functions
function add() {
  console.log(10 + 20);
}
add();

function add2(a, b = 7) {
  return a + b;
}
console.log(add2(20));

//ananymous function
let a = function () {
  console.log("hii");
};
a();

//arrow function
let add4 = (a, b) => a + b;
console.log(add4(10, 20));

// x = 10;
// console.log(x);

let bb = () => {
  //   console.log("hello");
  return "hii";
  //   console.log("hello");
};

// a();
console.log(bb());

//fucntions storing inside the variable is known as fucntion expression

// whichever funtion wer are storing inside the variable isknown as first class or first citizen function
