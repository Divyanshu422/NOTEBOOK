# Check if a number is a palindrome in Python
'''
# Input a number from the user
original_number = int(input('Enter a number: '))

# Make a copy of the number to manipulate
temp_number = original_number

# Initialize reverse_number to build the reverse of the original number
reverse_number = 0

# Loop to reverse the number
while temp_number > 0:
    # Extract the last digit of temp_number and add it to reverse_number
    reverse_number = reverse_number * 10 + temp_number % 10
    # Remove the last digit from temp_number using integer division
    temp_number = temp_number // 10

# Check if the original number and its reverse are the same
if original_number == reverse_number:
    print(f'{original_number} is a palindrome.')
else: 
    print(f'{original_number} is not a palindrome.')
'''
     
# --------------------------------------------------------------------

# Converting the number to binary representation
number = int(input("Enter a number to convert to binary: "))
binary_representation = ''

while number > 0 :
    binary_representation = str(number % 2) + binary_representation
    number = number // 2


print(f'Binary representation of {number} is {binary_representation}')