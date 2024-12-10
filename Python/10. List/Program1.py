# Code 1: Defining the list and accessing the element of list

my_list = [1, 2, 3, 'apple', True]
print(my_list[1])   # 2
print(my_list[-2])  # apple

# Code 2: ways to create the list in python using constructor method: -> passing tuple and list 

list1 = list((1, 2, 3, 'a', 'b', 'c')) # Passing the tuple
list1[2] = 'Divyanshu'
print(list1)    # [1, 2, 'Divyanshu', 'a', 'b', 'c']
list2 = list([1, 2, 3, 'a', 'b', 'c']) # Passing the list


# Code 3: passing the string to the list() function/constructor
list3 = list('Hello world')
print(list3) # ['H', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']


my_list[0] = 'Divyanshu'