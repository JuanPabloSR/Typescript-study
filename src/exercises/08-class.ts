/*
    ===== Código de TypeScript =====
*/
class NormalPerson {
  constructor(public name: string, public adress: string) {}
}

class Hero extends NormalPerson {
  //* a diferencia de las interfaces en las clases si se pueden agregar funciones

  constructor(
    public alterEgo: string,
    public age: number,
    public realName?: string
  ) {
    super(realName, 'el jardin');
  }
}

const ironman = new Hero("IronMan", 45, "tony");

console.log(ironman);
