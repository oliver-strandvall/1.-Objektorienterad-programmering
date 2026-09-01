import Player from "./player.ts";
import Team from "./team.ts";

const player1 = new Player("Test Player 1", 69, "Forward");
const player2 = new Player("Test Player 2", 67, "Midfielder");
const player3 = new Player("Test Player 3", 50, "Defender");
const player4 = new Player("Test Player 4", 45, "Goalkeeper");
const player5 = new Player("Test Player 5", 40, "Substitute");

const team = new Team("Test Team");

team.addPlayer(player1);
team.addPlayer(player2);
team.addPlayer(player3);
team.addPlayer(player4);
team.addPlayer(player5);

team.showPlayers();
console.log("Player Count: " + team.getPlayerCount());
if(team.findPlayer(69)) {
    console.log("Player " + team.findPlayer(69)?.number + " found" + " - Name: " +
    team.findPlayer(69)?.name + " - Position: " + team.findPlayer(69)?.position);
} else {
    console.log("Player 69 not found");
}

if(team.findPlayer(70)) {
    console.log("Player " + team.findPlayer(70)?.number + " found" + " - Name: " +
    team.findPlayer(70)?.name + " - Position: " + team.findPlayer(70)?.position);
} else {
    console.log("Player 70 not found");
}