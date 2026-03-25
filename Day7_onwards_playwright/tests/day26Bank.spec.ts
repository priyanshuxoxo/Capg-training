import {test} from "@playwright/test"

const data = require("../testdata/day26.bank.data.json");
import Bank from "../PageObjectModel/Day26_Bank.page";
import Manager from '../PageObjectModel/day26.bank.manager.page';
import AddCustomer from '../PageObjectModel/day26.bank.addCustomer.page';
import CustomerLogin from '../PageObjectModel/day26.bank.customerLogin.page';
import Deposit from "../PageObjectModel/day26.bank.deposit.page";
import Withdraw from "../PageObjectModel/day26.bank.withdraw.page";
import OpenAccount from "../PageObjectModel/day26.bank.openAccount.page";
test("Banking End to End",async({page})=>{
    const BankD=new Bank(page); 
    const manager=new Manager(page);
    const addCustomer=new AddCustomer(page);
    const customerLogin=new CustomerLogin(page);
    const deposit=new Deposit(page);
    const withdraw=new Withdraw(page);
    const openAccount=new OpenAccount(page);
    await page.goto(data.url);
    await manager.managerLogin();
    await addCustomer.addCustomer();
    await openAccount.openAccount();
    await BankD.gotoHome();
    await customerLogin.customerLogin();
    await deposit.amountToBeDeposit();
    await withdraw.amountToBeWithdraw();
    await BankD.logoutFrom();
})