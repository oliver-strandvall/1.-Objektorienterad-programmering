import book from "./book.ts";

export default class member {
    private _id: number;
    private _name: string;
    private _borrowedBooks: book[] = [];

    constructor(id: number, name: string) {
        this._id = id;
        this._name = name;
    }

    get id(): number {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    borrowBook(book: book): void {
        if(book.available) {
            book.borrow(book);
            this._borrowedBooks.push(book);
        } else {
            console.log("Book Unavailable")
        }
    }

    returnBook(book: book): void {
        this._borrowedBooks.forEach((borrowedBook, index) => {
            if (borrowedBook.id === book.id) {
                book.returnBook(book);
                this._borrowedBooks.splice(index, 1);
            }
        });
    }

    showBorrowedBooks(id: number): void {
        if(this._borrowedBooks.length <= 0) {
            console.log("Your Borrowed Books will be displayed here");
        } else {
            console.log("--- Borrowed Books ---");
            this._borrowedBooks.forEach((book) => {
                console.log("Id: " + book.id + " - Title: " + book.title + " - Author: " + book.author);
            });
        }
    }
}