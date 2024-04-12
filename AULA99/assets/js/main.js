function Conta(agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(value){
    if(valor > this.saldo){
        console.log('Saldo insuficiente!')
        
    }

    this.saldo -= value;
    this.verSaldo();
};

Conta.prototype.depositar = function(value){
    this.saldo += value
    this.verSaldo()
};

Conta.prototype.verSaldo = function(){
    console.log(`Ag/c: ${this.agencia}/${this.conta} \n`+
    `Saldo: R$ ${this.saldo.toFixed(2)}`);
};

const conta = new Conta(11, 22, 10)
conta.depositar(11)