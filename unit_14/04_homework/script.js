const param = {
    'url': "https://api.openweathermap.org/data/2.5/",
    'appid': 'd2fee8cb7e682df6daf0164000130fdd'
}

function getWeather() {
    const cityId = document.querySelector('#city').value;
    fetch(`${param.url}weather?id=${cityId}&units=metric&appid=${param.appid}`)
        .then(weather => {
            return weather.json();
        }).then(showWeather);
}

function showWeather(data) {
    console.log(data);
    document.querySelector('.out').innerHTML = data.temp;
}

getWeather();
document.querySelector('#city').onchange = getWeather;