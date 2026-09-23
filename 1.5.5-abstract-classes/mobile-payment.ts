import PaymentMethod from "./payment-method.ts";

export default class MobilePayment extends PaymentMethod {
    _phoneNumber;

    constructor(ownerName: string, phoneNumber: number) {
        super(ownerName);
        this._phoneNumber = phoneNumber;
    }

    pay(amount: number) {
        console.log("Paid " + amount + " With Mobile Payment")
    }
}