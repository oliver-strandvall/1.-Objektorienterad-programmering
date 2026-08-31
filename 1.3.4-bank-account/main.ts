import { createInterface } from "node:readline/promises";
import BankAccount from "./bank-account.ts";

async function main() {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    console.log("Welcome, you will now create your bank account");
    const name = await rl.question("Enter your name: ");
    const startingBalance = Number(await rl.question("Enter your starting balance: "));
    const account = new BankAccount(name, startingBalance)
    for(let i = 1; i = 1;) {
        console.log("---Bank Account---");
        console.log("1. Show balance");
        console.log("2. Deposit money");
        console.log("3. Withdraw money");
        console.log("4. Exit");
        const menu = await rl.question("Choose a option: ");

        if(menu === "1") {
            console.log(account.getBalance());
        }

        if(menu === "2") {
            const amount = Number(await rl.question("Select amount to deposit: "));
            account.deposit(amount);
        }

        if(menu === "3") {
            const amount = Number(await rl.question("Select amount to withdraw: "));
            account.withdraw(amount);
        }

        if(menu === "4") {
            i == 0;
            console.log("You have logged out");
            return rl.close();
        }
    }
}

main();