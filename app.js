const apiKey = '8d299ad4159f7d0f13220a4d51fdb3c1';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=imperial&q=';

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon')

async function checkWeather(city) {
    const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);
    let data = await response.json();

    console.log(data);

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = `${Math.round(data.main.temp)}°F`;
    document.querySelector('.humidity').innerHTML = `${Math.round(data.main.humidity)}%`;
    document.querySelector('.wind').innerHTML = `${Math.round(data.wind.speed)} MPH`;

    switch (data.weather[0].main) {
        case 'Clouds':
            weatherIcon.src = 'images/clouds.png';
            break;
        case 'Clear':
            weatherIcon.src = 'images/clear.png';
            break;
        case 'Drizzle':
            weatherIcon.src = 'images/drizzle.png';
            break;
        case 'Mist':
            weatherIcon.src = 'images/mist.png';
            break;
        case 'Rain':
            weatherIcon.src = 'images/rain.png';
            break;
        case 'Snow':
            weatherIcon.src = 'images/snow.png';
            break;
    }
}

searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
})

