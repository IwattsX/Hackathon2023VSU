import json
data_Agents = []
with open("AgentInfo.json", 'r') as AgentF:
    data = json.load(AgentF)
    for k, v in data.items():
        data_Agents.append([k,v])

for i in data_Agents:
    for element in i[1]:
        print(f"{i[0]}, {element[0]}, {element[1]}, {element[2]}")