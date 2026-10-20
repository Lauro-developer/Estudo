"""
Exercício: Peça o nome e a idade e mostre uma frase como “Ana tem 25 anos e nasceu por volta de 2001”. Use f-string e calcule o ano a partir do ano atual.
"""

# Escreva sua solução abaixo:

nome = input("Me diga seu nome: ")
idade = int(input("Me diga qual sua idade: "))
ano_atual= int(input("Em que ano estamos: "))
ano_de_nascimento = ano_atual - idade 
print(f"{nome} tem {idade} e nasceu por volta de {ano_de_nascimento}")
