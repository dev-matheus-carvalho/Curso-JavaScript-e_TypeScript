try{
    console.log('Fui execultado pois não gerei erro')
    console.log(a);
} catch(error){
    //Execultado quando há erros
    console.log('Fui executado pois gerou um erro');
} finally {
    // É executado sempre
    console.log('Finally: Sempre serei executado')
}