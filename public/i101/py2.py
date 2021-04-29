name = "James Keseling"
if len(name)-1 > 20:
    print("My name is greater than 20 letters!")
else:
    print("My name is less than or equal to 20 letters :(")
    
print("My name is exactly " + str(len(name) - 1) + " letters long.")

##I subtracted one from len(name) to account for the space which would be counted as a character.
