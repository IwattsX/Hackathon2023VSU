function authenticateUser(event) {
	event.preventDefault();
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	if (username === "Team3" && password === "Riches") {
		window.location.href = "LoggedinPage.html"; // Redirect to the dashboard page
	} else {
		document.getElementById("error-message").innerHTML = "Invalid username or password";
	}
}
function logout() {
	window.location.href = "login.html"; // Redirect to the login page
}
