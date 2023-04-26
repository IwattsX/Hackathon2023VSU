import requests
import json
from API import ZillowAPI


url = "https://zillow56.p.rapidapi.com/search"

querystring = {"location":"petersburg, va"}

headers = {
	"content-type": "application/octet-stream",
	"X-RapidAPI-Key": "6411aa307bmsh62eea7b677aac98p10de15jsn1dfc01090cd9",
	"X-RapidAPI-Host": "zillow56.p.rapidapi.com"
}
zillowAPICall = ZillowAPI(url, querystring, headers)