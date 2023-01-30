console.log("Hola Mundo!!!!");

/*
    ===== Código de TypeScript =====
*/

interface PlayerMusic {
  volume: number;
  second: number;
  song: string;
  details: Details;
}

interface Details {
  author: string;
  year: number;
}

const playerMusic: PlayerMusic = {
  volume: 90,
  second: 36,
  song: "Asi soy yo",
  details: {
    author: "Cuarteto de nos",
    year: 2006,
  },
};

const { volume, second, song, details } = playerMusic; //*desestructuracion de objetos
// const { volume, second, song, details: {author} } = playerMusic;  //desestructuracion
const { author } = details;

console.log("el volumen actual es de: ", volume);
console.log("el segungo actual es de: ", second);
console.log("la cancion actual es de: ", song);
console.log("el autor es: ", author);

const onePiece: string[] = ["Luffy", "zoro", "sanji"];

const [ p1, p2, p3 ] = onePiece;  //* la desestructuracion de arreglos lo que importa es la posicion
 
console.log("Player 1: ", p1);
console.log("Player 2: ", p2);
console.log("Player 3: ", p3);
