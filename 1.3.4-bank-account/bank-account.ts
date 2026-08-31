export default class BankAccount {
    accountHolder: string = "";
    private _balance: number = 0;

    constructor(accountHolder: string, initialBalance: number) {
        this.accountHolder = accountHolder;
        this._balance = initialBalance;
    }

    get balance(): number {
        return this._balance;
    }

    deposit(amount: number): void {
        if(amount > 0) {
            this._balance = this._balance + amount
        } else {
            return console.log("Invalid deposit amount");
        }
    }

    withdraw(amount: number): void {
        if(amount > 0) {
            if(this._balance - amount >= 0) {
                this._balance = this._balance - amount
            } else {
                return console.log("Not enough account balance");
            }
        } else {
            return console.log("Invalid withdrawal amount");
        }
    }

    getBalance(): number {
        return this._balance;
    }

    showInfo(): void {
       console.log(this.accountHolder);
       console.log(this.balance) 
    }
}