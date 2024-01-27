const apiKey = '8d299ad4159f7d0f13220a4d51fdb3c1';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=imperial&q=seattle';

async function checkWeather() {
    const response = await fetch(`${apiUrl}&appid=${apiKey}`);
    let data = await response.json();

    console.log(data);

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = `${data.main.temp}°F`;
    document.querySelector('.humidity').innerHTML = `${data.main.humidity}%`;
    document.querySelector('.wind').innerHTML = `${data.wind.speed} MPH`;
}

checkWeather();