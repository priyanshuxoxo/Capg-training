import {test} from "@playwright/test";
import path from "node:path";
import fs from 'fs';
import Example from "../PageObjectModel/example.page";

let dataFile=fs.readFileSync(path.join(__dirname,"../testdata/data.json"),"utf-8")
let data=JSON.parse(dataFile);

test("POM Example with Json",async({page})=>{
    let examplePage=new Example(page);
    
    for(let i of data){
        await page.goto(i.url);
        await examplePage.fillUsername(i.Username);
        await examplePage.fillPassword(i.Password);
        await examplePage.clickSubmit();
    }
})