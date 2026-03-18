import {test} from "@playwright/test"

test("Custom Wait",async({page})=>{

    await page.goto("https://www.amazon.in/")
    await page.waitForFunction(()=>{
        
    })
})