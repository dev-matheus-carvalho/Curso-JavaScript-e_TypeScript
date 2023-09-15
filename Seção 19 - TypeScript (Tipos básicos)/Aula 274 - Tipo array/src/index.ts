// Array<T> - T[]

export function multiplicaArgs(...array: Array<number>): number {
  return array.reduce((acumulador, valor) => acumulador * valor, 1);
}

const result = multiplicaArgs(1, 2, 3);
console.log(result);

export function concatenaString(...array: string[]): string {
  return array.reduce((acumulador, valor) => acumulador + valor);
}

const concatenacao = concatenaString('a', 'b', 'c');
console.log(concatenacao);

// Recebe array de strings -> Array de strings
export function toUpperCase(...array: Array<string>): Array<string> {
  return array.map((valor) => valor.toUpperCase());
}

const upperCase = toUpperCase('a', 'b', 'c');
console.log(upperCase);
console.log(upperCase[0]);
console.log(upperCase.length);
