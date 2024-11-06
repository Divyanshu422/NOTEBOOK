
a = 20
print(format(a,'b'))    # 10100
print(format(a,'o'))    # 24
print(format(a,'x'))    # 14
print(oct(32))          # 0o40
print(bin(11))          # 0b1011
print(a.bit_length())   # 5 -> represent number of bit in the number 


# Performing the bit wise operation:
# Here single & -> represent the bit wise operation 
# and -> represent the and operator in the python
print(10 & 13)  # 8   (1010 & 1101)
print(10 | 13)  # 15  (1010 & 1101)
