console.log("Hola Mundo!!!!");

/*
    ===== Código de TypeScript =====
*/

function add(a: number, b:number) {
  return a + b;
}

function multiply (number: number, otherNumber?:number, base:number=2):number {  //? El argumento requerido no puede seguir depues de uno opcional
    return number * base;
}


const addArrow = (a, b) => {
  return a + b;
}


const result = multiply(30, 20);

console.log(result);
