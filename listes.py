lettres = [ "a", "b", "c", "d", "e", "f"]
print(lettres)

from random import randint
list_de_code = []

while len(list_de_code)  < 4 :

    index = randint(0,5)
    list_de_code.append(lettres[index])
print(list_de_code)





