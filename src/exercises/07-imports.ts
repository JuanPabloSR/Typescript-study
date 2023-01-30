import { calculateSaleTax, Product } from "./06-desestructuracion-funciones";

console.log("Hola Mundo!!!!");

/*
    ===== Código de TypeScript =====
*/

const shoppingCart: Product[] = [
    {
        desc: 'cellphone 1',
        price: 500
    },
    {
        desc: 'cellphone 2',
        price: 800
    },
];

const [total, saleTax] = calculateSaleTax( shoppingCart );

console.log("Total is: ", total);
console.log("Sale taxes is: ", saleTax);
console.log("total of your purchase is : ",total + saleTax);