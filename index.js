function updateCities(event) {
  let cityTimeZone = event.target.value;

  if (cityTimeZone.length > 0) {
    let cityNameParts = cityTimeZone.replace("_", " ").split("/");
    let cityName = cityNameParts[1]; 

    let cityTime = moment().tz(cityTimeZone);

    let citiesElement = document.querySelector("#timezones");
    citiesElement.innerHTML = `
      <div class="city">
        <div>
          <h2>${cityName}</h2>
          <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small></div>
      </div>
    `;
  }
}

setInterval(function () {
  let selectElement = document.querySelector("#cities");
  let selectedCity = selectElement.value;

  if (selectedCity) {
    
    updateCities({ target: { value: selectedCity } });
  }
}, 1000);


let citiesSelectElement = document.querySelector("#cities");
citiesSelectElement.addEventListener("change", updateCities);