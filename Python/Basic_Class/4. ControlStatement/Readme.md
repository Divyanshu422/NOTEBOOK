# Palindrome of a number in python -> forth.py

- Create/Find the reverse of a number [ third.py -> Program 3]
- compare the reverse with original number -> if equal then Number is Palindrome

# Converting the number to binary: forth.py Program

- To solve this problem we are taking String and concatenating the remainder to the string
- We have taken string becoz in case of the even number the 1st remainder is zero. so if we dont take string it will be neglected from the output.
- When converting a number to binary by repeatedly dividing by 2, we collect each remainder (either 0 or 1). Using a string to store these remainders helps preserve every remainder, including any initial zeros, which might otherwise be ignored if we used another method (like adding to an integer, which doesn’t retain leading zeros).

# Guessing a number [ fifth.py ]

- In the code we have used the random module -> which has multiple functions like:
  - random(): generate random floating number btw 0 to 1.0
  - randint(a, b): generate random interger btw a and b [ both Inclusive ]

### syntax:

- Import the random module
- Syntax: `random.random()` or `random.randint(a,b)`
