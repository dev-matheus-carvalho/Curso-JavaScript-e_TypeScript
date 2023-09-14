//                        Chave   Valor
// const objetoA: Record<string, unknown> = {
//   chaveA: 'A',
//   chaveB: 'B',
// };

// objetoA.chaveA = 'Outro valor';

//==================================================================

const objetoA: {
  readonly chaveA: string;
  chaveB: string;
  chaveC?: string;
  [key: string]: unknown; // Cria uma chave e uma valor do tipo string
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

// objetoA.chaveA = 'Outro valor'; -> A chaveA não pode mais ser alterada
console.log(objetoA.chaveA);

objetoA.chaveC = 'Minha chave C';
objetoA.chaveD = 'Minha chave D';
