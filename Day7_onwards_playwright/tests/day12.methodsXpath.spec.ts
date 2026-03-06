import {test} from "@playwright/test"

test("task1", async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.locator("//input[@id='twotabsearchtextbox']").fill("nike")
    await page.locator("//input[@id='nav-search-submit-button']").click();
    const price=page.locator("//span[text()='2,217']");
    console.log(price);
    page.locator("//span[contains(text(),'Mens')]")
})


//!Advanced methods
//? //section[@class="Hello"]/child::div/child::h1
//? //section[@class="hello"]/decendent::(whatever chhild you want write is name here);
//? preceding-sibling:: and following-sibling::
//? parent::(name of the attritbute)

              
test("task2", async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.locator("//input[@id='twotabsearchtextbox']").fill("nike")
    await page.locator("//input[@id='nav-search-submit-button']").click();
    const price= await page.locator("//span[@aria-hidden='true']/child::span[@class='a-price-whole' and .='2,217']").first().textContent();
   console.log(price);

})
test("task3", async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.locator("//div[@id='form']/descendant::input[@id='username']").fill("student")
    await page.locator("//div[@id='form']/descendant::input[@id='password']").fill("Password123");
    await page.locator("//button[@id='submit']").click();
    console.log("Login Succwssfully");
    

})
test("task4", async({page})=>{
    await page.goto("https://www.flipkart.com/")
    const name=await page.locator("//div[@class='H5bs2Y' and a[@class='SXucWY']]/child::a/child::span").textContent();
   console.log(name);
   
})
test("task5", async({page})=>{
    await page.goto("https://www.flipkart.com/")
    await page.locator("//span[@class='b3wTlE']").click();
    await page.locator("//input[@placeholder='Search for Products, Brands and More']").first().fill("phones")
    await page.locator("//button[@class='XFwMiH']").first().click();
    const price=await page.locator("//div[@class='RG5Slk'  and .='realme P4 Power 5G (TransSilver, 128 GB)']/ancestor::div[@class='ZFwe0M row']/child::div[@class='col col-5-12 mao5dl']/descendant::div[@class='hZ3P6w DeU9vF']").textContent();

console.log(price);
   
})
test.only("task6", async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.locator("//input[@id='twotabsearchtextbox']").fill("phones");

    await page.locator("//input[@id='nav-search-submit-button']").click();
   
    await page.locator("//li[@id='p_n_g-1003517064111/51258733031']/descendant::i").click();
    
   await page.screenshot({path:"./screenshoot/amazon.png"})
})
