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
  function map() {
    window.location.href = "map.html";
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
  
  

  
