while True:
    a = input("Please enter a number between 1 and 5: ")
    try:
        if int(a) < 1 or int(a) > 5:
            print("Make sure your number is between 1 and 5.")
        else:
            print("Ok")
            break
    except:
        print("This is not a number. Please try again.")

while True:
    b = input("Please enter a number between 6 and 10: ")
    try:
        if int(b) < 6 or int(b) > 10:
            print("Make sure your number is between 6 and 10.")
        else:
            break
    except:
        print("This is not a number. Please try again.")

added = str(int(a) + int(b))

print("The sum of your two numbers is " + added + ".")


import random
list1 = list(range(1,int(added) + 1))
print("Here is a list of numbers from 1 through " + str(added) + " that you will have to choose from: " + str(list1))
number = random.choice(list1)
guess = 0
while number != guess:
    guess = input("Out of the list above, guess which number has been randomly chosen: ")
    try:
        if int(guess) <= int(added):
            if int(guess) > number:
                print("Too high! Try again.")
            elif int(guess) < number:
                print("Too low! Try again.")
            else:
                print("Correct!")
                break
        else:
            print("Your guess is not in the list. Please try again!")
    except:
        print("Your guess was not a number.")



colorlist = ["Red", "Green", "Blue"]
print("Here is a list of colors:")
print(colorlist)
color = random.choice(colorlist)
guess = 0
while color != guess:
    guess = input("Try to guess which color has been randomly chosen: ")
    try:
        if guess == color:
            print("Correct!")
            print("Now here is that color repeated as many times as the number you also guessed correctly earlier!")
            color = color + " "
            print(color * int(number))
            break
        else:
            print("Your guess was incorrect. Here's a list of the remaining colors:")
            colorlist.remove(guess)
            print(colorlist)
    except:
        print("")
