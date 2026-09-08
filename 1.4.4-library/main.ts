import { createInterface } from "node:readline/promises";
import library from "./library.ts";
import book from "./book.ts";
import member from "./member.ts";


async function main() {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    const name = await rl.question("Enter your name: ");
    // const books = [{id: 1, title: "Book 1", author: "Author 1"}, {id: 2, title: "Book 2", author: "Author 2"}, {id: 3, title: "Book 3", author: "Author 3"}];
    // const members = [{id: 1, name: "Member 1"}, {id: 2, name: "Member 2"}, {id: 3, name: "Member 3"}];
    // const member1 = new member(1, name);
    // const library1 = new library(books, members);
    // library1.addMember(member1);
    for(let i = 1; i = 1;) {
        console.log("--- Library ---");
        console.log("1. Show books");
        console.log("2. Add book");
        console.log("3. Show members");
        console.log("4. Register books");
        console.log("5. Borrow book");
        console.log("6. Return book");
        console.log("7. Show members borrowed books");
        console.log("8. Exit");
        const menu = await rl.question("Choose a option: ");

        if(menu === "1") {
            console.log("Show books");
        }

        if(menu === "2") {
            console.log("Add book");
        }

        if(menu === "3") {
            console.log("Show members");
        }

        if(menu === "4") {
            console.log("Register books");
        }

        if(menu === "5") {
            console.log("Borrow book");
        }

        if(menu === "6") {
            console.log("Return book");
        }

        if(menu === "7") {
            console.log("Show members borrowed books");
        }

        if(menu === "8") {
            i == 0;
            console.log("You have logged out");
            return rl.close();
        }
    }
}

main();