# Lecture 4: Student Challenge -> Udemy
# If we want that the difference shall be always positive then either we can use if-else statements [ checking a-b > 0 then print(a-b) or else print (b-a) ]. the other method is using the `abs` function.
# abs() function, which returns the absolute (positive) value of a number

'''
a = int(input('Enter the First number '))
b = int(input('Enter the Second number '))

print(f'The difference between two number is {abs(a-b)}')
'''

# ----------------------------------------------------------------

# Check number is odd or even:
'''
num = int(input('Enter a number '))

if num % 2 == 0:
    print('The number is even')
else:
    print('The number is odd')
'''

# ----------------------------------------------------------------

# Check the age Eligibility to cast a vote
'''
age = int(input('Enter the ae of the candidate '))

if age > 18:
    print('Eligible to cast a vote')
else: 
    print('Not eligible to cast a vote')
'''