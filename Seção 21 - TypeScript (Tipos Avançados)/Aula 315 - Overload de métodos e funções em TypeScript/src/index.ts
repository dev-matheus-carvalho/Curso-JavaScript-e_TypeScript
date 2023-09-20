type Adder = {
  (x: number): number;
  (x: number, y: number): number;
  (...array: Array<number>): number;
};

const adder: Adder = (x: number, y?: number, ...array: Array<number>) => {
  if (array.length > 0)
    return array.reduce((soma, valor) => soma + valor, 0) + x + (y || 0);
  return x + (y || 0);
};

console.log(adder(1));
console.log(adder(1, 2));
console.log(adder(1, 2, 3));
console.log(adder(1, 2, 3, 4));
