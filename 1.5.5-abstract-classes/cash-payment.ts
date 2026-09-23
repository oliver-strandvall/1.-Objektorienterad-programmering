import PaymentMethod from "./payment-method.ts";

export default class CashPayment extends PaymentMethod {
    pay(amount: number) {
        console.log("Paid " + amount + " In Cash")
    }
}