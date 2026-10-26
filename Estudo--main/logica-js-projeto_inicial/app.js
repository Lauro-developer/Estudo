/* //-------------------------------------
function exibir(){
    console.log ('Olá mundo');
}
exibir();
//-------------------------------------
let nome = prompt('Qual seu nome: ');
function exibir1(){
    console.log (`Ola ${nome}`);
}
exibir1()
//-------------------------------------
let valor = prompt('Me fale um número');
function numero(valor){
    return valor * 2; 
}
let resultado = numero(valor);
console.log(resultado)
//-------------------------------------
let a = parseInt(prompt('Me diga um numero inteiro: '));
let b = parseInt(prompt('Me diga outro inteiro: '));
let c = parseInt(prompt('Me diga outro inteiro: '));
function calcularMedia(a , b, c){
    return(a + b + c) / 3;
}
let media = calcularMedia (a,b,c);
console.log(media);
//-------------------------------------
let valor1 = parseInt(prompt('Me diga um valor: '));
let valor2 = parseInt(prompt('Me diga outro valor: '));
function retorno(valor1,valor2){
    return valor1 > valor2 ? valor1 : valor2 ;
}
let maiorNumero = retorno(valor1, valor2);
console.log(maiorNumero);
//-------------------------------------
let multiplicacao = parseInt(prompt('Me diga um numero: '));
function retornoMultiplicado (multiplicacao){
    return multiplicacao * multiplicacao;
}
let numeroMultiplicado = retornoMultiplicado(multiplicacao);
console.log(numeroMultiplicado)
//------------------------------------- 
let peso = parseFloat(prompt('Me diga seu peso em KG: '));
let altura = parseFloat(prompt('Me diga sua altura em Metros: '));
function calculoImc (peso, altura){
    let imc = peso / (altura * altura);
    return imc
}
let resultadoImc = calculoImc(peso,altura);
console.log(resultadoImc);
//-------------------------------------
let numeroFatorial = parseInt(prompt('DIGITE UM NÚMERO: '));

function calculoFatorial (numeroFatorial){
    if (numeroFatorial == 0 || numeroFatorial == 1){
        return 1;
    }

    let fatorial = 1;
    for (let i = 2; i <= numeroFatorial; i++){
        fatorial *= i;
    }
    return fatorial;
}
let resultado = calculoFatorial(numeroFatorial);
console.log(`O fatorial de ${numeroFatorial} é ${resultado}`);

let carteira = parseFloat(prompt('Qual o valor em dolar: US$ '));
function conversor(carteira){
    let conversao = carteira * 4.80;
    return conversao;
}
let resultado = conversor(carteira);
console.log(resultado);

let altura = parseFloat(prompt('Qual altura da sala: '));
let largura = parseFloat(prompt('Qual largura da sala: '));

function calculoAeP(altura,largura){
    let a = altura * largura;
    let p = 2 * (altura + largura);
    alert(`A area é ${a} e o  perimetro é ${p}`);
}
let resultado  = calculoAeP(altura,largura);

let raioAeP = parseFloat(prompt('Qual o raio da sala: '))

function calculoAeP(raioAeP){
    let a = 3.14 * (raioAeP * raioAeP);
    let p = 2 * 3.14 * raioAeP;
    alert(`A área é ${a} e o  perimetro é ${p}`);
}
let resultado = calculoAeP(raioAeP);

let numero = parseInt(prompt('Me diga o numero que voce quer ver a tabuada: '));

function tabuada(numero){
    for (let i = 1; i <= 10; i++){
        let resultado = numero * i;
        console.log(`${numero} x ${i} = ${resultado}`);
    }
}
tabuada(numero);

let listaGenerica = [];
console.log(listaGenerica);

let linguagensDeProgramacao = ['JavaScript','C','C++', 'Kotlin', 'Python'];
console.log(linguagensDeProgramacao);

linguagensDeProgramacao.push('java','Ruby','GoLang');
console.log(linguagensDeProgramacao);

let nome1 = ['lauro','maria','carlos'];
console.log(nome1[0]);

let nome2 = ['Rubens','afonso','karla'];
console.log(nome2[1]);

let nome3 = ['mario','gustavo','isabella'];
console.log(nome3[2]);*/
