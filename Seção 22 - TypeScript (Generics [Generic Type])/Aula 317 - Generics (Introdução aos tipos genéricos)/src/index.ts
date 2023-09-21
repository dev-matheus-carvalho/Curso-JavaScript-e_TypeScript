type FilterCallback<T> = (value: T, index?: number, array?: T[]) => boolean;

export function meuFilter<T>(array: T[], callbackfn: FilterCallback<T>): T[] {
  const novoArray = [];

  for (let i = 0; i < array.length; i++) {
    if (callbackfn(array[i])) {
      novoArray.push(array[i]);
    }
  }

  return novoArray;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const arrayOriginal = array.filter((value) => value < 5);
const arrayFiltrado = meuFilter(array, (value) => value < 5);

console.log(arrayOriginal);
console.log(arrayFiltrado);
