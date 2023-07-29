const nome = 'Matheus Carvalho';

for (let i of nome){
    console.log(i); // Retorna o valor
}

const nomes = ['Matheus', 'Luan', 'Campos', 'de', 'Carvalho'];

nomes.forEach(function(element) {
    console.log(element);
});

nomes.forEach(element => {
    console.log(element);
});