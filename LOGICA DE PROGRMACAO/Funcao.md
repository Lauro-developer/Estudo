Imagina que seu codigo se repete varias vezes, varios if e else, varios lacos. Ai que entra a funcao, ela é basicamente um bloco de codigo, que executa uma terefa especifica. 

    entrada (parametros) -> [FUNCAO] -> saída (retorno).

*MODULARIZACAO* = É a prática de devidir um programa em grandes varias funcoes pequenas, cada um tendo sua responsabilidade. é basicamentee a decomposicao de problemas aplicada ao codigo.

exemplo:
    [LINGUAGEM EM PYHTON]:
        def calcular_media(n1,n2):
            media = (n1 + n2) / 2
            return media
        resultado = calcular_media(7,8)
        print(resultado)

    Dizemos que todas vez que eu chamar a funcao calcular_media , tenho que chamar junto com parametros, como por exemplo 7 e o 8. 

        Definir: criar a função (def ...). Isso ainda não executa nada.

        Chamar: usar a função (calcular_media(7, 8)). Aqui ela executa.

        Parâmetro: a variável na definição (n1, n2).

        Argumento: o valor passado na chamada (7, 8).

        Retorno: o valor devolvido com return.

    Toda vez que eu chamar a funcao (com os parametros se nao for opcional) ela vai entrar no bloco de codigo e executar oque foi programa pra fazer e retornar o valore necessario.

**FUNCAO COM E SEM RETORNO**
    Com retorno: Devolve um valor que voce pode usar ou guardar.
        
        def dobro(x):
            return x * 2
        y = dobro(5)
        y = 10 (VAI RETORNAR DA FUNCAO VALENDO 10)

    Sem retorno: Apenas faz uma acao, como mostrar algo na tela.

        def saudar(nome):
            print(f"Olá, ${nome}!")
        saudar("Ana)

Existe um erro comum, confundir o print com return.

    def soma_errada(a , b):
        print( a + b)
    
    x = soma_errada(2 , 3)

*O x vai mostrar 5 porém se eu chamar novamente a variave x, ela vai dar como se nao tivesse nada, pois o print so vai imprimir na tela, o valor e nao retornar esse valor*