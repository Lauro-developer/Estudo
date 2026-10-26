let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function verificarClick(){
    console.log ('O botao foi acionado');
}

function acionarClick() {
    alert('Eu amo JS');
}

function executarClick(){
    let cidade = prompt('Me fale uma cidade do brasil: ');
    alert('Estive em ' + cidade + ' e lembrei de voce');
}

function somarClick(){
    let valor1 = parseInt(prompt('Me fale um numero inteiro: '));
    let valor2 = parseInt(prompt('Me fale outro numero inteiro: '));
    let soma = valor1 + valor2 ;
    alert(`A soma entre ${valor1} e ${valor2} é igual a ${soma}`);
}


