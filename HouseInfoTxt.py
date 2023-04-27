#this will make a .txt file for each house, img, and address
import json

data_Houses = []
with open("HouseInformation.json", 'r') as HouseFile:
    data = json.load(HouseFile)
    for k, v in data.items():
        data_Houses.append([k,v])

for i in data_Houses:
    print(f"{i[0]}, {i[1][0]}, {i[1][1]}")
