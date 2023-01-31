/*
    ===== Código de TypeScript =====
*/

interface Passenger {
  name: string;
  children?: string[];
}
const Passenger1: Passenger = {
  name: "Torito",

}
const Passenger2: Passenger = {
  name: "Torito",
  children: ['juan', 'pablo']
}

function printChildren ( passenger : Passenger ): void {

  const whatChildrenHave = passenger.children?.length || 0;

  console.log(whatChildrenHave);
} 

printChildren( Passenger1 )