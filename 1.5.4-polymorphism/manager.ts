import Employee from "./employee.ts";

export default class Manager extends Employee {
    _teamSize: number;

    constructor(name: string, salary: number, teamSize: number) {
        super(name, salary);
        this._teamSize = teamSize;
    }

    work(): void {
        console.log(this._name + " Is Managing a Team of " + this._teamSize + " People");
    }
}