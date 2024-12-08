# Problem 8: Longest Consecutive Sequence - 8ქ

#  Given an unsorted array of integers, find the length of the longest consecutive elements sequence.

# assert longest_consecutive([100, 4, 200, 1, 3, 2]) == 4  # [1, 2, 3, 4]
# assert longest_consecutive([0, 0]) == 1
# assert longest_consecutive([9, 1, 4, 7, 3, 2, 8, 5, 6]) == 9

def findconsecutive(numberss):
    if not numberss:
        return 0
    
    nmset = set(numberss)
    len_max = 0

    for nm in nmset:
        if nm - 1 not in nmset:
            rnnum = nm
            rnlen = 1

            while rnnum + 1 in nmset:
                rnnum += 1
                rnlen += 1

        len_max = max(len_max, rnlen)
        return len_max

numtogetconsecutive = [100, 4, 200, 1, 3, 2]
print(findconsecutive(numtogetconsecutive))

