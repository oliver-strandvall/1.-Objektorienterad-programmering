import book from "./book.ts";
import member from "./member.ts";

export default class library {
    private _books: book[] = [];
    private _members: member[] = [];

    constructor(books: book[], members: member[]) {
        this._books = books;
        this._members = members;
    }

    addBook(book: book): void {
        if(!book.title && !book.author) {
            console.log("Invalid Title or Author");
        } else {
            this._books.push(book);
            console.log("Successfully Added Book");
        }
    }

    addMember(member: member): void {
        if(!member.id && !member.name) {
            console.log("Invalid Id or Name");
        } else {
            this._members.push(member);
            console.log("Successfully Added Member");
        }
    }

    findBook(id: number): book | undefined {
        return this._books.find((book) => book.id === id);
    }

    findMember(id: number): member | undefined {
        return this._members.find((member) => member.id === id);
    }

    borrowBook(memberId: number, bookId: number): void {
        if(!memberId && !bookId) {
            console.log("Failed to Borrow Book, Check Member and Book Id");
        } else {
        const member = this.findMember(memberId);
        const book = this.findBook(bookId);
            if(member && book) {
                member.borrowBook(book);
            } else {
                console.log("Failed to Borrow Book, Check Member and Book Id");
            }
        }
    }

    returnBook(memberId: number, bookId: number): void {
        if(!memberId && !bookId) {
            console.log("Failed to Return Book, Check Member and Book Id");
        } else {
        const member = this.findMember(memberId);
        const book = this.findBook(bookId);
            if(member && book) {
                member.returnBook(book);
            } else {
                console.log("Failed to Return Book, Check Member and Book Id");
            }
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
            console.log(member.id + " - " + member.name)
        });
    }
}