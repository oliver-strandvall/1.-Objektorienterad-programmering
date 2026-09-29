import type Notifier from "./notifier.ts";
import EmailNotifier from "./email-notifier.ts";
import SmsNotifier from "./sms-notifier.ts";
import ConsoleNotifier from "./console-notifier.ts";

async function main() {

    const notifiers: Notifier[] = [
        new EmailNotifier("mytest@email.com"),
        new SmsNotifier(45696969),
        new ConsoleNotifier(),
    ];

    for (const notifier of notifiers) {
        notifier.send("The system will restart at 18:00.");
    }

    function sendNotification(notifier: Notifier, message: string): void {
        notifier.send(message);
    }

    const emailNotification = new EmailNotifier("test@email.com");
    const emailNotification2 = new EmailNotifier("myemail@email.com");
    const smsNotification = new SmsNotifier(45123456);
    const smsNotification2 = new SmsNotifier(45987654);
    const consoleNotification = new ConsoleNotifier();

    sendNotification(emailNotification, "Message Sent Succesfully");
    sendNotification(smsNotification, "Message Sent Succesfully");
    sendNotification(consoleNotification, "Message Sent Succesfully")
}

main();