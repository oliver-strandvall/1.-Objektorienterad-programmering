import PaymentMethod from "./payment-method.ts";
import CardPayment from "./card-payment.ts";
import CashPayment from "./cash-payment.ts";
import MobilePayment from "./mobile-payment.ts";

async function main() {
    const cardPayment = new CardPayment("Alan", 12345678);
    const cashPayment = new CashPayment("Stig")
    const mobilePayment = new MobilePayment("Felix", 45696969)
}

main();