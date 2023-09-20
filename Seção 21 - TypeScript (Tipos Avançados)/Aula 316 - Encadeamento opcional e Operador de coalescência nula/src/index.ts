type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
};

const documento: Documento = {
  titulo: 'Ordem de serviço 387.543.7-8',
  texto: 'Correção do bug do código do cliente Coca-Cola ltda',
  // data: new Date(),
};

console.log(documento.data?.toDateString() ?? `Doesn't exist date.`);

console.log();

console.log(undefined ?? `Doesn't exist, it's undefined.`);
console.log(null ?? `Doesn't exist, it's null.`);
console.log(false ?? `Doesn't exist, it's false.`);
console.log(0 ?? `Doesn't exist, it's 0.`);
console.log('' ?? `Doesn't exist, it's 0.`);
