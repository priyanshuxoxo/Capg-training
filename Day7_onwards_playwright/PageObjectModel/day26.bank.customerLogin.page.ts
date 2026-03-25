import { Page,expect,Locator } from "@playwright/test";
import customerData from "../testdata/day26.bank.data.json"
class CustomerLogin{
readonly logoutBTN!:Locator
   readonly yourName!:Locator
   readonly loginBTN!:Locator
      readonly customerLoginBTN!:Locator
    constructor(page:Page){
        this.yourName=page.locator("//select[@id='userSelect']")
         this.customerLoginBTN=page.getByRole("button",{name:"Customer Login"})
          this.loginBTN=page.getByRole("button",{name:"Login"});
    }
    async customerLogin(){
    await expect(this.customerLoginBTN).toBeVisible()
    await this.customerLoginBTN.click();
    const fullName=`${customerData.firstName} ${customerData.lastName}` 
    await this.yourName.selectOption({label:fullName});
   
    await expect(this.loginBTN).toBeVisible();
    await this.loginBTN.click();
   }
}
export default CustomerLogin