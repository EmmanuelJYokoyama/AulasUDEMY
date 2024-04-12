const form = document.querySelector('#form');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');
    
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value); 

    if(!peso || !altura){
        setResultado("VALORES INVALIDOS", false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivel = getNivelIMC(imc);
    var message = `Seu imc é ${imc} (${nivel})`;

    setResultado(message, true);

});

function getNivelIMC(imcIn){
    var nivel = ['Abaixo do peso' ,'Peso normal', 'SobrePeso', 'OB1', 'OB2', 'OB3'];

    if(imcIn >= 39.9){
        return nivel[5];
    }

    if(imcIn >= 34.9){
        return nivel[4];
    }

    if(imcIn >= 29.9){
        return nivel[3];
    }
  

    if(imcIn >= 24.9){
        return nivel[2];
    }
  
    if (imcIn >= 18.5){
        return nivel[1];
    }
      

    if(imcIn < 18.5){
        return nivel[0];
    }

   
}


function getImc(pesoIn, alturaIn){
    var result = pesoIn / (alturaIn**2)
    return result.toFixed(2);
}

function createParagraph(){
    const p = document.createElement('p');
    
    return p;
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