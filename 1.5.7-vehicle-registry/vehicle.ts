export default abstract class Vehicle {
    private _brand: string;
    private _model: string;
    private _registerNumber: string;
    private _modelYear: number;
    private _horsePower: number;
    private _weight: number;
    private _avgFuelConsumption: number;

    constructor(brand: string, model: string, registerNumber: string, modelYear: number, horsePower: number, weight: number, avgFuelConsumption: number) {
        this._brand = brand;
        this._model = model;
        this._registerNumber = registerNumber;
        this._modelYear = modelYear;
        this._horsePower = horsePower;
        this._weight = weight
        this._avgFuelConsumption = avgFuelConsumption
    }

    get brand(): string {
        return this._brand;
    }

    get model(): string {
        return this._model;
    }

    get registerNumber(): string {
        return this._registerNumber;
    }

    get modelYear(): number {
        return this._modelYear;
    }

    get horsePower(): number {
        return this._horsePower;
    }

    get weight(): number {
        return this._weight;
    }

    get avgFuelConsumption(): number {
        return this._avgFuelConsumption;
    }

    showInfo(): void {
        console.log(`Vehicle Info:`);
        console.log(`
            Brand: ${this._brand}, Model: ${this._model}, Modelyear: ${this._modelYear}
        `);
    }

    abstract getDescription(): void;
}