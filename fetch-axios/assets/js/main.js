fetch('pessoas.json')
  .then(resposta => resposta.json())
  .then(json => carregaElementosNaPagina(json));

// axios('pessoas.json')
//   .then(resposta => carregaElementosNaPagina(resposta.data));

const formatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});


function carregaElementosNaPagina(json) {
  const table = document.createElement('table');

  for(let pessoa of json) {
    const tr = document.createElement('tr');

    let nomePessoa = document.createElement('td');
    nomePessoa.innerHTML = pessoa.nome;
    tr.appendChild(nomePessoa);

    let idadePessoa = document.createElement('td');
    idadePessoa.innerHTML = pessoa.idade;
    tr.appendChild(idadePessoa);

    let emailPessoa = document.createElement('td');
    emailPessoa.innerHTML = pessoa.email;
    tr.appendChild(emailPessoa);

    let salarioPessoa = document.createElement('td');
    salarioPessoa.innerHTML = formatter.format(pessoa.salario);
    tr.appendChild(salarioPessoa);

    table.appendChild(tr);
  }

  const resultado = document.querySelector('.resultado');
  resultado.appendChild(table);
}
