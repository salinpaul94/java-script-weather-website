// api key 1dd9052073524d81809a21435dc506f3
// 2f6214368a9e52e6f08f4e60d2af1e44

// Built-in API request by city name
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// https://api.openweathermap.org/data/2.5/weather?q=kochi&appid=2f6214368a9e52e6f08f4e60d2af1e44&units=metric

const api_key = "2f6214368a9e52e6f08f4e60d2af1e44";
const api_url =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=kochi";

async function check_weather() {
  const response = await fetch(api_url + `&appid=${api_key}`);
  let data = await response.json();

  console.log(data);
}

check_weather();
