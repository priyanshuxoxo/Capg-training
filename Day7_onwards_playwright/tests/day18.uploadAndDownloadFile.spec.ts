import { test } from '@playwright/test';
import path from 'path';


//!_______________A1________________

test("Upload files",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator("#singleFileInput").setInputFiles("C:/Users/sriva/OneDrive/Desktop/CAPG_JS/Day7_onwards_playwright/tests/uploadFiles/demo.txt")
    await page.getByRole('button',{name:"Upload Single File"}).click();
    await page.waitForTimeout(5000)
    
})
test("Upload Multiple files",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    let files:string[]=["C:/Users/sriva/OneDrive/Desktop/CAPG_JS/Day7_onwards_playwright/tests/uploadFiles/demo.txt","C:/Users/sriva/OneDrive/Desktop/CAPG_JS/Day7_onwards_playwright/tests/uploadFiles/demo.xls"]
    await page.locator("#multipleFilesInput").setInputFiles(files)
    await page.getByRole('button',{name:"Upload Multiple Files"}).click();
    await page.waitForTimeout(5000)
    
})

test("Upload files from local system",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator("#singleFileInput").setInputFiles("C:/Users/sriva/OneDrive/Desktop/backend-deep/New Text Document.txt")
    await page.getByRole('button',{name:"Upload Single File"}).click();
    await page.waitForTimeout(5000)
    
})

//!_______________A2___________________

test("Upload files A2",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator("#singleFileInput").setInputFiles(path.join(__dirname,"/uploadFiles/demo.txt"))
    await page.getByRole('button',{name:"Upload Single File"}).click();
    await page.waitForTimeout(5000)
    
})

test("Upload Multiple files A2",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
      let files:string[]=["C:/Users/sriva/OneDrive/Desktop/CAPG_JS/Day7_onwards_playwright/tests/uploadFiles/demo.txt","C:/Users/sriva/OneDrive/Desktop/CAPG_JS/Day7_onwards_playwright/tests/uploadFiles/demo.xls"]
    await page.locator("#multipleFilesInput").setInputFiles([path.join(__dirname,"../tests/uploadFiles/demo.xls"),path.join(__dirname,"../tests/uploadFiles/demo.txt")])
    await page.getByRole('button',{name:"Upload Multiple Files"}).click();
    await page.waitForTimeout(5000)
    
})


test("downloads",async({browser})=>{
     let context = await browser.newContext();
    let page = await context.newPage();
    await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0")
    await page.getByPlaceholder("Enter text here").fill("My name is Priyanshu")
    await page.getByPlaceholder("Filename").fill("profilee.txt")
    const [downloadFile]=await Promise.all([
        page.waitForEvent("download"),
        page.locator("#downloadButton").click()
    ])
    console.log("Downloaded file:",downloadFile.suggestedFilename());
    let loc="../downloads"
    let fileName=downloadFile.suggestedFilename();

    await  downloadFile.saveAs(path.join(loc,fileName))

})
test.only("downloads with path.join ",async({browser})=>{
     let context = await browser.newContext();
    let page = await context.newPage();
    await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0")
    await page.getByPlaceholder("Enter text here").fill("My name is Priyanshu")
    await page.getByPlaceholder("Filename").fill("profile2e.txt")
    const [downloadFile]=await Promise.all([
        page.waitForEvent("download"),
        page.locator("#downloadButton").click()
    ])
    console.log("Downloaded file:",downloadFile.suggestedFilename());
    let fileName=downloadFile.suggestedFilename();
    let downloadLocation=`../downloads/${fileName}`
    await downloadFile.saveAs(downloadLocation);
})
