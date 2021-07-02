import dotenv from 'dotenv';

dotenv.config();
const WEATHER_API_KEY = process.env.APIKEY;

function getWeatherData() {
  const location = document.getElementsByClassName("Location")[0];
  const celsius = document.getElementsByClassName("Celsius")[0];
  const fahrenheit = document.getElementsByClassName("Fahrenheit");
  celsius.addEventListener('click', () => {
    fetch(`api.openweathermap.org/data/2.5/weather?q={${location}}& appid={ ${WEATHER_API_KEY} } `, { mode: 'cors' })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (err) {
        console.log(err);
      })
  })
}

getWeatherData();
