function authenticateUser(event) {
	event.preventDefault();
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
    event.preventDefault();
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
}

  
  function resetLoan() {
    document.getElementById("loan-amount").value = "";
    document.getElementById("interest-rate").value = "";
    document.getElementById("loan-term").value = "";
    document.getElementById("monthly-payment").value = "";
    document.getElementById("total-payment").value = "";
    document.getElementById("total-interest").value = "";
  
    const loanSummaryEl = document.getElementById("loan-summary");
    loanSummaryEl.style.display = "none";
  }
  function initMap() {
    // Create a new map object
    var map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 37.5407, lng: -77.4360 },
    zoom: 10
    });
    }
    
    // Load the map when the webpage is loaded
    google.maps.event.addDomListener(window, "load", initMap);