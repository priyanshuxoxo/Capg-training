console.log("Hii");
//!type inference
let a=10;

a=20
// a="hii"

//!type annotation
let b:string="hello"
// let c:number=20
// let d:boolean=true
// let e:null
// let f:undefined
let g:any
g="hii"

console.log(b);
console.log(a);
console.log(g);

//! array and tuples
let arr:number[]=[10,20,30,40,3.14]
let arr1:[string,number,boolean]=["Priyanshu",40,true]
let arr2:readonly[string,number,boolean]=["Priyanshu",40,true]
console.log(arr); 
arr1.push(false);
// arr2.push(false);
console.log(arr); 
console.log(arr1); 
let stud:{name:string,age?:number}={

    name:"priyanshu",
    age:20
}

console.log(stud);

const greet=(name:string,age:number):void=>{
    console.log(`name is : ${name} and age is : ${age}`);
    
}
greet("Priyanshu",20);
const greet1=(name:string,age?:number):void=>{
    console.log(`name is : ${name} and age is : ${age}`);
    
}
greet1("Priyanshu");
const greet2=(name:string,age:number=35):void=>{
    console.log(`name is : ${name} and age is : ${age}`);
    
}
greet2("Priyanshu");

const add=(a:number,b:number):number=>{
    return a+b
}
console.log(add(10,12));

const sub=(a:number,b:number=10):number=>{
    return a-b
}
console.log(sub(10));

const mul=(a:number,b:number):number=>{
    return a*b
}
console.log(mul(10,10.12));


let arr3:(string|number)[]=[234,"Priyanshu",123,"Arradhya"]
console.log(arr3);
let arr4:readonly(string|number)[]=[234,"Priyanshu",123,"Arradhya"]
// arr4.push("Rohan")
console.log(arr3);
console.log(typeof arr4);
console.log(typeof arr);


//! Interface

interface User{
    name:string,
    age?:number
    readonly id:number
}

const user1:User={
    name:"priyanshu",
    age:20,
    id:20

}
const user2:User={
    name:"Aaradhya",
    // age:24
    id:22
}

console.log(user1);
user2.name="Arraruu"
// user2.id=26
console.log(user2);

//
interface Animal{
    name:string,
    age:number
}
interface Dog extends Animal{

    breed:string
}
let mydog:Dog={
    name:"tommy",
    age:2,
    breed:"Vodaphone"
}

console.log(mydog);


interface Car {
    brand:string,
    colour:string,
    sunroof():string
    type():string
}
let myCar:Car={
    brand:"Toyota",
    colour:"red",
    sunroof(){
        return "NO"
        
    },
    type(){
        return "Hybrid"
    }
}
console.log(
    myCar.sunroof()," ",
    myCar.type()
);
