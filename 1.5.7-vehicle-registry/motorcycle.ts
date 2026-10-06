import Vehicle from "./vehicle.ts";

export default class Motorcycle extends Vehicle {
    _engineCapacity

    constructor(brand: string, model: string, registerNumber: string, modelYear: number, horsePower: number, weight: number, avgFuelConsumption: number, engineCapacity: number) {
        super(brand, model, registerNumber, modelYear, horsePower, weight, avgFuelConsumption);
        this._engineCapacity = engineCapacity;
    }

    getDescription(): void {
        console.log(`Motorcycle Details:`);
        console.log(`Brand: ${this.brand}, Model: ${this.model}, Registernumber: ${this.registerNumber}, Modelyear: ${this.modelYear}, Horsepower: ${this.horsePower}, Weight: ${this.weight}, Average Fuel Consumption(L/100KM): ${this.avgFuelConsumption}, Engine Capacity: ${this._engineCapacity}`)
    }
}