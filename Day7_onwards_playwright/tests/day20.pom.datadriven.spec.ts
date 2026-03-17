import { test } from "@playwright/test";
import fs from "fs";
import path from "path";
import Amazon from "../PageObjectModel/day20.amazon.page";

let dataFile = fs.readFileSync(
  path.join(__dirname, "../testdata/day20.amazon.json"),
  "utf8"
);

let file = JSON.parse(dataFile);

test("Amazon Task", async ({ browser }) => {

  let context = await browser.newContext();
  let page = await context.newPage();

  let Ama = new Amazon(page);

  await page.goto(file.url);

  await Ama.search(file.search);
  await Ama.clickSearch();
  await Ama.ramSize();
  await Ama.find4thProduct();
  await Ama.selectQantity();
  await Ama.addingToCart();
  await page.waitForTimeout(3000)
  await page.screenshot({path:"./screenshoot/day20.png"});

});