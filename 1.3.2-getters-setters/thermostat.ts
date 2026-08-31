export default class Thermostat {
    private _temperature: number;
    private _minTemperature: number;
    private _maxTemperature: number;

    constructor(_temperature: number, _minTemperature: number, _maxTemperature: number) {
        this._temperature = _temperature;
        this._minTemperature = _minTemperature;
        this._maxTemperature = _maxTemperature;
    }

    get temperature(): number {
        return this._temperature;
    }

    get minTemperature(): number {
        return this._minTemperature;
    }

    get maxTemperature(): number {
        return this._maxTemperature;
    }

    set temperature(value: number) {
        if(this._minTemperature <= value && value <= this._maxTemperature) {
            this._temperature = value;
        } else {
            console.log("Invalid Value");
        }
    }
}