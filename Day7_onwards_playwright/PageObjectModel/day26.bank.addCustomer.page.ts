import { Page,expect,Locator } from "@playwright/test";
import customerData from "../testdata/day26.bank.data.json"
class AddCustomer{
    page!:Page
readonly addCustomerBTN!:Locator
   readonly firstNameTF!:Locator
   readonly lastNameTF!:Locator
   readonly postalCodeTF!:Locator
   readonly addBTN!:Locator
    constructor(page:Page){
        this.page=page
    this.addCustomerBTN=page.getByRole("button",{name:"Add Customer "})
    this.firstNameTF=page.getByPlaceholder("First Name");
    this.lastNameTF=page.getByPlaceholder("Last Name");
    this.postalCodeTF=page.getByPlaceholder("Post Code");
    this.addBTN=page.getByRole("button",{name:"Add Customer"});
    }
    async addCustomer(){
    await expect(this.addCustomerBTN).toBeVisible();
    await this.addCustomerBTN.click();
    await this.firstNameTF.fill(customerData.firstName);
    await this.lastNameTF.fill(customerData.lastName);
    await this.postalCodeTF.fill(customerData.postCode);
     this.page.once("dialog",async(dialog)=>{
        console.log(dialog.message());
        dialog.accept();
    })
    await this.addBTN.last().click();
   }
}
export default AddCustomer