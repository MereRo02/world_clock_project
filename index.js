function updateCity(event) {
  let cityTimeZone = event.target.value;

  if (cityTimeZone.length > 0) {
    let cityNameParts = cityTimeZone.replace("_", " ").split("/");
    let cityName = cityNameParts[1];

    let cityTime = moment().tz(cityTimeZone);
    let timezonesElement = document.querySelector("#timezones");

    timezonesElement.innerHTML = `
      <div class="city">
        <div>
          <h2>${cityName}</h2>
          <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">
          ${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small>
        </div>
      </div>
    `;
  }
}

setInterval(() => {
  let select = document.querySelector("#cities");
  let selectedZone = select.value;

  if (selectedZone) {
    
    updateCity({ target: { value: selectedZone } });
  }
}, 1000);

let selectElement = document.querySelector("#cities");
selectElement.addEventListener("change", updateCity);
