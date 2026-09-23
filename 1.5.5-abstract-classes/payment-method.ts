export default abstract class PaymentMethod {
    _ownerName: string;

    constructor(ownerName: string) {
        this._ownerName = ownerName;
    }

    showOwner(): void {
        console.log("Owner: " + this._ownerName);
    }

    abstract pay(amount: number): void;
}