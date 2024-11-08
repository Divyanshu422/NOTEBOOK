# 1. For loop in the python behaves as the for-each in java
'''
string = 'Divyanshu'
for char in string: 
    print(char)
'''

# 2. Printing in the same line ->

'''

name = 'Navjot tyagi'
for data in name:
    print(f'{data} ',end=' ') # N  a  v  j  o  t     t  y  a  g  i

'''

# for loop with range function
'''
for i in range(10):
    print(i, end=" ")
'''

#*  for loop with designed range
'''
for i in range(6, 15, 3):
    print(i, end=" ") # 6 9 12

'''
# Displaying the multiplication number: 

n = int(input('Enter the number '))

for i in range(1,11,1):
    print(f'{n} * {i} = {n*i}')