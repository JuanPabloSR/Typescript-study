console.log("Hola Mundo!!!!");

/*
    ===== Código de TypeScript =====
*/

let skills: string[] = ["Bash", "Counter", "Healing"];
interface Player {
  name: string;
  hp: number;
  skills: string[];
  homeTown?: string;
}

const player: Player = {
  name: "Ezio",
  hp: 100,
  skills: ["Bash", "Counter", "Healing"],
};

player.homeTown = "Palete village";
console.table(player);