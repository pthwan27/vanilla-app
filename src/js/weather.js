import API_KEY from "./config";

const weatherSection = document.querySelector("#weather_section");

const tempSpan = document.querySelector("#weather_temp");
const weatherIconImg = document.createElement("img");

function setWeather(info) {
  const iconURL = `https://openweathermap.org/img/wn/${info.icon}@2x.png`;

  weatherIconImg.src = iconURL;
  weatherIconImg.id = "weather_icon";

  weatherSection.appendChild(weatherIconImg);

  tempSpan.innerText = info.temp[0] + "°C";
}

function onGeoSuccess({ coords }) {
  const lat = coords.latitude;
  const lon = coords.latitude;
  const units = "metric";

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${API_KEY.key}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const weatherInfo = {
        name: data.name,
        weather: data.weather,

        icon: data.weather[0].icon,
        temp: data.main.temp.toString().split("."),
      };

      setWeather(weatherInfo);

      // https://openweathermap.org/img/wn/10d@2x.png
    });
}

function onGeoError() {
  alert("Error");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
