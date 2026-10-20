"""
Exercício: Leia dois números e diga qual é o maior.
"""

x = int(input("Me diga um número: "))
y = int(input("Me diga outro número: "))

if x > y:
    print(f"O número {x} é maior que o número {y}")
elif y > x:
    print(f"O número {y} é maior que o número {x}")
else:
    print("Os números são iguais")
