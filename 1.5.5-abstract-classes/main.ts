import PaymentMethod from "./payment-method.ts";
import CardPayment from "./card-payment.ts";
import CashPayment from "./cash-payment.ts";
import MobilePayment from "./mobile-payment.ts";

async function main() {
    const paymentMethods: PaymentMethod[] = [
        new CardPayment("Card Test", 12345678),
        new CashPayment("Cash Test"),
        new MobilePayment("Mobile Test", 45123456)
    ];

    for (const paymentMethod of paymentMethods) {
        paymentMethod.showOwner();
        paymentMethod.pay(25);
    }

    // const cardPayment = new CardPayment("Alan", 87654321);
    // const cardPayment2 = new CardPayment("Mike", 61626364);
    // const cashPayment = new CashPayment("Stig");
    // const mobilePayment = new MobilePayment("Felix", 45696969);
    // const mobilePayment2 = new MobilePayment("Sarah", 45757565);
}

main();