# 
# 9) Prime time (4 ქულა)

# Write a function that takes a maximum bound and returns all primes up to and including the maximum bound.

# For example:
# 11 => [2, 3, 5, 7, 11]


def prime(prime2):
    if prime2 <= 1:
        return False
    for number1 in range(2,int(prime2**0.5) + 1):
        if prime2 % number1 ==0:
            return False
    return True

def prime_max(max_prime):
    primess = []
    for number2 in range(2, max_prime + 1):
        if prime(number2):
            primess.append(number2)
        return primess
    
prime_max = 87
print(prime_max(prime))