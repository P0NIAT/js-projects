const inputD = document.querySelector('.search')
const drinkList = document.querySelectorAll('li')

const searchEngine = e => {
    const text = e.target.value.toLowerCase()
    console.log(text);

    drinkList.forEach(drinkItem => {

        if(drinkItem.textContent.toLowerCase().indexOf(text) !== -1) {
            drinkItem.style.display = 'block'
        } else {
            drinkItem.style.display = 'none'
        }
    });
}

inputD.addEventListener('keyup', searchEngine)

// ---------- option 2 RegExp ----------

// const inputD = document.querySelector('.search');
// const drinkList = document.querySelectorAll('li');

// const searchEngine = () => {
// 	drinkList.forEach((drinkItem) => {
// 		const match = new RegExp(inputD.value, 'i').test(drinkItem.textContent);
//         if (!match) {
// 			drinkItem.style.display = 'none';
// 		} else {
// 			drinkItem.style.display = 'block';
// 		}
// 	});
// };

// inputD.addEventListener('keyup', searchEngine);
