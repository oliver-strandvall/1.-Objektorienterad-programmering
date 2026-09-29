import type Notifier from "./notifier.ts";

export default class EmailNotifier implements Notifier {
    _emailAdress: string;

    constructor(emailAddress: string) {
        this._emailAdress = emailAddress
    }

    send(message: string): void {
        console.log(`Sending Email To: ${this._emailAdress}`);
        console.log(`Message: ${message}`);
    }
}