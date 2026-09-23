import PaymentMethod from "./payment-method.ts";

export default class CardPayment extends PaymentMethod {
    _cardNumber: number;

    constructor(ownerName: string, cardNumber: number) {
        super(ownerName);
        this._cardNumber = cardNumber;
    }

    pay(amount: number) {
        console.log("Paid " + amount + " € By Card")
    }
}