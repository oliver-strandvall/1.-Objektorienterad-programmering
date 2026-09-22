export default class Notification {
    _message: string;

    constructor(message: string) {
        this._message = message;
    }

    send(): void {
        console.log("Sending notification: Your order is ready");
    }
}