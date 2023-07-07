const alunos = ['João', 'Maria', 'Luiz'];

console.log(alunos);

// Acessando por index

console.log(alunos[0]);
console.log(alunos[2]);

// Editar um array

alunos[0] = 'Luiz';
alunos[2] = 'João';

console.log(alunos);


// Adicionar um elemento no final

alunos[3] = 'Ana';                   // 1ª forma
alunos[alunos.length] = 'Ítalo';    // 2ª forma
alunos.push('Otávio');             // 3ª forma

console.log(alunos);

// Adicionar um elemento no início

alunos.unshift('Matheus');
console.log(alunos);

// Remove elementos do array no final

const removido = alunos.pop(); // Remove o último elemento do array
console.log(alunos);
console.log(`O/A aluno(a) removido(a) foi: ${removido}`);

// Remove elementos do array no início

const removidoInicio = alunos.shift();
console.log(alunos);
console.log(`O/A aluno(a) removido(a) foi: ${removidoInicio}`);


// Fatiar os elementos

console.log(alunos.slice(0, 3)); // Limita o valor dos elementos

// Remove o elemento em qualquer índice

delete alunos[1]; // O elemento será removido porém estará vazio
console.log(alunos);

// Verificando o tipo de dado do array

console.log(typeof alunos); // object
console.log(alunos instanceof Array); // true
