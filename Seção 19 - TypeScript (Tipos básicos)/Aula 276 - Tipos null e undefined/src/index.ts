let x;

if (typeof x === 'undefined') x = 20;
console.log(x * 2);

export function createPerson(fisrstName?: string, lastName?: string): string {
  return `${fisrstName} ${lastName}`;
}

const pessoa1 = createPerson('Matheus');
console.log(pessoa1);

//==============================null======================================

export function squareOf(x: any): number | null {
  if (typeof x === 'number') return x * x;
  return null;
}

const operation1 = squareOf(2);
const operation2 = squareOf('2');

console.log(operation1);
console.log(operation2);
