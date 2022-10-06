const converter = document.querySelector('#converter');
const result = document.querySelector('.result');
const convBtn = document.querySelector('.conv');
const resetBtn = document.querySelector('.reset');
const changeBtn = document.querySelector('.change');
const one = document.querySelector('.one');
const two = document.querySelector('.two');

const swap = () => {
	if (one.textContent === '°C') {
		one.textContent = '°F';
		two.textContent = '°C';
      result.textContent = ''
	} else {
		one.textContent = '°C';
		two.textContent = '°F';
      result.textContent = ''
	}
};

const celToFah = () => {
	let conF = converter.value * 1.8 + 32;
	result.textContent = `${converter.value} °C is ${conF.toFixed(1)} °F `;
	converter.value = '';
};
const fahToCel = () => {
	let conC = (converter.value - 32) / 1.8;
	result.textContent = `${converter.value} °F is ${conC.toFixed(1)} °C`;
	converter.value = '';
};

const degCov = () => {
	if (converter.value !== '') {
		if (one.textContent === '°C') {
			celToFah();
		} else {
			fahToCel();
		}
	} else {
		result.textContent = 'Please enter a value';
	}
};

const clear = () => {
   converter.value = '';
   result.textContent = ''
}

changeBtn.addEventListener('click', swap);
convBtn.addEventListener('click', degCov);
resetBtn.addEventListener('click', clear)
