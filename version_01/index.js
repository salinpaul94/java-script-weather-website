// api key 1dd9052073524d81809a21435dc506f3
// 2f6214368a9e52e6f08f4e60d2af1e44

// Built-in API request by city name
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// https://api.openweathermap.org/data/2.5/weather?q=kochi&appid=2f6214368a9e52e6f08f4e60d2af1e44&units=metric

const api_key = "2f6214368a9e52e6f08f4e60d2af1e44";
const api_url = "https://api.openweathermap.org/data/2.5/weather?units=metric";

const search_box = document.querySelector(".search input");
const search_button = document.querySelector(".search button");
const weather_icon = document.querySelector(".weather_icon");

search_button.addEventListener("click", () => {
  check_weather(search_box.value);
});

search_box.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    check_weather(search_box.value);
  }
});

async function check_weather(city_name) {
  const response = await fetch(
    api_url + `&q=${city_name}` + `&appid=${api_key}`
  );

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    document.querySelector(".error").style.display = "none";
    let data = await response.json();
    show_data(data);
  }
}

function show_data(data) {
  console.log(data);

  document.querySelector(".weather_condition").innerHTML = data.weather[0].main;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";

  if (data.weather[0].main == "Clouds") {
    weather_icon.src = "images/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    weather_icon.src = "images/clear.png";
  } else if (data.weather[0].main == "Rain") {
    weather_icon.src = "images/rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    weather_icon.src = "images/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    weather_icon.src = "images/mist.png";
  } else if (data.weather[0].main == "Snow") {
    weather_icon.src = "images/snow.png";
  } else if (data.weather[0].main == "Haze") {
    weather_icon.src = "images/haze.png";
  }

  document.querySelector(".weather").style.display = "block";
}
