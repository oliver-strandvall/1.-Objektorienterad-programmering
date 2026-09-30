import Vehicle from "./vehicle.ts"

export default class VehicleRegistry {

    vehicles: Vehicle[] = [];

    addVehicle(vehicle: Vehicle): void {
        this.vehicles.push(vehicle);
    }

    showVehicles(): void {
        for (const vehicle of this.vehicles) {
            vehicle.getDescription();
        }
    }

    searchVehicles(registerNumber: string): void {
        for (const vehicle of this.vehicles) {
            if(vehicle.registerNumber == registerNumber) {
                console.log("Vehicle Found!");
            } else {
                console.log("Vehicle Not Found");
            }
        }
    }
}