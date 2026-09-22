export default class Employee {
    _name: string;
    _salary: number;

    constructor(name: string, salary: number) {
        this._name = name;
        this._salary = salary;
    }

    showInfo(): void {
        console.log("Name: " + this._name + ", Salary: " + this._salary);
    }
}