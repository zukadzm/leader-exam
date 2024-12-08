# Problem 3: Find the Missing Number - 2ქ
# Challenge:
# Create a function to find the missing number in a list of integers from 1 to n.
# Instructions:
# Input: A list of integers from 1 to n with one number missing (e.g., [1, 2, 4, 5]).
# Output: The missing number (e.g., 3 in this case).

# assert find_missing_number([1, 2, 4, 5]) == 3
# assert find_missing_number([3, 5, 6, 1, 2]) == 4
# assert find_missing_number([2]) == []

def findmissingindex(nms, n):
    sumn = n * (n + 1) // 2 # გამოთვალოს 1 იდან n მდე

    actual = sum(nms) # გამოთვალოს ფაქტობრივი რიცხვები სიის

    return sumn - actual

nums = [1, 2, 4, 5] # აქ უნდა იპოვოს 3 
n = 5 #აქ სიის ბოლო სანამდე იპოვოს,  სია 1 იდან 5 ამდე 
print(findmissingindex(nums, n))