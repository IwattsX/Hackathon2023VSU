function authenticateUser() {
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	if (username === "Team3" && password === "Riches") {
		window.location.href = "LoggedinPage.html"; // Redirect to the LoggedinPage 
	} else {
		document.getElementById("error-message").innerHTML = "Invalid username or password";
	}
}
function logout() {
	window.location.href = "login.html"; // Redirect to the login page
}

function calculateLoan() {
    event.preventDefault(); // added this line to prevent page refresh

    const loanAmount = document.getElementById('loan-amount').value;
    const interestRate = document.getElementById('interest-rate').value / 100 / 12;
    const loanTerm = document.getElementById('loan-term').value * 12;

    const monthlyPayment = (loanAmount * interestRate * Math.pow(1 + interestRate, loanTerm)) / (Math.pow(1 + interestRate, loanTerm) - 1);
    const totalPayment = monthlyPayment * loanTerm;
    const totalInterest = totalPayment - loanAmount;

    document.getElementById('monthly-payment').value = monthlyPayment.toFixed(2);
    return false

}

  
  function resetLoan() {
    event.preventDefault();
    document.getElementById("loan-amount").value = "";
    document.getElementById("interest-rate").value = "";
    document.getElementById("loan-term").value = "";
    document.getElementById("monthly-payment").value = "";
  
    return false;
  }
 
  fetch('AgentRes.txt')
	.then(response => response.text())
	.then(data => {
		const rows = data.split('\n').filter(row => row.trim() !== '');
		const tbody = document.querySelector('#agent-table tbody');

		rows.forEach(row => {
			const [location, rating, email, Name ] = row.split(',').map(value => value.trim());
			const tr = document.createElement('tr');
			tr.innerHTML = `
				<td>${location}</td>
				<td class="rating rating-${rating}">${rating}</td>
				<td>${email}</td>
				<td>${Name} </td>
			`;
			tbody.appendChild(tr);
		});
	})
	.catch(error => console.error(error));


  function HousePrices() {
    window.location.href = "HousePrices.html";
  }

  // Reading the data from the HouseInfo.txt file
fetch('HouseInfo.txt')
.then(response => response.text())
.then(data => {
  // Split the data into an array of lines
  const lines = data.split('\n');
  // Remove any empty lines
  const filteredLines = lines.filter(line => line.trim() !== '');
  // Extract the address, price, and image URL from each line
  const dataPoints = filteredLines.map(line => {
    const [address, prices,] = line.split(',');
    return {
      label: address,
      data: prices,
    };
  });
  // Sorting the dataPoints by price in acending order
  dataPoints.sort((a, b) => a.data - b.data);
  // Creating  an array of labels and an array of data
  const labels = dataPoints.map(dataPoint => dataPoint.label);
  const prices = dataPoints.map(dataPoint => dataPoint.data);
  // Creating a bar chart using Chart.js
  const ctx = document.getElementById('HouseChart').getContext('2d');
  const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'House Prices',
        data: prices,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      },
    }
  });
});

// Loading data from HouseInfo.txt
fetch('HouseInfo.txt')
	.then(response => response.text())
	.then(data => {
		// Spliting data into lines and parse each line into an object
		const lines = data.trim().split('\n');
		const houses = lines.map(line => {
			const [address, price, image, bedrooms, bathrooms, sqft, ] = line.split(',');
			return {
				address: address,
				price: parseFloat(price),
				bedrooms: parseInt(bedrooms),
				bathrooms: parseInt(bathrooms),
				sqft: parseInt(sqft),
				image
			};
		});
		// Sorting houses by price in descending order
		houses.sort((a, b) => b.price - a.price);
		// Render houses
		const propertyList = document.getElementById('property-list');
		const renderHouses = (houses) => {
			propertyList.innerHTML = '';
			houses.forEach(house => {
				const property = document.createElement('div');
				property.className = 'property';
				const image = document.createElement('img');
				image.src = house.image;
				image.alt = 'Property Image';
				const propertyDetails = document.createElement('div');
				propertyDetails.className = 'property-details';
				const address = document.createElement('h3');
				address.textContent = house.address;
				const price = document.createElement('p');
				price.textContent = '$' + house.price.toLocaleString() + ` | ${house.bedrooms} bd | ${house.bathrooms} ba | ${house.sqft.toLocaleString()} sqft`;
				propertyDetails.appendChild(address);
				propertyDetails.appendChild(price);
				property.appendChild(image);
				property.appendChild(propertyDetails);
				propertyList.appendChild(property);
				// Add click event listener to navigate to property address
				property.addEventListener('click', () => {
					window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(house.address)}`);
				});
			});
		};
		renderHouses(houses);
		// Adding click event listener to search button
		const searchInput = document.getElementById('search-input');
		const searchButton = document.getElementById('search-button');
		searchButton.addEventListener('click', () => {
			const searchText = searchInput.value.trim().toLowerCase();
			if (searchText) {
				const filteredHouses = houses.filter(house => house.address.toLowerCase().includes(searchText));
				renderHouses(filteredHouses);
			} else {
				renderHouses(houses);
			}
		});
	});

  const searchbutton = document.getElementById('zillow-search-button');
  searchbutton.addEventListener('click', () => {
    const addressInput = document.getElementById('zillow-search-addresst');
    const query = addressInput.value.trim().replace(/\s+/g, '+');
    const url = `https://www.zillow.com/homes/${query}_rb/`;
    window.location.href = url;
  });
  



  
  
  

  
