import type Notifier from "./notifier.ts";

export default class SmsNotifier implements Notifier {
    _phoneNumber: number;

    constructor(phoneNumber: number) {
        this._phoneNumber = phoneNumber;
    }

    send(message: string): void {
        console.log(`Sending SMS To: ${this._phoneNumber}`);
        console.log(`Message: ${message}`);
    }
}