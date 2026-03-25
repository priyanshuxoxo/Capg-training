import { Page,Locator,expect } from "@playwright/test";
import customerData from "../testdata/day26.bank.data.json"
class Withdraw{
    page!:Page
     readonly withdrawlBTN!:Locator
       readonly withDrawBTN!:Locator
       readonly amountWithdraw!:Locator
       balanceVerifyAfterWithdraw!:Locator
    constructor(page:Page){
        this.page=page
    this.withdrawlBTN=page.getByRole("button",{name:"Withdraw"})
    this.amountWithdraw=page.getByPlaceholder("amount");
    this.withDrawBTN=page.getByRole("button",{name:"Withdraw",exact:true})
    }
    async amountToBeWithdraw(){
    await this.withdrawlBTN.click();
    await this.amountWithdraw.fill(customerData.amountToWithdraw)
    await this.page.waitForTimeout(3000);
    await this.withDrawBTN.click();


    const expectedBalance=Number(customerData.amountToDeposit)-Number(customerData.amountToWithdraw);
 
    this.balanceVerifyAfterWithdraw=this.page.locator("//strong[@class='ng-binding']").nth(1);
    const balance=this.balanceVerifyAfterWithdraw.textContent();
    console.log(balance);
    await expect(this.balanceVerifyAfterWithdraw).toContainText(expectedBalance.toString());

   }
}

export default Withdraw