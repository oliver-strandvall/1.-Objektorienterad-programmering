export default class Player {
    name: string = "";
    number: number = 0;
    position: string = "";

    constructor(name: string, number: number, position: string) {
        this.name = name;
        this.number = number;
        this.position = position;
    }
}