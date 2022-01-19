const param = {
    'url': "https://api.openweathermap.org/data/2.5/",
    'appid': 'd2fee8cb7e682df6daf0164000130fdd'
}

const cities = {
    2643743: "Лондон",
    625144: "Минск",
    1512569: 'Ташкент',
    703448: 'Киев'
}
function addCity() {
    let div = document.createElement('select');
    div.classList.add('sel');
    for (let k in cities) {
        let option = document.createElement('option');
        option.value = k;
        option.text = cities[k];
        div.append(option);
    };
    document.querySelector('.out').before(div);
    document.querySelector('.sel').onchange = getWeather;
    getWeather();

}

function getWeather() {
    const cityId = document.querySelector('.sel').value;
    fetch(`${param.url}weather?id=${cityId}&appid=${param.appid}`)
        .then(weather => {
            return weather.json();

        }).then(showWeather);
}

function showWeather(data) {
    document.querySelector('.out').innerHTML = `Температура: ${Math.round(data.main.temp - 273)}C&deg<br>
    Влажность: ${data.main.humidity}%`;
}

addCity();