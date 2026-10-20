A Logica de Programação é a forma como fazemos para decompor um problema em passos claros e ordenados, para que o computador possa entender, ou seja, a logica pos tras de uma aplicacao.

Temos alguns termos como:

-- ALGORITMO: Um sequencia finita de passos para resolver um problema;
-- DECOMPOSICAO: Quebrar o problema grande em problemas pequenos;
-- ABSTRACAO: Ignorar detalhes irrelevantes e focar no essencial;
-- RECONHECER PADROES: Identificar oque se repete;
-- INPUT/PROCESS/OUTPUT (IPO): Todo programa recebe dados, processa eles e devolve algum resultado como solicitado, ou seja, entrada, processamento e saida desses dados;

As 3 principais formas de representar um algortimo:
    -Descricao Narrativa: Escrever os passos no seu idioma;
    -Fluxograma: Desenho com formas (INICIO DO PROCESSO / FIM DO PROCESSO / DECISAO / PROCESSO);
    -Pseudocódigo: Meio-termo entre o seu idioma e o código (No caso usamos o portugol);

Exemplo de portugol:
        algoritmo "media"
        var 
            n1,n2,n3,media = real 
        inicio 
            escreval("Me fale sua nota1:")
            leia(n1)
            escreval("Me fale sua nota2:")
            leia(n2)
            escreval("Me fale sua nota3:")
            leia(n3)
            media <- (n1+n2+n3) / 3
            Escreva(media)
        fimalgoritmo
