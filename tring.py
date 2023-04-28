import requests

url = "https://zillow-com1.p.rapidapi.com/property"

querystring = {"zpid":"2080998890"}

headers = {
	"content-type": "application/octet-stream",
	"X-RapidAPI-Key": "bc7e8d0c64msh7781d871912a33dp10e21fjsn42443bebdb9e",
	"X-RapidAPI-Host": "zillow-com1.p.rapidapi.com"
}

response = requests.get(url, headers=headers, params=querystring)

print(response.json())