export default class BankAccount {
    accountHolder: string = "";
    balance: number = 0;

    constructor(accountHolder: string, initialBalance: number) {
        this.accountHolder = accountHolder;
        this.balance = initialBalance;
    }
}