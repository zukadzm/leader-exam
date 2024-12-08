# Problem 4: Longest Substring Without Repeating Characters - 5ქ
# Challenge:
#  Create a function that finds the length of the longest substring without repeating characters.

# Instructions:
# Input: A string (e.g., "abcabcbb").
# Output: An integer representing the length of the longest substring (e.g., 3 for "abc").

# assert longest_unique_substring("abcabcbb") == 3
# assert longest_unique_substring("bbbbb") == 1
# assert longest_unique_substring("") == 0
# assert longest_unique_substring("pwwkew") == 3

def findlongestuniqueSubstring(x):
    len_max = 0 # შევქმენით ცარიელი ცვლადი, მნიშვნელობა 0 იმიტომ რომ ამაში დაემატება სხვა რიცხვები

    for i in range(len(x)):
        for a in range(i + 1, len(x) + 1):
            sbstrng = x[i:a]

        if len(set(sbstrng)) == len(sbstrng): # თუ დასეტილი(set) სიგრძე sbstrng ის უდრის ანუ არის სიგრძე sbstrng მეორე სი
            len_max = max(len_max, len(sbstrng))

    return len_max

x = "abcabcbb" # test case იდან ამოვიღე ეს
print(findlongestuniqueSubstring(x))

