import {test} from "@playwright/test";

//!Hooks-------------------------->>>>>>>>

test.beforeAll("",async()=>{
    console.log("before all");
    
})
test.beforeEach("",async()=>{
    console.log("before each");
    
})

test.afterAll("",async()=>{
    console.log("after all");
    
})

test.afterEach("",async()=>{
    console.log("after each");
    
})

test("test1",async({page})=>{
    console.log("test1");
    
})

test("test2",async({page})=>{
console.log("test2");

})