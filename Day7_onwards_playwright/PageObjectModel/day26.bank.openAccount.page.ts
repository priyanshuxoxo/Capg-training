import { Page,expect,Locator } from "@playwright/test";
import customerData from "../testdata/day26.bank.data.json"
class OpenAccount{
    page!:Page
  readonly openAccountBTN!:Locator
   readonly openCustomerName!:Locator
   readonly currencyName!:Locator
   readonly processBTN!:Locator


    constructor(page:Page){
        this.page=page
    this.openCustomerName=page.locator("//select[@name='userSelect']")
    this.currencyName=page.locator("//select[@id='currency']")
    this.processBTN=page.getByRole("button",{name:"Process"});
    this.openAccountBTN=page.getByRole("button",{name:"Open Account "})
    }
    async openAccount(){
    await this.openAccountBTN.click();
    const fullName=`${customerData.firstName} ${customerData.lastName}` 
    await this.openCustomerName.selectOption({label:fullName});
    await this.currencyName.selectOption({label:customerData.currency});
    this.page.once("dialog",async(dialog)=>{
        console.log(dialog.message());
        dialog.accept();
        
    })
    await this.processBTN.click();
   }
}
export default OpenAccount