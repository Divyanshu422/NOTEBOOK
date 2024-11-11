# checking the type of string object
'''
string_obj = 'Divyanshu'
print(type(string_obj)) #* <class 'str'>
'''


# accessing the string using indexing-> positive and negative
'''
print(string_obj[2])    # v
print(string_obj[-7])   # v
'''



# input function output -> string type
'''
name = input("Enter your name: ")   # Divyanshu
print(type(name)) #* <class 'str'>
print(f'The length of string is {len(name)}')   # 9
'''


# python for loop on string
'''
name = 'Divyanshu'
for char in name:
    print(char, end="") #* D i v y a n s h u
'''

# Using double quotes in string -> as single quotes is occupied:
'''
name = "John's"
'''


# Triple quotes string
multi_line_string = '''This is a string
that spans multiple
lines.'''

print(multi_line_string)
