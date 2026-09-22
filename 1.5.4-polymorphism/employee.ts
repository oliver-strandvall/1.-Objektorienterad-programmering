export default class Employee {
    _name: string;
    _salary: number

    constructor(name: string, salary: number) {
        this._name = name;
        this._salary = salary;
    }

    work(): void {
        console.log(this._name + " Is Working");
    }
}