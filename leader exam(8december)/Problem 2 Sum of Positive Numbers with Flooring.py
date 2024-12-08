# Problem 2: Sum of Positive Numbers with Flooring - 2ქ
# Challenge:
#  Create a function that takes a list of numbers, including fractions, and returns the sum of all positive numbers, floored to the nearest integer.

# assert problem_2_sum_of_positive([1, -4, 7, 12]) == 20
# assert problem_2_sum_of_positive([-1.5, 2.7, -3.3, 4.8]) == 6  # floor(2.7) + floor(4.8) = 6
# assert problem_2_sum_of_positive([]) == 0
# assert problem_2_sum_of_positive([-1, -2, -3]) == 0

def getpositivesumsfloored(nms):
    bowl = 0

    for numbers2 in nms:
        if numbers2 > 0:
            bowl += numbers2
        
    return int(bowl)

numbrs = [-1.5, 2.7, -3.3, 4.8]
print(getpositivesumsfloored(numbrs))