class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado) return;
        this.ligado = true;
    }

    desligar() {
        if(!this.ligado) return;
        this.ligado = false;
    }
}

class SmartPhone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}

class Tablet extends DispositivoEletronico {
    constructor(nome, temWifi) {
        super(nome);
        this.temWifi = temWifi;
    }

    ligar() {
        console.log('Método ligar da classe Tablet');
    }
}

const s1 = new SmartPhone('Samsung', 'Preto', 'S10');
console.log(s1);

console.log();

const t1 = new Tablet('iPad', true);
t1.ligar();
