const input = document.querySelector('input');
const button = document.querySelector('button');
const cityName = document.querySelector('.city-name');
const warning = document.querySelector('.warning');
const photo = document.querySelector('.photo');
const weather = document.querySelector('.weather');
const temperature = document.querySelector('.temperature');
const humidity = document.querySelector('.humidity');

const API_LINK = 'https://api.openweathermap.org/data/2.5/weather?q=';
const API_KEY = '&appid=79627ea06a562b056c0e0e60d2013b60';
const API_UNITS = '&units=metric';

// ---------- opcja 1  ----------

// const getWeather = () => {
//     const city = input.value || 'Kraków'
//     const URL = API_LINK + city + API_KEY + API_UNITS

//     axios.get(URL).then(res => {
//         console.log(res.data)
//         const temp = res.data.main.temp
//         const hum = res.data.main.humidity
//         const status = res.data.weather[0].main

//         cityName.textContent = res.data.name
//         temperature.textContent = Math.floor(temp) + '°C'
//         humidity.textContent = hum + '%'
//         weather.textContent = status
//     })
// }

// getWeather()
// button.addEventListener('click', getWeather)

// ---------- opcja 2 {Object.assign} ----------

const getWeather = () => {
	const city = input.value || 'Fethiye';
	const URL = API_LINK + city + API_KEY + API_UNITS;

	axios
		.get(URL)
		.then((res) => {
			console.log(res.data);
			const temp = res.data.main.temp;
			const hum = res.data.main.humidity;
			const status = Object.assign({}, ...res.data.weather);
			console.log(status.id);

			cityName.textContent = res.data.name;
			temperature.textContent = Math.floor(temp) + '°C';
			humidity.textContent = hum + '%';
			weather.textContent = status.main;
			warning.textContent = '';
			input.value = '';

			if (status.id >= 200 && status.id < 300) {
				photo.setAttribute('src', './img/thunderstorm.png');
			} else if (status.id >= 300 && status.id < 400) {
				photo.setAttribute('src', './img/dizzle.png');
			} else if (status.id >= 500 && status.id < 600) {
				photo.setAttribute('src', './img/rain.png');
			} else if (status.id >= 600 && status.id < 700) {
				photo.setAttribute('src', './img/cloud.png');
			} else if (status.id >= 701 && status.id < 800) {
				photo.setAttribute('src', './img/cloud.png');
			} else if (status.id >= 801 && status.id < 900) {
				photo.setAttribute('src', './img/cloud.png');
			} else if (status.id === 800) {
				photo.setAttribute('src', './img/sun.png');
			} else {
				photo.setAttribute('src', './img/unknown.png');
			}
		})
		.catch(() => (warning.textContent = 'Please enter a valid city name'));
};

// ---------- opcja 1 'Enter' ----------

// const enterCheck = (e) => {
// 	if (e.key === 'Enter') {
// 		getWeather();
// 	}
// };

// input.addEventListener('keyup', enterCheck);

// ---------- 🤓 opcja 2 'Enter' MOJA!!! 🤓 ----------

input.addEventListener('keyup', e => {
        if (e.key === 'Enter') {
            getWeather()
        }
    })

// --------------------

    button.addEventListener('click', getWeather);
getWeather();