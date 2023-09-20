// type CoresObj = {
//   vermelho: string;
//   azul: string;
//   verde: string;
// };

const coresObjIngles = {
  vermelho: 'red',
  verde: 'green',
  azul: 'blue',
};

type CoresObj = typeof coresObjIngles;
type CoresChaves = keyof CoresObj;

function traduzirCor(cor: CoresChaves, cores: CoresObj): string {
  return cores[cor];
}

console.log(traduzirCor('vermelho', coresObjIngles));
console.log(traduzirCor('verde', coresObjIngles));
