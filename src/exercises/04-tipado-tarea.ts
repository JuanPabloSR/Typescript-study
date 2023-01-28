console.log("Hola Mundo!!!!");

/*
    ===== Código de TypeScript =====
*/
interface SuperHero {
  name: string;
  age: number;
  adress: Adress;
  showAdress: () => void;
}

interface Adress {
  street: string;
  country: string;
  city: string;
}

const superHero = {
  name: "Spiderman",
  age: 30,
  adress: {
    street: "Main St",
    country: "USA",
    city: "NY",
  },
  showAdress() {
    return this.name + ", " + this.adress.city + ", " + this.adress.country;
  },
};

const adress = superHero.showAdress();
console.log(adress);
