const settings = document.querySelector('.settings');
const settingsBtn = document.querySelector('.setting-btn');
const imageSection = document.querySelector('.image-section');

const eventName = document.querySelector('#event-name');
const eventDay = document.querySelector('#event-day');
const eventMonth = document.querySelector('#event-month');
const eventYear = document.querySelector('#event-year');
const eventImg = document.querySelector('#event-image');

const daysCount = document.querySelector('.days-count');
const hoursCount = document.querySelector('.hours-count');
const minutesCount = document.querySelector('.minutes-count');
const secondsCount = document.querySelector('.seconds-count');

const saveBtn = document.querySelector('.save');
const eventSpan = document.querySelector('.event');
let usersTime;

const setTime = () => {
	const currentTime = new Date();
	const result = usersTime - currentTime;

	const days = Math.floor(result / 1000 / 60 / 60 / 24);
	const hours = Math.floor(result / 1000 / 60 / 60) % 24;
	const minutes = Math.floor(result / 1000 / 60) % 60;
	const seconds = Math.floor(result / 1000) % 60;

	daysCount.textContent = days;
	hoursCount.textContent = hours;
	minutesCount.textContent = minutes;
	secondsCount.textContent = seconds;

	console.log(days);
};

const appUpdate = () => {
	eventSpan.textContent = eventName.value;
	usersTime = new Date(
		`${eventMonth.value} ${eventDay.value} ${eventYear.value}`
	);
	imageSection.style.backgroundImage = 'url(' + eventImg.value + ')';
	// https://cdn.pixabay.com/photo/2014/11/13/17/04/heart-529607_960_720.jpg
	// Наша первая годовщина свадьбы
	setTime();
};

settingsBtn.addEventListener('click', () => {
	settings.classList.toggle('active');
});
saveBtn.addEventListener('click', appUpdate);

setInterval(setTime, 1000)