function Produto(nome, preco, estoque){
    this.nome = nome
    this.preco = preco
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        value: estoque,
        writable: false,
        configurable: true
    });
}

const p1 = new Produto('Camisa', 12, 6)
p1.estoque = 2
console.log(p1)

 
