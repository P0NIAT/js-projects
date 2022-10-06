const head = document.querySelector('.shake-animation');
const intup = document.querySelector('input');
const answer = document.querySelector('.answer');
const error = document.querySelector('.error');

const aswerList = [
	'Yes!',
	'No.',
	'Maybe...',
	'It is hard to say.',
	'Do you really want to know answer to this question?',
    'It will be better for You if You do not know the answer...'
];

const shakeHead = () => {
	head.classList.add('shake-animation')
    setTimeout(intupCheck, 1000)
};

const intupCheck = () => {
	if (intup.value !== '' && intup.value.slice(-1) === '?') {
		giveAnswer();
		error.textContent = '';
	} else if (intup.value !== '' && intup.value.slice(-1) !== '?') {
		error.textContent = 'Please use the question mark "?"';
		answer.textContent = '';
	} else {
		error.textContent = 'Please type the question.';
        answer.textContent = '';
	}
    head.classList.remove('shake-animation')
};

const giveAnswer = () => {
	const number = Math.floor(Math.random() * aswerList.length);
	answer.innerHTML = `<span>Answer:</span> ${aswerList[number]}`;
};

head.addEventListener('click', shakeHead);
