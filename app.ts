import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";

const peopleAccount: PeopleAccount = new PeopleAccount(1, "Nath", 10);
peopleAccount.deposit(50);
console.log(peopleAccount);

peopleAccount.withdraw(30);
console.log(peopleAccount);

const companyAccount: CompanyAccount = new CompanyAccount("DIO", 20);
companyAccount.deposit(100);
console.log(companyAccount);

companyAccount.withdraw(50);
console.log(companyAccount);

companyAccount.getLoan(100);

const dioAccountWorks: PeopleAccount = new PeopleAccount(3, "DIO", 30);
dioAccountWorks.deposit(100);
console.log(dioAccountWorks);
