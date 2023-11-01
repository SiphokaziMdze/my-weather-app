let now = new Date();

let hours = now.getHours();
let minutes = now.getMinutes();

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let day = days[now.getDay()];

let h4 = document.querySelector("#date-time");
h4.innerHTML = `${day} ${hours}:${minutes}`; 

function search(event){
    event.preventDefault();
    let searchInput = document.querySelector("#search-text-input");
    let cityName = searchInput.value;

    let h2 = document.querySelector("h2");

    if(cityName.value){
        h2.innerHTML = `${cityName.value}`
    } else {
        h2.innerHTML = "Cape Town"; }

let apiKey = "6b7433e0fa81781463cc94ceadf13cfc";
let units = "metric";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${units}`;

axios.get(`${apiUrl}`).then(showTemperature);

}

let form = document.getElementById("search-form");
let cityInput = form;
form.addEventListener("submit", search); 



function showTemperature(response){

console.log(response.data);
cityElement = document.querySelector("h2");
cityElement.innerHTML = response.data.name;
let temperature = Math.round(response.data.main.temp); 
let temperatureElement = document.querySelector("h3");
let description = document.querySelector("#description");
description.innerHTML = response.data.weather[0].description;
temperatureElement.innerHTML = `${temperature} &#8451`;
let humidity = document.querySelector("#humidity");
humidity.innerHTML = `Humidity: ${response.data.main.humidity}%`;
let windSpeed = document.querySelector("#wind-speed");
windSpeed.innerHTML = `Wind speed: ${response.data.wind.speed}Km/h`;

}

function showLocation(position){
let latitude = position.coords.latitude;
let longitude = position.coords.longitude;
let apiKey = "6b7433e0fa81781463cc94ceadf13cfc";
let units = "metric";
let api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
let axios = 
axios.get(`${api}`).then(showTemperature);
}
function getLocation(){
navigator.geolocation.getCurrentPosition(showLocation);
}

let locationButton = document.querySelector(".location-button");
locationButton.addEventListener("click", getLocation);
