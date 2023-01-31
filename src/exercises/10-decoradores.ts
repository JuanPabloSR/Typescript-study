/*
    ===== Código de TypeScript =====
*/

function classDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    newProperty = "New Property";
    hello = "override";
  };
}

@classDecorator
class MySuperClass {
  public myProperti: string = "ABC123";

  print() {
    console.log("Hi world");
  }
}

console.log( MySuperClass );

const miClass = new MySuperClass;

console.log(miClass.myProperti);