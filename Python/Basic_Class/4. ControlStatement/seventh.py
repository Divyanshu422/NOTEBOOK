count = 0

while count < 5:
    print("Count is:", count)
    if count == 3:
        print("Breaking the loop")
        break
    count += 1
else:
    print("This will not print because the loop was broken")

