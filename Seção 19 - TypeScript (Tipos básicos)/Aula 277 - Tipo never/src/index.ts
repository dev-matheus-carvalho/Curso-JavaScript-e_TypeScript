//Essa função nunca retorna nada
function criaErro(): never {
  throw new Error('Um erro qualquer');
}

criaErro();
