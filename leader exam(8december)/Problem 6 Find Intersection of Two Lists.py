# Problem 6: Find Intersection of Two Lists - 5ქ
# Challenge:
#  Write a function to find the common elements between two lists.
# Instructions:
# Input: Two lists of integers (e.g., [1, 2, 3] and [2, 3, 4]).
# Output: A list of integers representing the intersection (e.g., [2, 3]).

# assert find_intersection([1, 2, 3], [2, 3, 4]) == [2, 3]
# assert find_intersection([1, 1, 2], [1, 3]) == [1]
# assert find_intersection([], [1, 2]) == []



def findIntersection(ls1, ls2):
    return [thing for thing in ls1 if thing in ls2]

ls1 = [1, 2, 3]
ls2 = [2, 3, 4]
print(findIntersection(ls1, ls2))