import {test} from "@playwright/test"

test("Prp kabbadi task",async({page})=>{
    await page.goto("https://www.prokabaddi.com/schedule-fixtures-results?tab=recent")
    
    const elements=await page.locator(`
        //p[@class="match-count" and .="Final"] |
        ((//a[@data-title="Dabang Delhi K.C. VS Puneri Paltan"])[1]/div/div/p[@class="team-name"])[1] |
        //div[@class="team-score won"]/p[text()="31"] |
        ((//div[@class="team team-b"])[1]/div/p)[1] |
        (//div[@class="team team-b"])[1]/div[@class="team-score"]/p |
        (//div[@class="element element3"])[1]/p
        `)
        const count = await elements.count()
        console.log();
        const texts=await elements.allTextContents()
        texts.forEach((t,i)=>{
            console.log(`Element ${i+1}`,t.trim());
        })

    //    for (let i = 0; i < count; i++) {
    //    const text = await elements.nth(i).textContent();
    //    console.log(`Element ${i + 1}:`, text?.trim());
    //    }
})