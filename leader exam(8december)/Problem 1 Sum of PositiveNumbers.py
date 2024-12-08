# Problem 1: Sum of Positive Numbers - 2ქ
# Challenge:
# Create a function that takes a list of numbers and returns the sum of all positive numbers.

# assert problem_1_sum_of_positive([1, -4, 7, 12]) == 20
# assert problem_1_sum_of_positive([-1, -2, -3, -4]) == 0
# assert problem_1_sum_of_positive([]) == 0


def getpositivesumsfloored(nms):
    bowl = 0

    for numbers2 in nms:
        if numbers2 > 0:
            bowl += numbers2
        
    return int(bowl)

numbrs = [2.7, 4.8]
print(getpositivesumsfloored(numbrs))