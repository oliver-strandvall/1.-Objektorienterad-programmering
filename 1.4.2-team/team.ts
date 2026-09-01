import Player from "./player.ts";

export default class Team {
    teamName: string = "";
    private players: Player[] = [];

    constructor(teamName: string) {
        this.teamName = teamName;
    }

    addPlayer(player: Player): void {
        this.players.push(player);
    }

    showPlayers(): void {
        console.log("Team: " + this.teamName);
        console.log("Players:");
        this.players.forEach((player) => {
            console.log("Number: " + player.number + " - Name: " + player.name + " - Position: " + player.position);
        });
    }

    getPlayerCount(): number {
        return this.players.length;
    }

    findPlayer(number: number): Player | undefined {
        for(const player of this.players) {
            if(player.number === number) {
                return player;
            }
        }
        return undefined;
    }
}