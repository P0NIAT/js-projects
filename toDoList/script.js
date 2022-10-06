let todoInput, errorInfo, addBtn, ulList, newTodo, popup, popupInfo, todoToEdit, popupInput, popupAddBtn, popupCloseBtn

const main = () => {
	prepareDomElements();
	prepareDomEvents();
};

const prepareDomElements = () => {
	todoInput = document.querySelector('.todo-input');
	errorInfo = document.querySelector('.error-info');
	addBtn = document.querySelector('.btn-add');
	ulList = document.querySelector('.todolist ul');

    popup = document.querySelector('.popup')
    popupInfo = document.querySelector('.popup-info')
    popupInput = document.querySelector('.popup-input')
    popupAddBtn = document.querySelector('.accept')
    popupCloseBtn = document.querySelector('.cancel')
};

const prepareDomEvents = () => {
	addBtn.addEventListener('click', addNewTodo)
	ulList.addEventListener('click', checkClick)
    popupCloseBtn.addEventListener('click', closePopup)
    popupAddBtn.addEventListener('click', changeTodoText)
    todoInput.addEventListener('keyup', enterKeyCheck)
    popupInput.addEventListener('keyup', enterKeyPopup)

};

const addNewTodo = () => {
	if (todoInput.value !== '') {
		newTodo = document.createElement('li')
		newTodo.textContent = todoInput.value
		createToolsArea()

		ulList.append(newTodo);

		todoInput.value = '';
		errorInfo.textContent = '';
	} else {
        errorInfo.textContent = 'Wpisz treść zadania!';
        errorInfo.style.color = 'tomato'
	}
};

const createToolsArea = () => {
	const divTools = document.createElement('div');
	divTools.classList.add('tools');
	newTodo.append(divTools);

	const btnComp = document.createElement('button');
	btnComp.classList.add('complete');
	btnComp.innerHTML = '<i class="fas fa-check"></i>';

	const btnEdit = document.createElement('button');
	btnEdit.classList.add('edit');
	btnEdit.textContent = 'EDIT';

	const btnDelete = document.createElement('button');
	btnDelete.classList.add('delete');
	btnDelete.innerHTML = '<i class="fas fa-times"></i>';
	divTools.append(btnComp, btnEdit, btnDelete);
};

const checkClick = (e) => {
	if (e.target.matches('.complete')) {
		e.target.closest('li').classList.toggle('completed');
		e.target.classList.toggle('completed');
	} else if (e.target.matches('.edit')) {
		editTodo(e)
	} else if (e.target.matches('.delete')) {
		deleteTodo(e)

	}
}

const editTodo = (e) => {
    todoToEdit = e.target.closest('li')
    popupInput.value = todoToEdit.firstChild.textContent
    // todoToEdit.firstChild.textContent = popupInput.value
    popup.style.display = 'flex'
}

const closePopup = () => {
    popup.style.display = 'none'
    popupInfo.textContent = ''
}

const changeTodoText = () => {
    if(popupInput.value !== '') {
        todoToEdit.firstChild.textContent = popupInput.value
        closePopup()
    } 
    else {
        popupInfo.textContent = 'Musisz podaj jakąś treść!'
        popupInfo.style.color = 'tomato'
    }
}

const deleteTodo = e => {
    e.target.closest('li').remove()

    const allTodos = ulList.querySelectorAll('li')
    console.log(allTodos);

    if(allTodos.length === 0) {
        errorInfo.textContent = 'Brak zadań na liście.'
    }

}

const enterKeyCheck = e => {
    if(e.key === 'Enter') {
        addNewTodo()
    }
}
const enterKeyPopup = e => {
    if(e.key === 'Enter') {
        changeTodoText()
}
}

document.addEventListener('DOMContentLoaded', main);

// ---------- opcja 2 (MORE PROFESSIONAL) (.113) ----------

// const add = (x, y) => {
//     const score = x + y
//     showScore(score)
// }

// const showScore = score2 => {
//     console.log(`Wynik to: ${score2}`);
// }

// add(4, 5)

// -------------------------------

// let score

// const add = (x, y) => {
//     score = x + y
//     showScore()
// }

// const showScore = () => {
//     console.log(`Wynik to: ${score}`);
// }

// add(4, 11)

// -------------------------------

// let todoInput, errorInfo, addBtn, ulList

// const main = () => {
// 	prepareDomElements();
// 	prepareDomEvents();
// };

// const prepareDomElements = () => {
// 	todoInput = document.querySelector('.todo-input');
// 	errorInfo = document.querySelector('.error-info');
// 	addBtn = document.querySelector('.btn-add');
// 	ulList = document.querySelector('.todolist ul');
// };

// const prepareDomEvents = () => {
//     addBtn.addEventListener('click', addNewTodo)
// };

// const addNewTodo = () => {
// 	if (todoInput.value !== '') {
// 		const newTodo2 = document.createElement('li')
// 		newTodo2.textContent = todoInput.value
//         createToolsArea(newTodo2)

//         ulList.append(newTodo2)

//         todoInput.value = ''
//         errorInfo.textContent = ''
// 	} else {
// 		errorInfo.textContent = 'Wpisz treść zadania!'
// 	}
// };

// const createToolsArea = (newTodoPar) => {

//     const divTools = document.createElement('div')
//     divTools.classList.add('tools')
//     newTodoPar.append(divTools)

//     const btnComp = document.createElement('button')
//     btnComp.classList.add('complete')
//     btnComp.innerHTML = '<i class="fas fa-check"></i>'

//     const btnEdit = document.createElement('button')
//     btnEdit.classList.add('edit')
//     btnEdit.textContent = 'EDIT'

//     const btnDelete = document.createElement('button')
//     btnDelete.classList.add('delete')
//     btnDelete.innerHTML = '<i class="fas fa-times"></i>'
//     divTools.append(btnComp, btnEdit, btnDelete)
// }

// document.addEventListener('DOMContentLoaded', main);

// ---------- koniec opcji 2  ----------
