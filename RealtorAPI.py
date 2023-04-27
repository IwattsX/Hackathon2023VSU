#Realtor API
import requests
import json

class RealtorAPI:
    def __init__(self, url, querystring, headers):
        self.get_data(url, querystring, headers)

    def get_data(self, url, querystring, headers):
        response = requests.post(url, json=querystring, headers=headers)
        if response.status_code == 200:
            print("sucessfully fetched the data")
            self.writeToJson(response.json())
        else:
            print(f"Hello person, there's a {response.status_code} error with your request")

    def formatted_print(self, obj):
        text = json.dumps(obj, sort_keys=True, indent=4)
        print(text)
        self.writeToJson(text)
    
    def writeToJson(self, text):
        with open("Realtor.json", 'w') as Z:
            Z.write(text)

url = "https://realtor-com-scraper.p.rapidapi.com/agents/search"

payload = {
	"city_name": "petersburg",
	"agent_name": None,
	"postal_code": "23803",
	"state_slug": "va",
	"offset": 0
}
headers = {
	"content-type": "application/json",
	"X-RapidAPI-Key": "6411aa307bmsh62eea7b677aac98p10de15jsn1dfc01090cd9",
	"X-RapidAPI-Host": "realtor-com-scraper.p.rapidapi.com"
}
RealtorAPI_Call = RealtorAPI(url, payload, headers)


# response = requests.post(url, json=payload, headers=headers)

# print(response.json())