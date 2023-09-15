type MapStringsCallback = (item: string) => string;

function mapStrings(
  array: Array<string>,
  callbackfn: MapStringsCallback,
): Array<string> {
  const newArray: Array<string> = [];

  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    newArray.push(callbackfn(item));
  }
  return newArray;
}

const abc = ['a', 'b', 'c'];
const abcMapped = mapStrings(abc, (item) => item.toUpperCase());

console.log(abcMapped);
