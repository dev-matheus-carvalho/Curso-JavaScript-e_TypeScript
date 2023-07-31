function soma (x, y){
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new ReferenceError('X e y precisam ser números');
    }
    return x + y;
}

try{
    console.log(soma(1, 2));
    console.log(soma('1', 2));
} catch (error){
    // console.log(error);
    console.log('Alguma coisa mais agradável ao usuário');
}