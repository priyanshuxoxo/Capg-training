import { Page,expect,Locator } from "@playwright/test";

class Manager{
 readonly bankManagerBTN!:Locator
    constructor(page:Page){
        this.bankManagerBTN=page.getByRole("button",{name:"Bank Manager Login"});
    }
     async managerLogin(){
        await expect(this.bankManagerBTN).toBeVisible();
        await this.bankManagerBTN.click();
       }
}
export default Manager