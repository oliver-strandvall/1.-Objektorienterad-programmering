import Notification from "./notification.ts";
import EmailNotification from "./email-notification.ts";
import SmsNotification from "./sms-notification.ts";

async function main() {
    const notification = new Notification("Test");
    const email = new EmailNotification("Test", "test@email.com");
    const sms = new SmsNotification("Test", 45123456);
    const email2 = new EmailNotification("Test", "oliver@email.com");
    const sms2 = new SmsNotification("Test", 45696969)

    notification.send();
    email.send();
    sms.send();
    email2.send();
    sms2.send();
}

main();