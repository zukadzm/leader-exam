#  Write a function to check if two strings are anagrams (contain the same characters in the same frequency).

# assert are_anagrams("listen", "silent") == True
# assert are_anagrams("hello", "world") == False
# assert are_anagrams("triangle", "integral") == True


def checkanaram(word1, word2):
    word1 = word1.replace(" ","").lower() # აქ ორივე სიტყვას გავუკეთეთ replace(გადანაცვლება) და გადავიყვანეთ lower case ათ
    word2 = word2.replace(" ","").lower()
    if len(word1) != len(word2): # თუ word1 ის სიგრძე არ უდრის მეორე word2 -ს
        return False # თუ არ უდრის პირველი მეორეს სიგრძეს მაშინ დააბრუნოს False 
    firststring = {} # ეს შექმნილია იმისთვის რომ დავითვალოთ characters ები (characters  ის თარგმანი არ ვიცი ზუსტად ;დ)
    secondstring = {}
    for line in word1: # დავითვალოთ თითო სტრინგი
        firststring[line] = firststring.get(line, 0)+ 1
    for line in word2:
        secondstring[line] = secondstring.get(line, 0)+ 1 


    return firststring == secondstring

print(checkanaram("listen", "silent"))
print(checkanaram("hello", "world"))
print(checkanaram("triangle", "integral"))