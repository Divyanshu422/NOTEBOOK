# Slicing Operator [start, end, step]
    # Start -> inclusive, end -> exclusive

#  * Basic Slicing
my_list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
print(my_list[2:6])  # Output: [2, 3, 4, 5]

# * Omiting start and end
print(my_list[:5])   # Output: [0, 1, 2, 3, 4]
print(my_list[5:])   # Output: [5, 6, 7, 8, 9]

# * Using negative index
print(my_list[-5:])  # Output: [5, 6, 7, 8, 9]
print(my_list[:-5])  # Output: [0, 1, 2, 3, 4]

# * Using Step:
print(my_list[::2])  # Output: [0, 2, 4, 6, 8]
print(my_list[1::2]) # Output: [1, 3, 5, 7, 9]

# * Reversing Step:
print(my_list[::-1]) # Output: [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]

# Using the slice operator to get a subset -> not modifying original list
subset_list = my_list[1:4]
print(subset_list)  # [1, 2, 3]
