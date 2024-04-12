class DispositivoEletronico{
    constructor(nome, ligado){
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if(this.ligado){
            console.log(this.nome + ' ja ligado.');
            return;
        }
        this.ligado = true;
    }

    desligado(){
        if(!this.ligado){
            console.log(this.nome + ' ja desligado.')
            return;
        }
        this.ligado = true;
    }
}

class Smartphone extends DispositivoEletronico{
    constructor(nome, cor, modelo){
        super(nome);

        this.cor = cor;
        this.modelo = modelo;
    }

    setCor(cor){
        this.cor = cor
    }
}

const s1 = new Smartphone('Samsung', 'Preto', 'Galaxy S22')

s1.ligar();
s1.setCor('CInza')
console.log(s1)