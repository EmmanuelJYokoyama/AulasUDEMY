const form = document.querySelector('.container h1');
const data = new Date();

const opcoes = {
    dateStyle: 'full'
};

form.innerHTML = data.toLocaleDateString('pt-BR', opcoes); 