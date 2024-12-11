# List operator ->
# 1. index operator used for accessing, modifying and deleting the element

my_list = [1, 2, 3,'Divyanshu']
print(my_list[1]) # Accessing the element -> 2

my_list[0] = 'Cdac' # Modifying -> ['Cdac', 2, 3, 'Divyanshu']
print(my_list)

del my_list[2] # deleting the element
print(my_list)  # ['Cdac', 2, 'Divyanshu']