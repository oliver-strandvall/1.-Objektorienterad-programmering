import type Notifier from "./notifier.ts";

export default class ConsoleNotifier implements Notifier {
    send(message: string): void {
        console.log(`Notification: ${message}`)
    }
}