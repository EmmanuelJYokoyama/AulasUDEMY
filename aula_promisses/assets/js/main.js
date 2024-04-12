function rand(min, max){
    min *= 1000;
    max *= 1000;

    return Math.floor(Math.random() * (max - min)+min);
}

function Espera(msg, tempo){
    return new Promise((resolve, reject)=>{
        if(typeof msg !== 'string'){
            reject(false);
            return;
        }

        setTimeout(() =>{
            resolve(msg.toUpperCase() + ' - Promise trespassed');
            return;
        }, tempo);
    });
}

// -=----=-=-=-=-=-=-=-=--=-=-=-=-=-=-=

const promises = [
    Espera('Promise 1', rand(3000)),
    Espera('Promise 2', rand(1000)),
    Espera('Promise 3', rand(5000)),
    
];

Promise.race(promises)
    .then(function(valor){
        console.log(valor);
    })
    
    .catch(function(erro){
        console.log(erro);
    });