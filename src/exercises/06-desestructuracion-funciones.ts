
/*
    ===== Código de TypeScript =====
*/

export interface Product {
  desc: string;
  price: number;
}

const cellphone: Product = {
  desc: "Xiaomi mi11 lite",
  price: 1800,
};

const tablet: Product = {
  desc: "Samsung A1",
  price: 1200,
};

export function calculateSaleTax(product: Product[]): [number, number] {
  let total = 0;

  product.forEach(({ price }) => {
    total += price;
  });
  return [total, total * 0.15];
}

const items = [cellphone, tablet];

const [ total, saleTax ] = calculateSaleTax(items);

console.log("Total is: ", total);
console.log("Sale taxes is: ", saleTax);
console.log("total of your purchase is : ",total + saleTax);
