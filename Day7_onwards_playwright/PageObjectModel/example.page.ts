
import { Locator, Page } from "@playwright/test";
class Example{
    usernameTF:Locator;
    passwordTF:Locator;
    submitBtn:Locator;
    constructor(page:Page){
        this.usernameTF=page.getByLabel("username");
        this.passwordTF=page.getByLabel("password");
        this.submitBtn=page.locator("#submit");

    }
    async fillUsername(username:string){
        await this.usernameTF.fill(username);
    }
    async fillPassword(password:string){
        await this.passwordTF.fill(password);
    }
    async clickSubmit(){
        await this.submitBtn.click();
    }
    
}
export default Example;