// Super Classe
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor) {
    if(valor > this.saldo) {
        console.log(`Saldo insufuciente: R$ ${this.saldo.toFixed(2)}`);
        return;
    }
    
    this.saldo -= valor;
    this.verSaldo();
};

Conta.prototype.depositar = function(valor) {
    this.saldo += valor;
    this.verSaldo();
};

Conta.prototype.verSaldo = function() {
    console.log(`Ag/c: ${this.agencia}/ ${this.conta} | ` + `Saldo: R$ ${this.saldo.toFixed(2)}`);
};

//==========================================================================

function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo); // Herda de Conta
    this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function(valor) {
    if(valor > (this.saldo + this.limite)) { // 90 > 110
        console.log(`Saldo insufuciente: R$ ${this.saldo.toFixed(2)}`);
        return;
    }
    
    this.saldo -= valor;
    this.verSaldo();
};

//========================================================================

function ContaPoupanca(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo); // Herda de Conta
}

ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;


//========================================================================

const contaCorrente = new ContaCorrente(11, 22, 0, 100);
contaCorrente.depositar(10);
contaCorrente.sacar(90);

console.log();

const contaPoupanca = new ContaPoupanca(12, 30, 0);
contaPoupanca.depositar(10);
contaPoupanca.sacar(10);
contaPoupanca.sacar(1);

/*

Polimorfismo é fazer com que as classes flihas, herdem carcterísticas da classe Pai
mas que seus métodos se comportem de foma diferente como foi no caso
da conta corrente.

*/