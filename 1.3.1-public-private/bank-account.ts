export default class BankAccount {
    accountHolder: string = "";
    private balance: number = 0;

    constructor(accountHolder: string, balance: number) {
        this.accountHolder = accountHolder;
        this.balance = balance;
    }

    deposit(amount: number): void {
        if(amount > 0) {
            this.balance = this.balance + amount
        } else {
            return console.log("Invalid deposit amount");
        }
    }

    withdraw(amount: number): void {
        if(amount > 0) {
            if(this.balance - amount >= 0) {
                this.balance = this.balance - amount
            } else {
                return console.log("Not enough account balance");
            }
        } else {
            return console.log("Invalid withdrawal amount");
        }
    }

    getBalance(): number {
        return this.balance;
    }

    showInfo(): void {
       console.log(this.accountHolder);
       console.log(this.balance) 
    }
}