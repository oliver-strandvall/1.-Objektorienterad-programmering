import Vehicle from "./vehicle.ts";

export default class Car extends Vehicle {
    _topSpeed: number

    constructor(brand: string, model: string, registerNumber: string, modelYear: number, horsePower: number, weight: number, avgFuelConsumption: number, topSpeed: number) {
        super(brand, model, registerNumber, modelYear, horsePower, weight, avgFuelConsumption);
        this._topSpeed = topSpeed
    }

    getDescription(): void {
        console.log(`Car Details:`);
        console.log(`
            Horsepower: ${this.horsePower}, Weight: ${this.weight},
            Average Fuel Consumption(L/100KM): ${this.avgFuelConsumption}, Top Speed: ${this._topSpeed}
        `)
    }
}