export default class Vehicle {
    _brand: string;
    _model: string;

    constructor(brand: string, model: string) {
        this._brand = brand;
        this._model = model;
    }

    start(): void {
        console.log("The Vehicle is Starting...")
    }
}