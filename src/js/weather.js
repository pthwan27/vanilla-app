import { API_KEY } from "../config.js";

const weatherDiv = document.querySelector("#weather_div");
const weatherIconImg = document.createElement("img");

function setWeather(info) {
  const iconURL = `https://openweathermap.org/img/wn/${info.icon}@2x.png`;

  weatherDiv.firstElementChild.innerText = info.name;

  weatherIconImg.src = iconURL;
  weatherIconImg.id = "weather_icon_img";
  weatherDiv.lastElementChild.appendChild(weatherIconImg);
}

function onGeoSuccess({ coords }) {
  // const lat = coords.latitude;
  // const lon = coords.latitude;

  //wonju
  const lat = 37.33908333;
  const lon = 127.9220556;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const weatherInfo = {
        name: data.name,
        weather: data.weather,
        icon: data.weather[0].icon,
      };

      setWeather(weatherInfo);

      // https://openweathermap.org/img/wn/10d@2x.png
    });
}

function onGeoError() {
  alert("Error");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
