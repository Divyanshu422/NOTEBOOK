# 
number = int(input('Enter the number '))
number_of_digit = 0

while number > 0:
    number = number // 10
    number_of_digit += 1
print(f'number of digit are {number_of_digit}')