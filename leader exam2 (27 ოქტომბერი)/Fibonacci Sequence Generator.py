# 7) Fibonacci Sequence Generator (4 ქულა)

# Create a program that receives an integer n and returns the first n numbers in the Fibonacci sequence. The sequence starts with 0 and 1, and each subsequent number is the sum of the previous two.
# Examples:
# 5 --> [0, 1, 1, 2, 3]
# 7 --> [0, 1, 1, 2, 3, 5, 8]

n = [0, 1, 1, 2, 3]

def fiboc(n):
    if n <= 0:
        return []
    elif n == [1]:
        return [0]
    elif n == [2]:
        return [0,1]

fib_sequence1 = [0,1]

for i in range(2,n):
    num = fib_sequence1[i - 1] + fib_sequence1[i - 2]
    fib_sequence1.append(num)