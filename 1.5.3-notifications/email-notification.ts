import Notification from "./notification.ts"

export default class EmailNotification extends Notification {
    _emailAddress: string;

    constructor(message: string, emailAddress: string) {
        super(message);
        this._emailAddress = emailAddress;
    }

    override send(): void {
       console.log("Sending Email to: " + this._emailAddress);
       console.log("Message: Your order is ready");
    }
}