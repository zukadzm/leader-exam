# 6)Convert Pascal Case string into snake_case (4 ქულა)

# You will receive a string which will contain words in PascalCase, your job is to convert them into snake_case.

# Examples:
# "TestController"  -->  "test_controller"
# "MoviesAndBooks"  -->  "movies_and_books"
# "App7 Test"        -->  "app7_test"
# 1                 -->  "1"


rndm_string = input("Enter your string: ")

def strtosnake(rndm_string):
    return "".join(['_' + a.lower() if a.isupper() else a for a in rndm_string])[1:]

strtosnake()