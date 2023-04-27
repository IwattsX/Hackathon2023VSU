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
//   function initMap() {
//     // Create a new map object
//     var map = new google.maps.Map(document.getElementById("map"), {
//     center: { lat: 37.5407, lng: -77.4360 },
//     zoom: 10
//     });
//     }
    
//     // Load the map when the webpage is loaded
//     google.maps.event.addDomListener(window, "load", initMap);
// Initialize and add the map
// let map;

// async function initMap() {
  // The location of Uluru
  // const position = { lat: 37.2279, lng: -77.4019 };
  // Request needed libraries.
  //@ts-ignore
  // const { Map } = await google.maps.importLibrary("maps");
  // const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  // map = new Map(document.getElementById("map"), {
  //   zoom: 12,
  //   center: position,
  //   mapId: "DEMO_MAP_ID",
  // });

  // The marker, positioned at Uluru
//   const marker = new AdvancedMarkerView({
//     map: map,
//     position: position,
//     title: "Uluru",
//   });
// }

// initMap();
// This example adds a search box to a map, using the Google Place Autocomplete
// feature. People can enter geographical searches. The search box will return a
// pick list containing a mix of places and predicted search terms.
// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">
function initAutocomplete() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -33.8688, lng: 151.2195 },
    zoom: 13,
    mapTypeId: "roadmap",
  });
  // Create the search box and link it to the UI element.
  const input = document.getElementById("pac-input");
  const searchBox = new google.maps.places.SearchBox(input);

  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
  // Bias the SearchBox results towards current map's viewport.
  map.addListener("bounds_changed", () => {
    searchBox.setBounds(map.getBounds());
  });

  let markers = [];

  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox.addListener("places_changed", () => {
    const places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }

    // Clear out the old markers.
    markers.forEach((marker) => {
      marker.setMap(null);
    });
    markers = [];

    // For each place, get the icon, name and location.
    const bounds = new google.maps.LatLngBounds();

    places.forEach((place) => {
      if (!place.geometry || !place.geometry.location) {
        console.log("Returned place contains no geometry");
        return;
      }

      const icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25),
      };

      // Create a marker for each place.
      markers.push(
        new google.maps.Marker({
          map,
          icon,
          title: place.name,
          position: place.geometry.location,
        })
      );
      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
  });
}

window.initAutocomplete = initAutocomplete;