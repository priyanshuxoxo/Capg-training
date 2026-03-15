import {expect, test} from "@playwright/test";


import fs from "fs"   //! we have to import whenever we use json data
import path from "path";


let dataFile=fs.readFileSync(path.join(__dirname,"../../testdata/data.json"),"utf-8");
let data=JSON.parse(dataFile);

// test("Reading json file",async({page})=>{
//     for(let i of data){
//         console.log(i.name);
//     }
// })
test("forApplication",async({page})=>{

    for(let i of data){
        await page.goto(i.url)
        console.log(page.title);

        
        await page.getByLabel("username").fill(i.Username)
        await page.getByLabel("password").fill(i.Password)
        await page.locator("#submit").click();
    }
})