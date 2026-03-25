import { Locator, Page,expect } from "@playwright/test";
import customerData from "../testdata/day26.bank.data.json"
class Bank{
//     readonly page!:Page
//    readonly bankManagerBTN!:Locator
//    readonly addCustomerBTN!:Locator
//    readonly firstNameTF!:Locator
//    readonly lastNameTF!:Locator
//    readonly postalCodeTF!:Locator
//    readonly addBTN!:Locator
//    readonly openAccountBTN!:Locator
//    readonly openCustomerName!:Locator
//    readonly currencyName!:Locator
//    readonly processBTN!:Locator
   readonly homeBTN!:Locator
//    readonly yourName!:Locator
//    readonly loginBTN!:Locator
//    readonly depositBTN!:Locator
//    readonly amountDeposit!:Locator
//    readonly depBTN!:Locator
//    readonly customerLoginBTN!:Locator
//    readonly balanceVerifyTF!:Locator
//    readonly withdrawlBTN!:Locator
//    readonly withDrawBTN!:Locator
//    readonly amountWithdraw!:Locator
//    balanceVerifyAfterWithdraw!:Locator
readonly logoutBTN!:Locator

   constructor(page:Page){
    // this.page=page
    // this.bankManagerBTN=page.getByRole("button",{name:"Bank Manager Login"});
    // this.addCustomerBTN=page.getByRole("button",{name:"Add Customer "})
    // this.firstNameTF=page.getByPlaceholder("First Name");
    // this.lastNameTF=page.getByPlaceholder("Last Name");
    // this.postalCodeTF=page.getByPlaceholder("Post Code");
    // this.addBTN=page.getByRole("button",{name:"Add Customer"});
    // this.openCustomerName=page.locator("//select[@name='userSelect']")
    // this.currencyName=page.locator("//select[@id='currency']")
    // this.processBTN=page.getByRole("button",{name:"Process"});
    this.homeBTN=page.getByRole("button",{name:"Home"});
    // this.yourName=page.locator("//select[@id='userSelect']")
    // this.loginBTN=page.getByRole("button",{name:"Login"});
    // this.depositBTN=page.getByRole("button",{name:/Deposit/})
    // this.amountDeposit=page.getByPlaceholder("amount");
    // this.withdrawlBTN=page.getByRole("button",{name:"Withdraw"})
    // this.amountWithdraw=page.getByPlaceholder("amount");
    // this.withDrawBTN=page.getByRole("button",{name:"Withdraw",exact:true})
    // this.depBTN=page.getByRole("button",{name:"Deposit"});
    // this.openAccountBTN=page.getByRole("button",{name:"Open Account "})
    // this.customerLoginBTN=page.getByRole("button",{name:"Customer Login"})
    // this.balanceVerifyTF=page.locator(`//strong[@class='ng-binding' and .=${customerData.amountToDeposit}]`)

    this.logoutBTN=page.getByRole("button",{name:/Logout/});

   }

//    async managerLogin(){
//     await expect(this.bankManagerBTN).toBeVisible();
//     await this.bankManagerBTN.click();
//    }

//    async addCustomer(){
//     await expect(this.addCustomerBTN).toBeVisible();
//     await this.addCustomerBTN.click();
//     await this.firstNameTF.fill(customerData.firstName);
//     await this.lastNameTF.fill(customerData.lastName);
//     await this.postalCodeTF.fill(customerData.postCode);
//      this.page.once("dialog",async(dialog)=>{
//         console.log(dialog.message());
//         dialog.accept();
//     })
//     await this.addBTN.last().click();
//    }


//    async openAccount(){
//     await this.openAccountBTN.click();
//     const fullName=`${customerData.firstName} ${customerData.lastName}` 
//     await this.openCustomerName.selectOption({label:fullName});
//     await this.currencyName.selectOption({label:customerData.currency});
//     this.page.once("dialog",async(dialog)=>{
//         console.log(dialog.message());
//         dialog.accept();
        
//     })
//     await this.processBTN.click();
//    }

   async gotoHome(){
    await expect(this.homeBTN).toBeVisible()
    await this.homeBTN.click();
   }
//    async customerLogin(){
//     await expect(this.customerLoginBTN).toBeVisible()
//     await this.customerLoginBTN.click();
//     const fullName=`${customerData.firstName} ${customerData.lastName}` 
//     await this.yourName.selectOption({label:fullName});
   
//     await expect(this.loginBTN).toBeVisible();
//     await this.loginBTN.click();
// //    }

//    async amountToBeDeposit(){
//     await this.depositBTN.click();
//     await this.amountDeposit.fill(customerData.amountToDeposit);
//     await expect(this.depBTN.last()).toBeVisible()
//     await this.depBTN.last().click();
//     await expect(this.balanceVerifyTF).toContainText(customerData.amountToDeposit);
//    }
//    async amountToBeWithdraw(){
//     await this.withdrawlBTN.click();
//     await this.amountWithdraw.fill(customerData.amountToWithdraw)
//     await this.withDrawBTN.click();
//     const expectedBalance=Number(customerData.amountToDeposit)-Number(customerData.amountToWithdraw);
//     this.balanceVerifyAfterWithdraw=this.page.locator(`//strong[@class='ng-binding' and .=${expectedBalance.toString()}]`)
//     await expect(this.balanceVerifyAfterWithdraw).toContainText(expectedBalance.toString());

//    }
   async logoutFrom(){
    await this.logoutBTN.click();
   }

}

export default Bank;