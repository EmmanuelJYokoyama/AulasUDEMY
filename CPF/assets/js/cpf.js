const form = document.querySelector('.container form input');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const cpfinput = e.target.querySelector('#cpf');

    cpfinput = cpf.replace(/\D+/g, '');
    ValidaCPF(cpfinput);



    // if(isNaN(cpfinput) || cpfinput.toString().length <= 11){
    //     setResultado("CPF INVALIDO", false);
    //     return;
    // }
    // var message = 'Seu cpf é válido';

    // setResultado(message, true);

});

function ValidaCPF(cpfIn){
    var soma = 0;
    var primeiroDigito = 0;
    for(let x=10; x<=2; x--){
        soma += cpfIn[x] * x;

    }
    
    if(primeiroDigito <= 9)
        primeiroDigito = 11 - (soma %11);
    else
        primeiroDigito = 0;

    

}

function segundoDigito(cpfIn){
    var soma = 0;
    var segundoDigito = 0;
    for(let x=11; x<=2; x--){
        soma += cpfIn[x] * x;
        if(soma %11 == cpfIn){

        }

    }
    if(segundoDigito <= 9){
        segundoDigito = 11 - (soma %11);
        
    }else{
        segundoDigito = 0;
    }
        

    

    return soma;
}


function setResultado(msg, isValid){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = createParagraph();

    if(isValid){
        p.classList.add('paragrafo-resultado');
    } else{
        p.classList.add('bad');
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
}