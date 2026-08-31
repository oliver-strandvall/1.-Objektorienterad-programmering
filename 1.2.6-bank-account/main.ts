import BankAccount from "./bank-account.ts";

const account1 = new BankAccount("Alice", 500);
account1.deposit(50);
account1.withdraw(250);
account1.showInfo()

const account2 = new BankAccount("Mike", 650);
account2.deposit(35);
account2.deposit(25);
account2.withdraw(50);
account2.withdraw(80);
account2.deposit(-5);
account2.withdraw(-15);
account2.withdraw(1250);
const account2Balance = account2.getBalance();
console.log(account2Balance);
account2.showInfo()