Como fazemos para guardar mais de um valor dentro de uma variavel? Por isso existem as Estruturas de dados. Permitindo guardar e organizar vários valores juntos. Tendo cada uma servindo para um tipo de problema.

**VETORES(arrays/listas)**: é uma fila de posicoes numeradas, onde cada uma guarda um valor. O comeco da posicao se chama indice e ela sempre vai comecar no [0]. Exemplo:
    valor: [8.5, 7.0, 9.5]
    indice:  0 /  1  / 2 

*OBS: 3 itens, com 3 indices de 0 a 2;*

**MATRIZES**: É uma tabela. ou seja, um vetor de vetores com linhas e conlunas. voce acessa passando o valor de 2 indices ([LINHA] [COLUNA]). Exemplo:
                    col 0  col 1  col 2
        linha 0  [   8      7      9  ]
        linha 1  [   6      5      10 ]
        linha 2  [   7      8      7  ]
*Se eu acessar a matriz[2][1], ele me devolve matriz[2][1] = 8;*

**STRINGS(Texto)**: É uma sequência de caracteres, como se fosse um vetor so que de letras. Exemplo:
        nome = "lauro"
        vetor[0] = "l"
        vetor[4] = "o"
        
**REGISTROS / OBJETOS**: Ele agrupa dados de diferentes tipos sobre uma mesma objeto. Nome, com email, com idade e etc. Exemplo:
        tipo pessoa = registro
            nome: caractere
            idade: inteiro
            email: caractere
        fimregistro

Temos também outros tipos de estruturas como:
    *PILHA(STACK)* = Último a entrar, primeiro a sair (LIFO) (Botão “desfazer”, histórico do navegador);
    *Fila (queue)* = Primeiro a entrar, primeiro a sair (FIFO) (Fila de impressão, atendimento);
    *Dicionário / mapa* = Pares chave → valor, busca rápida (Agenda de contatos, contagem de palavras);
    *Conjunto (set)* = Valores únicos, sem repetição (Remover duplicatas);
    *Árvore* = Estrutura hierárquica (Pastas do computador, menus);
    *Grafo* = Nós conectados entre si (Redes sociais, mapas e rotas);


Como escolher:
       
        Vários valores do mesmo tipo, em ordem ------------	Vetor/lista

        Uma tabela de linhas e colunas -------------------	Matriz

        Trabalhar com texto ------------------------------	String

        Agrupar dados diferentes de uma coisa só ---------- Registro/dicionário

        Buscar rápido por um nome/código ------------------	Dicionário

        Eliminar repetidos -------------------------------- Conjunto

        