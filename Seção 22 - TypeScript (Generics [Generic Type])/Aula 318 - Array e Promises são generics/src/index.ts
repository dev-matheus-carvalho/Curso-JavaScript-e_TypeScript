type Meutipo = number;

const arrayNumeros: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arrayNumeros);

async function promisseAsync() {
  return 1;
}

function minhaPromise(): Promise<Meutipo> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
}

promisseAsync().then((resultado) => console.log(resultado));
minhaPromise().then((resultado) => console.log(resultado));
