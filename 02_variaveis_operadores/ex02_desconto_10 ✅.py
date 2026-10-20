"""
Exercício: Escreva em pseudocódigo um algoritmo que leia o preço de um produto e aplique 10% de desconto.
"""
# Escreva sua solução abaixo:

preco_produto = float(input("Qual o preco do produto: "))
desconto = int(input("Qual o desconto: "))
desconto = preco_produto * (desconto / 100)
preco_final = preco_produto - desconto
print(f"O produto ficou com um preco final: R$ {preco_final}0")