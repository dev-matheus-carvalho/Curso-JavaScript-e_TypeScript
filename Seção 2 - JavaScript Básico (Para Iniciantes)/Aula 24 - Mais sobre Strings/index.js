let umaString = "Um texto";
console.log(umaString); // Um texto

umaString = "Um \"texto\"";
console.log(umaString); // Um "texto"

umaString = "Um \texto";
console.log(umaString); // Um 	exto

umaString = "Um \\texto";
console.log(umaString); // Um \texto

//===============================Indíce=============================

umaString = "Um texto";
console.log(umaString[4]); // e

umaString = "Um texto";
console.log(umaString[8]); // undefined

umaString = "Um texto";
console.log(umaString.charAt(6)); // t

umaString = "Um texto";
console.log(umaString.indexOf('texto')); 
// Mostra a partir de qual índice aparece a palavra texto = 3. Se não for encontrado retorna o valor -1.

umaString = "Um texto";
console.log(umaString.indexOf('Um', 3));
// Procura a palavra 'Um' a partir do índice 3 e retorna -1

umaString = "Um texto";
console.log(umaString.lastIndexOf('o', 3));
// Procura a letra 'o' a partir do índice 3 de trás pra frente. Resultado = -1

umaString = "Um texto";
console.log(umaString.match(/[a-z]/g));
// Retorna todas as letras minúsculas. Resultado: [ 'm', 't', 'e', 'x', 't', 'o' ]

umaString = "Um texto";
console.log(umaString.search(/x/)); 
// Encontra o índice que a letra 'x' está: 5

//==============================Replace============================

umaString = "Um texto";
console.log(umaString.replace('Um', 'Outro'));
// Substitui a palavra 'Um' por 'Outro'

//===============================length============================

umaString = "Um texto";
console.log(umaString.length); // 8

//=================================slice===========================

umaString = "Um texto";
console.log(umaString.slice(3, 8)); // Retorna a palavra 'texto'

//=================================splite==========================

umaString = "Um texto";
console.log(umaString.split(' ')); // [ 'Um', 'texto' ]