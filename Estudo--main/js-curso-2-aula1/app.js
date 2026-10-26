let numeroSorteado = []
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate:1.2});
}
function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do numero Secretos');
    exibirTextoNaTela('.texto__paragrafo', 'Escolha um número de 1 a 10');
}
exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto){
        exibirTextoNaTela ('h1','ACERTOU!!');
        exibirTextoNaTela('.texto__paragrafo', 'Voce descobriu o numero secreto');
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        if(chute > numeroSecreto){
            exibirTextoNaTela('h1', 'TENTE NOVAMENTE!');
            exibirTextoNaTela('.texto__paragrafo', 'O numero secreto é menor');
        }else {
            exibirTextoNaTela('h1', 'TENTE NOVAMENTE!');
            exibirTextoNaTela('.texto__paragrafo', 'O numero secreto é maior');
        }
         limparCampo();
    }
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeElementosLista = numeroSorteado.length;
    if(quantidadeElementosLista == numeroLimite){
        numeroSorteado = [];
    }
    if (numeroSorteado.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else {
        numeroSorteado.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function habilitarNovoJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled','true');
}