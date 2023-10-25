// api key 1dd9052073524d81809a21435dc506f3
// 2f6214368a9e52e6f08f4e60d2af1e44

// Built-in API request by city name
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// https://api.openweathermap.org/data/2.5/weather?q=kochi&appid=2f6214368a9e52e6f08f4e60d2af1e44&units=metric

const api_key = "2f6214368a9e52e6f08f4e60d2af1e44";
const api_url = "https://api.openweathermap.org/data/2.5/weather?units=metric";

const search_box = document.querySelector(".search input");
const search_button = document.querySelector(".search button");

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
  let data = await response.json();

  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";
}

window.addEventListener("DOMContentLoaded", check_weather("new delhi"));
