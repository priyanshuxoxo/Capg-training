import {expect, test} from "@playwright/test";
import excel from "exceljs"
import path from "node:path";

test("Write content in excel",async({page})=>{

    const book=new excel.Workbook();
    await book.xlsx.readFile(path.join(__dirname,"../../testdata/demo2.xlsx"))
    let sheet=book.getWorksheet("Sheet3")
    if(!sheet){
        sheet=book.addWorksheet("Sheet3")        //?add the wroksheet
    }
    sheet.getRow(1).getCell(1).value= "Playwright";
   let arr:string[]=["name","age","address","state","college"]
    for(let i=0;i<arr.length;i++){
        sheet.getRow(1).getCell(i+1).value= arr[i];

    }
    book.xlsx.writeFile(path.join(__dirname,"../../testdata/demo2.xlsx"));

})
test.only("Write content in excel using dynamic array",async({page})=>{

    const book=new excel.Workbook();
    await book.xlsx.readFile(path.join(__dirname,"../../testdata/demo2.xlsx"))
    let sheet=book.getWorksheet("Sheet4")
    if(!sheet){
        sheet=book.addWorksheet("Sheet4")        //?add the wroksheet
    }
    await page.goto("https://www.amazon.in/")
    await page.getByPlaceholder("Search Amazon.in").fill("shoes");
    expect(page.locator("//div[@class='left-pane-results-container']/child::div")).toBeVisible()
    // await page.waitForSelector();
    const data=await page.locator("//div[@class='left-pane-results-container']/child::div").allTextContents()
    console.log(data);
    
    for(let i=0;i<data.length;i++){
        sheet.getRow(1).getCell(i+1).value= data[i];

    }
    book.xlsx.writeFile(path.join(__dirname,"../../testdata/demo2.xlsx"));

})