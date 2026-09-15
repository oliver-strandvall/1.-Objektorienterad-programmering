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
    const books = [{id: 1, title: "Title: Wise-mans Book", author: "Author: A Wise-man"}, {id: 2, title: "Title: The Castle Witch", author: "Author: M.K"}, {id: 3, title: "Title: The Three Wanderers", author: "Author: Alex Wander"}];
    const members = [{id: 1, name: "Mike Lyson"}, {id: 2, name: "Robin Sonville"}, {id: 3, name: "Anonymous"}];
    // const books = [{}];
    // const members = [{}];
    const member1 = new member(members.length + 1, name);
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
            const addBookName = await rl.question("Enter Book Title: ");
            const addBookAuthor = await rl.question("Enter Book Author: ");
            library1.addBook(new book(books.length + 1, `Title: ${addBookName}`, `Author: ${addBookAuthor}`));
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