console.log("Hola Mundo!!!!");

/*
    ===== Código de TypeScript =====
*/

function add(a: number, b: number) {
  return a + b;
}

const addArrow = (a, b) => {
  return a + b;
};

function multiply(
  number: number,
  otherNumber?: number,
  base: number = 2
): number {
  //? El argumento requerido no puede seguir depues de uno opcional
  return number * base;
}

//? ===========================================================

interface PlayerDS {
  //* definimos una interfaz con los atributos del personaje
  name: string;
  hp: number;
  showHp: () => void;
}

function heal(player: PlayerDS, healX: number): void {
  //? definimos nuestra funcion curar con las caracteristicas de nuestro personaje que creamos en la interfaz
  //* si ponemos void es para que no retorne nada, pero igual en js retornaria undefined
  player.hp += healX;

  console.log(player);
}

const newPlayer: PlayerDS = {
  //* Creamos el nuevo personaje
  name: "solaire",
  hp: 50,
  showHp() {
    console.log("Points of life: ", this.hp);
  },
};

heal(newPlayer, 30); //* le asignamos la curacion al newPlayer

newPlayer.showHp();

// const result = multiply(30, 20);

// console.log(result);
