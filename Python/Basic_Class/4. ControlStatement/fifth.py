# Guessing a number btw 1 to 10
import random
random_number = random.randint(1,10)
# print(random_number)
number = 0
while random_number != number:
    number = int(input("Guess a number btw 1 to 10: "))
    if number < random_number:
        print("Entered number is lower than the random number")
    elif number > random_number:
        print("Entered number is higher than the random number")
    else: 
        print("You guessed it!")

print('Thanks for playing the game')