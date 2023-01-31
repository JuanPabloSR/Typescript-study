/*
    ===== Código de TypeScript =====
*/

function whatTypeIam<T>(argument: T) {
  return argument;
}

let iAmString = whatTypeIam("hi world");
let iAmNumber = whatTypeIam(30);
let iAmBoolena = whatTypeIam(true);
let iAmArray = whatTypeIam([1, 2, 3]);
console.log(iAmString);
console.log(iAmNumber);
