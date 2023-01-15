
const currentD = new Date();
const key = "149536b779a216b9fd035e0c31488ca4";
var city = 'Sydney';
var country ='Australia';

for (let i = 0; i < 6; i++) {
    const date = new Date();
    date.setDate(currentD.getDate() + i)
    document.getElementById("date"+i).innerHTML = date.toLocaleDateString();
}

// const countryData = data.ref_country_codes.find((element) => country === element.country)

// var lat = countryData.latitude;
// var long = countryData.longitude;

// use string templating here: e.g. `` quotes (not '' or "")
var requestUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}`;
// add button listener to search button to call api


fetch(requestUrl)
  .then(resp =>{
    // if(!resp.ok) throw new Error(resp.statusText);
    return resp.json();
  })
  .then(data=>{
  console.log(data);
  for(var i = 0; i < 6; i++){
    document.getElementById("temp" + [i]).innerHTML = "Temp: " + data.list[i].main.temp + " °C"
    document.getElementById("wind" + [i]).innerHTML = "Wind: " + data.list[i].wind.speed + " MPH"
    document.getElementById("humidity" + [i] ).innerHTML = "Humidity: " + data.list[i].main.humidity + " %"
  }
  

  })
  .catch(err => {
    console.log(err);
  });
