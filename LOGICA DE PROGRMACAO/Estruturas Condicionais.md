Como podemos deixar o programa escolher o caminho , sem precisar que digamos qual caminho ele deve percorrer ?. Ai que entra as ESTRUTURAS DE DECISAO (ou Condicionais), a partir dela o programa escolher caminhos a serem tomados;

ESTRUTURA DE DECISAO:
    ESTRUTURA CONDICIONAL IF/ELSE/ELSE IF
        if: "Se algo acontecer ou for verdadeira, execute a proxima linha de codigo";
        else: "Senao, execute está linha"

        exemplo (em portugol):

            se nota >= 7 entao
                escreva("APROVADO")
            senao se nota >= 5 entao
                escreva("RECUPERACAO")
            senao:
                escreva("REPROVADO")
            fimse

        Basicamente estamos dizendo ao computador, caso o aluno tinha tirado uma nota maior ou igual a 7, quero ele mostre na tela que o aluno passou. Caso a nota dele seja maior ou igual a 5, ele tem que imprimir RECUPERACAO. porém se nao for nem um e nem a outra, quero q ele mostre que ele foi reprovado.

        OBS: Podemos aninhar um if dentro de outro if, ficando assim:
                    if:
                    else:
                        if:
                            else:
    
    ESTRUTURA CONDICIONAL SWITCH CASE:
        Usamos basicamente quando vemos que teremos muitos IF e ELSE IF, aninhadas. Para nao ficarmos com um codigo gigante e sujo, usando o escolhe caso, ou, SWITCH CASE.
            Ele compara o valor da variavel em varios casos, entre esses casos tem o BREAK, para parar a apos encontrar o caso correspondente.

            EXEMPLO:
                escolha (opcao) {
                    caso 1:
                        escreva("opcao 1 selecionada)
                        pare 
                    caso 2:
                        escreva("opcao 2 selecionada)
                        pare 
                    caso contrario:
                        escreva("opcao invalida")
                }

                Estamos dizendo basicamente, temos um valor que vamos guardar detro da opcao, se a opcao for igual ao caso 1, vc vai seguir por ele e parar, senao vai seguir para o caso 2,e vai parar, e caso nao seja nenhum dos casos, voce vai falar que a opcao foi invalida.