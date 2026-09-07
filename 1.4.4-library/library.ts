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
}