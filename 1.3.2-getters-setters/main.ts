import Thermostat from './thermostat.ts';

const thermostat1 = new Thermostat(20, 10, 30);
thermostat1.temperature = 15;
thermostat1.temperature = 5;
thermostat1.temperature = 35;
console.log(thermostat1.temperature);
console.log(thermostat1.minTemperature);
console.log(thermostat1.maxTemperature);

const thermostat2 = new Thermostat(0, -25, 25);
thermostat2.temperature = -20;
thermostat2.temperature = -30
thermostat2.temperature = 30;
console.log(thermostat2.temperature);
console.log(thermostat2.minTemperature);
console.log(thermostat2.maxTemperature);