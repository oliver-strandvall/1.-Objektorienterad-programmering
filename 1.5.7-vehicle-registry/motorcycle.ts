import Vehicle from "./vehicle.ts";

export default class Motorcycle extends Vehicle {
    _engineCapacity

    constructor(brand: string, model: string , modelYear: number, horsePower: number, weight: number, avgFuelConsumption: number, engineCapacity: number) {
        super(brand, model, modelYear, horsePower, weight, avgFuelConsumption);
        this._engineCapacity = engineCapacity;
    }

    getDescription(): void {
        console.log(`Motorcycle Details:`);
        console.log(`
            Horsepower: ${this._horsePower}, Weight: ${this._weight},
            Average Fuel Consumption(L/100KM): ${this._avgFuelConsumption}, Engine Capacity: ${this._engineCapacity}
        `)
    }
}