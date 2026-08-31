export default class Processor {
    cpubrand: string = "";
    cpumodel: string = "";
    cores: number = 0;
    speed: number = 0;

    constructor(cpubrand: string, cpumodel: string, cores: number, speed: number) {
        this.cpubrand = cpubrand;
        this.cpumodel = cpumodel;
        this.cores = cores;
        this.speed = speed;
    }
}