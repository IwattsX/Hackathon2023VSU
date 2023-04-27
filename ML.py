import json

petersburg_Houses = []

with open("ZillowRes.json", 'r') as DataFile:
    data = json.load(DataFile)
    li = data['results']
    count = 0
    for element in li:
        #NOT Petersburg,VA otherwise use the loop
        if element["state"] != 'VA' or element['zipcode'] != "23803" or element['city'] != 'Petersburg': 
           continue
        count +=1
        for key, value in element.items():
            petersburg_Houses.append([count, key, value])


for i in petersburg_Houses:
    print(i)

