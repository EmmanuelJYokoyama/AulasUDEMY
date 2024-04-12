const pessoas = [
    {nome: 'Isabela', idade: 18},
    {nome: 'Rosana', idade: 22},
    {nome: 'Emerson', idade: 49},
    {nome: 'Alberto', idade: 32},
    {nome: 'Ana', idade: 29},
    {nome: 'Zé', idade: 29},
    {nome: 'João', idade: 29},
]
const nomeMaior = pessoas.filter(function(valor){
    return (valor.nome.length <= 5 ) 
})
const idadeSep = pessoas.filter(function(valor){
    return (valor.idade <= 29) 
})

console.log(nomeMaior) 
console.log(idadeSep) 