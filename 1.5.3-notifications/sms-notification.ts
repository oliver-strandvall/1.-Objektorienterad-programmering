import Notification from "./notification.ts"

export default class SmsNotification extends Notification {
    _phoneNumber: number;

    constructor(message: string, phoneNumber: number) {
        super(message);
        this._phoneNumber = phoneNumber;
    }

    override send(): void {
       console.log("Sending SMS to: " + this._phoneNumber);
       console.log("Message: Your order is ready");
    }
}