import test from "@playwright/test";

import excel from "exceljs"
import path from "node:path";

// test("reading test data",async({page})=>{

//     let book=new excel.Workbook()
//     await book.xlsx.readFile(path.join(__dirname,"../../testdata/demo.xlsx"))
//     let sheet= book.getWorksheet("Sheet1")
//     let data= sheet?.getRow(1).getCell(1).toString();
//     // let data= sheet?.getRow(1).getCell(1).value;
//     console.log(data);
// })
// test("reading test data from file containing different values",async({page})=>{

//     let book=new excel.Workbook()
//     await book.xlsx.readFile(path.join(__dirname,"../../testdata/demo2.xlsx"))
//     let sheet= book.getWorksheet("Sheet1")
//     for(let i=1;i<=sheet?.actualRowCount;i++){
//         for(let j=1;j<=sheet?.actualColumnCount;j++){
//             let data= sheet?.getRow(i).getCell(j).value;
//             console.log(data);
//         }
//     }
// })
test.only("reading test dat",async({page})=>{
    let book=new excel.Workbook()
    await book.xlsx.readFile(path.join(__dirname,"../../testdata/demo2.xlsx"))
    let sheet= book.getWorksheet("Sheet1")
    for(let i=2;i<=sheet!.actualRowCount;i++){
        let url:string=sheet!.getRow(i).getCell(1).toString()
        let name:string=sheet!.getRow(i).getCell(2).toString()
        let email:string=sheet!.getRow(i).getCell(3).toString()
        let pasword:string=sheet!.getRow(i).getCell(4).toString()

        await page.goto(url)
        await page.getByPlaceholder("Enter your name").fill(name)
        await page.getByPlaceholder("Enter Your Email").fill(email)
        await page.getByPlaceholder("Enter your password").fill(pasword)
        await page.locator("//button[@type='submit']").click();

    }
})
