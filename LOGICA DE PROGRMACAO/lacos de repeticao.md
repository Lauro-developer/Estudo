Além das estruturas condiconais, temos a estrutura de repeticao (ou lacos de repeticao).        
    Quando quisermos que certa parte do codigo/programa continue repetindo até que aquela parte seja validada.

Dentro de todo laco de repeticao, temos 4 partes:

    1- INICIALIZACAO: o valor de partida;
    2- CONDICAO: Quando continuar ou parar;
    3- CORPO: Oque será mantido enquanto o laco for repetido;
    4- ATUALIZACAO: A mudanca que leva o laco ao fim (A incrementacao);

OBS: Caso voce esqueca a atualizacao, o laco nunca termina e fica um loop infinito;

TEMOS:
- FOR (Para): Quando voce sabe quantas vezes repetir; A condicao é testada antes de cada repeticao.
    exemplo:
            para i de 1 ate 5 faca
                escreva(i)
            fimpara
            Basicamente o codigo so vai parar de se repetir quando o I for igual a 10, quando essa condicao for verdadeira o codigo vai parar.
        1. Inicialização: Faz i = 0 (só na primeira vez).
        2. Teste: Pergunta se i < 10.
        3. Execução: Se for verdadeiro, ele executa o bloco interno (escreva(i)).
        4. Incremento: Só agora ele faz o i++ (soma 1).
        5. Repetição: Volta para o passo 2.

- WHILE (Enquanto): Quando voce nao sabe quantas vezes voce vai repetir aquele loop. Repete enquanto uma condicao for verdadeira; A condicao é testada antes de cada repeticao. caso seja falsa, o corpo nunca roda.
    exemplo:
            senha <- ""
            enquanto senha != "1234" faca
                escreva("Digite a senha:")
                leia(senha)
            fimenquanto
            escreva("Acesso liberado")

- DO-WHILE (Repita até): A condicao é testada depois corpo, ou seja, o corpo/codigo é rodado no minimo uma vez e depois verifica se a condicao é verdadeira. É ideal para menus e validação de entrada.
    exemplo:
            repita
            escreva("Digite uma nota de 0 a 10:")
            leia(nota)
            ate (nota >= 0) E (nota <= 10)

Quando escolher cado um:
    FOR = Numero de repeticao conhecido;
    WHILE = Depende de uma condicao e numero de repeticao desconhecido;
    DO-WHILE = Precisa rodar ao menos uma vez;

Temos alguns termos nos lacos de repeticoes:
    BREAK = Interrompe o laco completamente.
    Continue: Pula para a proxima volta, ignorando o resto do corpo.