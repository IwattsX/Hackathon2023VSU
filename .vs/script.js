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
    event.preventDefault(); // add this line to prevent page refresh

    const loanAmount = document.getElementById('loan-amount').value;
    const interestRate = document.getElementById('interest-rate').value / 100 / 12;
    const loanTerm = document.getElementById('loan-term').value * 12;

    const monthlyPayment = (loanAmount * interestRate * Math.pow(1 + interestRate, loanTerm)) / (Math.pow(1 + interestRate, loanTerm) - 1);
    const totalPayment = monthlyPayment * loanTerm;
    const totalInterest = totalPayment - loanAmount;

    document.getElementById('monthly-payment').value = monthlyPayment.toFixed(2);
    document.getElementById('monthly-payment-summary').textContent = monthlyPayment.toFixed(2);
    document.getElementById('total-payment').textContent = totalPayment.toFixed(2);
    document.getElementById('total-interest').textContent = totalInterest.toFixed(2);
    return false

}

  
  function resetLoan() {
    event.preventDefault();
    document.getElementById("loan-amount").value = "";
    document.getElementById("interest-rate").value = "";
    document.getElementById("loan-term").value = "";
    document.getElementById("monthly-payment").value = "";
    document.getElementById("total-payment").value = "";
    document.getElementById("total-interest").value = "";
  
    const loanSummaryEl = document.getElementById("loan-summary");
    loanSummaryEl.style.display = "none";
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

  // Read the data from the HouseInfo.txt file
fetch('HouseInfo.txt')
.then(response => response.text())
.then(data => {
  // Split the data into an array of lines
  const lines = data.split('\n');
  // Remove any empty lines
  const filteredLines = lines.filter(line => line.trim() !== '');
  // Extract the address, price, and image URL from each line
  const dataPoints = filteredLines.map(line => {
    const [address, price, imageURL] = line.split(',');
    return {
      label: address,
      data: price,
      imageUrl: imageURL
    };
  });
  // Sort the dataPoints by price in acending order
  dataPoints.sort((a, b) => a.data - b.data);
  // Create an array of labels and an array of data
  const labels = dataPoints.map(dataPoint => dataPoint.label);
  const prices = dataPoints.map(dataPoint => dataPoint.data);
  // Create a bar chart using Chart.js
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
      tooltips: {
        callbacks: {
          label: function(tooltipItem, data) {
            const dataPoint = dataPoints[tooltipItem.index];
            return `${dataPoint.label}: $${dataPoint.data}`;
          },
          afterLabel: function(tooltipItem, data) {
            const dataPoint = dataPoints[tooltipItem.index];
            return `<img src="${dataPoint.imageUrl}" width="200" height="150" />`;
          }
        }
      }
    }
  });
});


  
  
  

  
