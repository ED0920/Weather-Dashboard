const key = "149536b779a216b9fd035e0c31488ca4";

function getCityData(city) {
  const currentD = new Date();

  for (let i = 0; i < 6; i++) {
    const date = new Date();
    date.setDate(currentD.getDate() + i);
    document.getElementById("date" + i).innerHTML = date.toLocaleDateString();
  }

  // use string templating here: e.g. `` quotes (not '' or "")
  var requestUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&units=metric`;

  fetch(requestUrl)
    .then((resp) => {
      if (!resp.ok) throw new Error(resp.statusText);
      return resp.json();
    })
    .then((data) => {
      console.log(data);
      for (var i = 0; i < 6; i++) {
        document.getElementById("temp" + [i]).innerHTML =
          "Temp: " + data.list[i].main.temp + " °C";
        document.getElementById("wind" + [i]).innerHTML =
          "Wind: " + data.list[i].wind.speed + " MPH";
        document.getElementById("humidity" + [i]).innerHTML =
          "Humidity: " + data.list[i].main.humidity + " %";
        document.getElementById(
          "icon" + [i]
        ).src = `http://openweathermap.org/img/wn/${data.list[i].weather[0].icon}@2x.png`;
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

// add button listener to search button to call api

var searchBtnEl = document.getElementById("searchBtn");
searchBtnEl.addEventListener("click", function () {
  const buttonEl = document.createElement("button");
  const cityValue = document.getElementById("city").value;
  const currentCityEl = document.getElementById("currentCity");
  currentCityEl.innerHTML = cityValue;
  buttonEl.innerHTML = cityValue;
  buttonEl.className = "cityBtn";
  buttonEl.addEventListener("click", function () {
    getCityData(cityValue);
  });

  var searchListEl = document
    .getElementById("searchList")
    .appendChild(buttonEl);

  getCityData(cityValue);
});
