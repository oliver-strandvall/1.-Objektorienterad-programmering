import { createInterface } from "node:readline/promises";
import library from "./library.ts";
import book from "./book.ts";
import member from "./member.ts";


async function main() {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    console.log("Welcome to The Library! Follow The Steps Bellow to Create a Account And Get Started");
    const userId = Number(await rl.question("Enter a Id: "));
    const name = await rl.question("Enter a Name: ");
    const books = [new book(1, "Wise-mans", "A Wise Man"), new book(2, "The Castle Witch", "M.K"), new book(3, "The Three Wanderers", "Alex Wander")]
    const members = [new member(1, "Mike Lyson"), new member(2, "Robin Sonville"), new member(3, "Anonymous")]
    const member1 = new member(userId, name);
    
    const library1 = new library(books, members);
    library1.addMember(member1);
    for(let i = 1; i = 1;) {
        console.log("--- Library ---");
        console.log("1. Show books");
        console.log("2. Add book");
        console.log("3. Show members");
        console.log("4. Register member");
        console.log("5. Borrow book");
        console.log("6. Return book");
        console.log("7. Show members borrowed books");
        console.log("8. Exit");
        const menu = await rl.question("Choose a option: ");

        if(menu === "1") {
            library1.showBooks();
        }

        if(menu === "2") {
            const addBookId = Number(await rl.question("Enter Book Id: "));
            const addBookName = await rl.question("Enter Book Title: ");
            const addBookAuthor = await rl.question("Enter Book Author: ");
            library1.addBook(new book(addBookId, addBookName, addBookAuthor));
        }

        if(menu === "3") {
            library1.showMembers();
        }

        if(menu === "4") {
            const addMemberId = Number(await rl.question("Enter Member Id: "));
            const addMemberName = await rl.question("Enter Member Name: ");
            library1.addMember(new member(addMemberId, addMemberName));
        }

        if(menu === "5") {
            const borrowMemberId = Number(await rl.question("Enter Your Member Id: "));
            const borrowBookId = Number(await rl.question("Enter Book Id to Borrow: "));
            library1.borrowBook(borrowMemberId, borrowBookId);
        }

        if(menu === "6") {
            const returnMemberId = Number(await rl.question("Enter Your Member Id: "));
            const returnBookId = Number(await rl.question("Enter Book Id to Return: "));
            library1.returnBook(returnMemberId, returnBookId);
        }

        if(menu === "7") {
            member1.showBorrowedBooks();
        }

        if(menu === "8") {
            i == 0;
            console.log("You have logged out");
            return rl.close();
        }
    }
}

main();