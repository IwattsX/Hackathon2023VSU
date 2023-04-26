import requests
import json
class ZillowAPI:
    def __init__(self, url, querystring, headers):
        self.get_data(url, querystring, headers)

    def get_data(self, url, querystring, headers):
        response = requests.get(url, headers=headers, params=querystring)
        if response.status_code == 200:
            print("sucessfully fetched the data")
            self.formatted_print(response.json())
        else:
            print(f"Hello person, there's a {response.status_code} error with your request")

    def formatted_print(self, obj):
        text = json.dumps(obj, sort_keys=True, indent=4)
        print(text)
url = "https://zillow56.p.rapidapi.com/search"

querystring = {"location":"petersburg, va"}

headers = {
	"content-type": "application/octet-stream",
	"X-RapidAPI-Key": "6411aa307bmsh62eea7b677aac98p10de15jsn1dfc01090cd9",
	"X-RapidAPI-Host": "zillow56.p.rapidapi.com"
}
zillowAPICall = ZillowAPI(url, querystring, headers)

