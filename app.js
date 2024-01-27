const apiKey = '8d299ad4159f7d0f13220a4d51fdb3c1';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=standard&q=seattle';

async function checkWeather() {
    const response = await fetch(`${apiUrl}&appid=${apiKey}`);
    let data = await response.json();

    console.log(data);
}