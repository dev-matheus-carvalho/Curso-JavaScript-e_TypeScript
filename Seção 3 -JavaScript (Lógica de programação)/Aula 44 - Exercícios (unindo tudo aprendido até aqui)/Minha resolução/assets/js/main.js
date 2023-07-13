function calculoIMC() {
    const form = document.querySelector('.formulario');
    const resultado = document.querySelector('.resultado');

    function recebeEventForm(evento){

        evento.preventDefault();

        const peso = form.querySelector('.peso')
        const altura = form.querySelector('.altura');

        const convertePeso = Number(peso.value);
        const converteAltura = Number(altura.value);

        const verificaPeso = 635 >= convertePeso && 25 <= convertePeso;
        const verificaAltura = 2.59 >= converteAltura && 0.54 <= converteAltura;
        const resultadoVerificacao = verificaPeso && verificaAltura;

        if(resultadoVerificacao){
            
            const calculaIMC = peso.value / (altura.value * altura.value);

            const abaixoDoPeso = 18.5 > calculaIMC;
            const pesoNormal = 18.5 <= calculaIMC && 24.9 >= calculaIMC;
            const sobrePeso = 25 <= calculaIMC && 29.9 >= calculaIMC;
            const obsidade1 = 30 <= calculaIMC && 34.9 >= calculaIMC;
            const obsidade2 = 35 <= calculaIMC && 39.9 >= calculaIMC;
            const obsidade3 = 40 < calculaIMC;

            if(abaixoDoPeso){
                resultado.innerHTML = `Abaixo do peso`;
            } else if (pesoNormal) {
                resultado.innerHTML = `Peso normal`;
            } else if(sobrePeso){
                resultado.innerHTML = `Sobrepeso`;
            } else if (obsidade1){
                resultado.innerHTML = `Obesidade 1`;
            } else if (obsidade2){
                resultado.innerHTML = `Obesidade 2`;
            } else {
                resultado.innerHTML = `Seu peso é de ${convertePeso} kg e está com obesidade 3`;
            }


        } else{
            resultado.innerHTML = `Digite valores válidos`;
        }
    }

    form.addEventListener('submit', recebeEventForm);

}

calculoIMC();


/*

if (verificaPeso){

            const calculaIMC = peso.value / (altura.value * altura.value);

            const abaixoDoPeso = 18.5 < calculaIMC;
            const pesoNormal = 18.5 >= calculaIMC && 24.9 <= calculaIMC;
            const sobrePeso = 25 >= calculaIMC && 29.9 <= calculaIMC;
            const obsidade1 = 30 >= calculaIMC && 34.9 <= calculaIMC;
            const obsidade2 = 35 >= calculaIMC && 39.9 <= calculaIMC;
            const obsidade3 = 40 > calculaIMC;

            if(abaixoDoPeso){
                resultado.innerHTML = ``;
            }
            



        } else {
            console.log('Peso inválido');
        }




*/