import { createInterface } from 'node:readline/promises';
import Vehicle from './vehicle.ts';
import VehicleRegistry from './vehicle-registry.ts';
import Car from './car.ts';
import Truck from './truck.ts';
import Motorcycle from './motorcycle.ts';

async function main() {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    const vehicleRegistry = new VehicleRegistry();
    const car1 = new Car("Brand", "Model", "ABC-123", 2020, 200, 1550, 8, 220);
    vehicleRegistry.addVehicle(car1)

    for(let i = 1; i = 1;) {
        console.log("--- Vehicle Registry ---");
        console.log("1. Add Vehicle");
        console.log("2. Show All Vehicles");
        console.log("3. Find Vehicle");
        console.log("4. Exit");
        const menu = await rl.question("Choose a option: ");

        if(menu === "1") {
            console.log("What Type of Vehicle?");
            console.log("1. Car");
            console.log("2. Motorcycle");
            console.log("3. Truck");
            const vehicleType = await rl.question("Choose a Type: ");

            // if(vehicleType == 1) {

            // }

            // if(vehicleType == 2) {

            // }

            // if(vehicleType == 3) {

            // }
        }

        if(menu === "2") {
            
        }

        if(menu === "3") {
            
        }

        if(menu === "4") {
            i == 0;
            console.log("You have logged out");
            return rl.close(); 
        }
    }
}

main();