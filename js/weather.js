const API_KEY = "d02bcb137bd7afedcfb2b142269b325a";
function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(response => response.json()
    .then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `🌏 ${data.weather[0].main}  /  ${data.main.temp}`;
    }));
}
function onGeoError(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

/*
{"coord":{"lon":126.9783,"lat":37.5985},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"base":"stations","main":{"temp":5.35,"feels_like":2.53,"temp_min":5.27,"temp_max":5.37,"pressure":1024,"humidity":57},"visibility":10000,"wind":{"speed":3.6,"deg":290},"clouds":{"all":0},"dt":1700472607,"sys":{"type":1,"id":8105,"country":"KR","sunrise":1700432190,"sunset":1700468332},"timezone":32400,"id":1835847,"name":"Seoul","cod":200}
 */