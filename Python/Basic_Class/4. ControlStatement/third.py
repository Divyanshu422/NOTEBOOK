# Counting the number of digit in a number

''' 
number = int(input('Enter the number '))
number_of_digit = 0

while number > 0:
    number = number // 10   # Floor division 
    number_of_digit += 1
print(f'number of digit are {number_of_digit}')
'''

# ----------------------------------------------------------------

# Calculating the sum of digits in a number
'''
number = int(input('Enter the number '))
sum = 0
while number > 0:
    sum = sum + (number % 10)
    number = number // 10
print(f'Sum of digits are {sum}')
'''

# ----------------------------------------------------------------
# Reversing

'''
number = int(input('Enter the number '))
reversed_number = 0

while number > 0:
    reversed_number = reversed_number * 10 + (number % 10)
    number = number // 10 # Floor division

print(f'Reversed number is {reversed_number}')
'''

# ----------------------------------------------------------------