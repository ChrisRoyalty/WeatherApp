let searchInput = document.querySelector(".search input");
let searchBtn = document.querySelector(".search button");
let image = document.querySelector(".icon");
async function getWeather(city) {
  let res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=da0d6fa9d004102e1c416d2b44435549&units=metric`
  );
  console.log(res);
  if (res.status === 404) {
    document.querySelector(".error").style.display = "block";
  } else {
    document.querySelector(".error").style.display = "none";
  }
  let data = await res.json();
  console.log(data);
  document.querySelector(".celcius").innerHTML =
    Math.round(data.main.temp) + "°c";
  document.querySelector(".description").innerText =
    data.weather[0].description;
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".humidity").innerHTML =
    Math.round(data.main.humidity) + "%";
  document.querySelector(".wind").innerHTML =
    Math.round(data.wind.speed) + "k/h";
  if (data.weather[0].main == "Clouds") {
    image.src = "images/cloud.png";
  } else if (data.weather[0].main == "Clear") {
    image.src = "images/clear-sky (1).png";
  } else if (data.weather[0].main == "Rain") {
    image.src = "images/rainy-weather.png";
  } else if (data.weather[0].main == "Drizzle") {
    image.src = "images/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    image.src = "images/mist.png";
  } else if (data.weather[0].main == "Sun") {
    image.src = "images/sun.png";
  }
}

searchBtn.addEventListener("click", () => {
  getWeather(searchInput.value);
});
