type ObterChaveFn = <O, K extends keyof O>(objeto: O, chave: K) => O[K];

const obterChave: ObterChaveFn = (objeto, chave) => objeto[chave];

const animal = {
  especie: 'Cachorro',
  raca: 'Cane Corso',
  vacina: ['V1', 'V2'],
};

const vacinas = obterChave(animal, 'vacina');

console.log(vacinas);
