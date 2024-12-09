let passKey = "b17222ee3762efbdd6f61c0fdb80f3f1";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(city) {
    let response = await fetch(apiUrl + city + `&appid=${passKey}`);
    if (response.ok) {
        let data = await response.json();

       
        document.querySelector('.temperature').innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.Humidity').innerHTML = data.main.humidity + "%";
        document.querySelector('.Wind').innerHTML = data.wind.speed + " km/hr";

        let weatherIcon = document.querySelector('.weather-icon');
        if (data.weather[0].main === "Clouds") {
            weatherIcon.src = "images/clouds.png";
        } else if (data.weather[0].main === "Clear") {
            weatherIcon.src = "images/clear.png";
        } else if (data.weather[0].main === "Rain") {
            weatherIcon.src = "images/rain.png";
        } else if (data.weather[0].main === "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
        } else if (data.weather[0].main === "Mist") {
            weatherIcon.src = "images/mist.png";
        } else {
            weatherIcon.src = "images/clouds.png"; 
        }
    } else {
        alert("City not found or unable to fetch weather data. Please try again.");
    }
    document.querySelector('.weather-info').style.display="block"
}

document.addEventListener('DOMContentLoaded', () => {
    let searchBox = document.querySelector(".search-bar input");
    let searchBtn = document.querySelector(".search-bar button");

    searchBtn.addEventListener("click", () => {
        let city = searchBox.value.trim();
        if (city) {
            checkWeather(city);
        } else {
            alert("Please enter a city name.");
        }
    });
});
