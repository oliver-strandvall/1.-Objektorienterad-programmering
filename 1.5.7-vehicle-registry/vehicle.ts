export default abstract class Vehicle {
    _brand: string;
    _model: string;
    _modelYear: number;
    _horsePower: number;
    _weight: number;
    _avgFuelConsumption: number;

    constructor(brand: string, model: string , modelYear: number, horsePower: number, weight: number, avgFuelConsumption: number) {
        this._brand = brand;
        this._model = model;
        this._modelYear = modelYear;
        this._horsePower = horsePower;
        this._weight = weight
        this._avgFuelConsumption = avgFuelConsumption
    }

    showInfo(): void {
        console.log(`Vehicle Info:`);
        console.log(`
            Brand: ${this._brand}, Model: ${this._model}, Modelyear: ${this._modelYear}
        `);
    }

    abstract getDescription(): void;
}