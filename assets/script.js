const apiKey = "e074ec15869b45d5b4fb4b9277c035e1"; // Your API key here
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="; // Your API URL here

const searchInput = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{
        var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".country").innerHTML = data.sys.country;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "assets/img/clouds.png";
    }
    else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "assets/img/clear.png";
    }
    else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "assets/img/rain.png";
    }
    else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "assets/img/drizzle.png";
    }
    else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "assets/img/mist.png";
    }
    else {
        weatherIcon.src = "assets/img/snow.png";
    }

    document.querySelector(".weather").style.display = "block";
  
    }  
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchInput.value);
})