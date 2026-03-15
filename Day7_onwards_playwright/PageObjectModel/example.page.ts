class Example{
    usernameTF:string;
    passwordTF:string;
    submitBtn:any;
    constructor(page){
        this.usernameTF=page.getByLabel("username");
        this.passwordTF=page.getByLabel("password");
        this.submitBtn=page.locator("#submit");

    }
}
export default Example;