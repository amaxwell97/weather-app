const apiKey = '8d299ad4159f7d0f13220a4d51fdb3c1';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=imperial&q=';

const searchBox = document.querySelector('.search input').value;
const searchBtn = document.querySelector('.search button');

async function checkWeather(city) {
    const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);
    let data = await response.json();

    console.log(data);

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = `${Math.round(data.main.temp)}°F`;
    document.querySelector('.humidity').innerHTML = `${Math.round(data.main.humidity)}%`;
    document.querySelector('.wind').innerHTML = `${Math.round(data.wind.speed)} MPH`;
}

searchBtn.addEventListener('click', () => {
    checkWeather();
})

