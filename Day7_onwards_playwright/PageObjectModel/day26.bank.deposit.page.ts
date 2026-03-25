import { Page ,Locator,expect} from "@playwright/test";
import customerData from "../testdata/day26.bank.data.json"

class Deposit{
        readonly depositBTN!:Locator
       readonly amountDeposit!:Locator
       readonly depBTN!:Locator
        readonly balanceVerifyTF!:Locator

    constructor(page:Page){
       this.depositBTN=page.getByRole("button",{name:/Deposit/})
       this.amountDeposit=page.getByPlaceholder("amount");
       this.depBTN=page.getByRole("button",{name:"Deposit"});
       this.balanceVerifyTF=page.locator(`//strong[@class='ng-binding' and .=${customerData.amountToDeposit}]`)
    }
    async amountToBeDeposit(){
    await this.depositBTN.click();
    await this.amountDeposit.fill(customerData.amountToDeposit);
    await expect(this.depBTN.last()).toBeVisible()
    await this.depBTN.last().click();
    await expect(this.balanceVerifyTF).toContainText(customerData.amountToDeposit);
    
   }
}
export default Deposit