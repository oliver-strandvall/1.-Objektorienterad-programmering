import book from "./book.ts";
import member from "./member.ts";

export default class library {
    private _books: book[] = [];
    private _members: member[] = [];

    constructor() {}

    addBook(book: book): void {
        this._books.push(book);
    }

    addMember(member: member): void {
        this._members.push(member);
    }

    findBook(id: number): book | undefined {
        return this._books.find((book) => book.id === id);
    }

    findMember(id: number): member | undefined {
        return this._members.find((member) => member.id === id);
    }

    borrowBook(memberId: number, bookId: number): void {
        const member = this.findMember(memberId);
        const book = this.findBook(bookId);

        if(member && book) {
            member.borrowBook(book);
        }
    }

    returnBook(memberId: number, bookId: number): void {
        const member = this.findMember(memberId);
        const book = this.findBook(bookId);

        if(member && book) {
            member.returnBook(book);
        }
    }

    showBooks(): void {
        console.log("--- Books ---");
        this._books.forEach(book => {
            console.log(book.id + " - " + book.title + " - " + book.author + " - " + book.available)
        });
    }

    showMembers(): void {
        console.log("--- Members ---");
        this._members.forEach(member => {
            console.log(member.id + " - " + member.name + " - " + member.showBorrowedBooks())
        });
    }
}