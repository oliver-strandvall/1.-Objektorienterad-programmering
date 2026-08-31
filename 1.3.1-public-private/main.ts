import BankAccount from "./bank-account.ts";

const account1 = new BankAccount("Mike", 500);
account1.deposit(200);
account1.withdraw(100);
account1.showInfo();