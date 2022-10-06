const price = document.querySelector('#price');
const people = document.querySelector('#people');
const tip = document.querySelector('#tip');
const countBtn = document.querySelector('.count');
const error = document.querySelector('.error');
const cost = document.querySelector('.cost');
const costInfo = document.querySelector('.cost-info');

const checkForm = () => {
	if (price.value == '' || people.value == '' || tip.value == 0) {
		error.textContent = 'Complete all the fields!';
		costInfo.style.display = 'none';
	} else {
		error.textContent = '';
		countBill();
	}
};

const countBill = () => {
    const newPrice = parseFloat(price.value)
    const newPeople = parseInt(people.value)
    const newTip = parseFloat(tip.value)

	const sum = (newPrice + newPrice * newTip) / newPeople
    cost.textContent = sum.toFixed(2)
	costInfo.style.display = 'block'
};

countBtn.addEventListener('click', checkForm);

