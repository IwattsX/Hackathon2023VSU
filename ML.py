import json

petersburg_Houses = []
agentsList = []

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



