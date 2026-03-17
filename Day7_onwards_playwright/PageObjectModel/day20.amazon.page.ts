import { Page, Locator } from "@playwright/test"

class Amazon{
    page:Page;
    searchBarTF:Locator;
    searchBTN:Locator;
    ramSizeCB:Locator;
    productLNK:Locator;
    quantitySelectBTN!:Locator;
    quantitySelectvalueBTN!:Locator;
    addCartBTN:Locator;
    goToCartBTN!:Locator;
    secondPage!:Page;
    
    constructor(page:Page){

        this.page = page;

        this.searchBarTF=page.locator("#twotabsearchtextbox");
        this.searchBTN=page.locator("#nav-search-submit-button");
        this.ramSizeCB=page.getByText("10 GB & Above")

        this.productLNK=page.locator("//div[@class='puisg-col puisg-col-4-of-4 puisg-col-4-of-8 puisg-col-4-of-12 puisg-col-4-of-16 puisg-col-4-of-20 puisg-col-4-of-24 puis-list-col-left']").nth(3);
      
        this.addCartBTN=page.locator("(//input[@title='Add to Shopping Cart'])[2]")

    }
    async search(value:string){
        await this.searchBarTF.fill(value);
    }

    async clickSearch(){
        await this.searchBTN.click();
    }

    async ramSize(){
        await this.ramSizeCB.click();
    }

    async find4thProduct(){

        const [page2] = await Promise.all([
            this.page.waitForEvent("popup"),
            this.productLNK.click()
        ])

        this.secondPage = page2
    }

    async selectQantity(){

        this.quantitySelectBTN=this.secondPage.locator("//span[@class='a-button a-button-dropdown']");
        this.quantitySelectvalueBTN=this.secondPage.locator("//li[@data-action='a-dropdown-options']/a[@id='quantity_2']");

        await this.quantitySelectBTN.click();
        await this.quantitySelectvalueBTN.click();
    }

    async addingToCart(){

       this.addCartBTN=this.secondPage.locator("(//input[@title='Add to Shopping Cart'])[2]");
       await this.addCartBTN.click();

    }
}

export default Amazon;