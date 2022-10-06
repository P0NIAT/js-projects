const currentDay = document.querySelector('.current-day');
const funFact = document.querySelector('.fun-fact');

const facts = [
	'The crocodile cannot stick its tongue out.',
	'Each person spent about half an hour as a single cell.',
	'Sound travels 15 times faster through steel than through air.',
	'Sloths take two weeks to digest their food.',
	'Gorillas sleep up to fourteen hours a day.',
	'The chameleon tongue is twice as long as its body',
	'The Chinese use about 80 billion sticks a year.',
	'To climb the Eiffel Tower you have to climb 1710 steps.',
	'Human teeth are the only part of the body that cannot heal themselves',
];

const day = new Date();
currentDay.textContent = day.toLocaleString('en', { weekday: 'long' });

// --------- opcja 1 ----------

// const showRandomFacts = () => {
// 	const number = Math.floor(Math.random() * facts.length)
// 	console.log(number);
// 	funFact.textContent = facts[number]
// }

// --------- opcja 2 MOJA ;) ----------

const showRandomFacts = () => {
	funFact.textContent = facts[Math.floor(Math.random() * facts.length)];
};

// --------------------

showRandomFacts();
