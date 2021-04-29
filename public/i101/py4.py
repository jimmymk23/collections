import random
sent = "Hey, if you're *verb to the *noun later, let me know and I'll come with you."
sent = sent.split()
verb = "going driving walking swimming flying crawling biking ubering"
verb = verb.split()
noun = "park store beach club bar market school office"
noun = noun.split()

indexCount = 0
for word in sent:
    if word == "*verb":
        verbChoice = random.choice(verb)
        sent[indexCount] = verbChoice
    if word == "*noun":
        nounChoice = random.choice(noun)
        sent[indexCount] = nounChoice
    indexCount += 1

st = ""
for word in sent:
    st += word + " "
print(st)









































##sentence = "Hello, you are looking good today."
##sentence = sentence.split()
##for word in sentence:
##    print(word)

##user = input("Type a sentence here: ")
##user = user.split()
##
##for word in user:
##    print(word)







##import random
##
##sentence = "You are looking *adj today."
##sentence = sentence.split()
##adjectives = "great handsome pretty beautiful"
##adjectives = adjectives.split()
##
##indexCount = 0
##for word in sentence:
##    if word == "*adj":
##        wordChoice = random.choice(adjectives)
##        sentence[indexCount] = wordChoice
##        print(wordChoice)
##        print(sentence)
##    indexCount = indexCount + 1
##
##st = ""
##for word in sentence:
##    st += word + " "
##print(st)

