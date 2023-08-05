function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome, 
        sobrenome, 
        altura: altura, 
        peso: peso,

        // Getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },

        // Setter
        set nomeCompleto(valor){
            vetor = valor.split(' ');
            this.nome = vetor.shift();
            this.sobrenome = vetor.join(' ');
        },
    
        fala(assunto = 'Falando sobre NADA.') {
            return `${this.nome} está falando ${assunto}`;
        },

        //Getter
        get imc(){
            const indice = this.peso / (this.altura ** 2);
            return `O IMC do(a) ${this.nome} ${this.sobrenome} é de ${indice.toFixed(2)}`;
        }
    }
}

const p1 = criaPessoa('Matheus', 'Carvalho', 1.67, 62);
const p2 = criaPessoa('Joana', 'Viviera', 1.72, 56);

console.log(p1.fala('sobre JS.'), p1.imc);
console.log(p2.fala('sobre Python.'), p2.imc);
console.log('====================================');
console.log(p1.nomeCompleto);
p1.nomeCompleto = 'Matheus Luan Carvalho';
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.nomeCompleto);
console.log(p1.fala());
