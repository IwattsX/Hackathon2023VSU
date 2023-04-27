import json
#implementation of quicksort
# Function to find the partition position
def partition(array, low, high):

	# choose the rightmost element as pivot
	pivot = array[high]

	# pointer for greater element
	i = low - 1

	# traverse through all elements
	# compare each element with pivot
	for j in range(low, high):
		if array[j] <= pivot:

			# If element smaller than pivot is found
			# swap it with the greater element pointed by i
			i = i + 1

			# Swapping element at i with element at j
			(array[i], array[j]) = (array[j], array[i])

	# Swap the pivot element with the greater element specified by i
	(array[i + 1], array[high]) = (array[high], array[i + 1])

	# Return the position from where partition is done
	return i + 1

# function to perform quicksort


def quickSort(array, low, high):
	if low < high:

		# Find pivot element such that
		# element smaller than pivot are on the left
		# element greater than pivot are on the right
		pi = partition(array, low, high)

		# Recursive call on the left of pivot
		quickSort(array, low, pi - 1)

		# Recursive call on the right of pivot
		quickSort(array, pi + 1, high)

petersburg_Houses = []
agentsList = []

prices = []
pricesCountDict = {}

with open("ZillowRes.json", 'r') as DataFile:
    data = json.load(DataFile)
    li = data['results']
    count = 0
    for element in li:
        #NOT Petersburg,VA otherwise use the loop (Zipcode too)
        if element["state"] != 'VA' or element['zipcode'] != "23803" or element['city'] != 'Petersburg': 
           continue
        count +=1
        for key, value in element.items():
            petersburg_Houses.append([count, key, value])
            if key == 'price' :
                if value == 0:
                     continue
                prices.append(value)
                pricesCountDict[value] = count


# dict(sorted(pricesCountDict.items()))
quickSort(prices, 0, len(prices) - 1)
print(prices)
for i in range(len(prices)):
     print(f"{prices[i]} : {pricesCountDict[prices[i]]}")



# print(petersburg_Houses)
# print(len(petersburg_Houses))
with open("Realtor.json", 'r') as AgentFile:
    agents = json.load(AgentFile)
    li = agents['agents']
    for element in li:
        for key, value in element.items():
            agentsList.append([key, value])

li = []
listA = [] #[City, rating, email, FullName]
flag = True
for i in agentsList:
    if i[0] == 'address':
        li.append(i[1]['city'])
    if i[0] == 'agent_rating':
        li.append(i[1])
    if i[0] == 'is_realtor' and i[1]:
        flag = True
    elif i[0]== 'is_realtor' and not i[1]:
        flag = False
    if i[0] == 'full_name' and flag:
        li.append(i[1])
    if i[0] == 'email' and flag:
        li.append(i[1])
    # if i[0] == 'address': #NONE OF THEM ARE PETERSBURG
    #    for k,v in i[1].items():
    #        print(f"{k} : {v}")

i = 0
while i < len(li) - 3:
    listA.append([li[i],li[i+1],li[i+2], li[i+3]])
    i += 4

print(len(listA))
print(listA)



