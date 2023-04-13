const apiKey = "ecdebc01d90a5c1e75556e5c58758333";
const apiUrl ="https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}";

async function pullWeather(){
    const response = await fetch(apiUrl + '&appid=${apiKey}')
    let forecast = await response.json();

    console.log(forecast)

    document.querySelector(".city").innerHTML =forecast.name;
    document.querySelector(".temp").innerHTML =forecast.main.temp;
}
pullWeather();

