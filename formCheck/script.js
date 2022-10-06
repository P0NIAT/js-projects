const username = document.querySelector('#username');
const pass = document.querySelector('#password');
const pass2 = document.querySelector('#password2');
const email = document.querySelector('#email');
const sendBtn = document.querySelector('.send');
const clearBtn = document.querySelector('.clear');
const closeBtn = document.querySelector('.close');
const popup = document.querySelector('.popup');

// ---------- argument INPUT przechowuje nasze INPUTy, argument MSG przechowuje placeholder ----------
const showError = (input, msg) => {

const formBox = input.parentElement
const errorMsg = formBox.querySelector('.error-text')

formBox.classList.add('error')
errorMsg.textContent = msg
}

const clearError = input => {
    const formBox = input.parentElement
    formBox.classList.remove('error')
}

// ---------- // argumenrt INPUT z funkcji "checkForm" przechowuje tablicę z naszymi inputami
// argument EL odnosi się do każdej zmiennej, którą umieściliśmy w tablicy ----------
const checkForm = input => {
    input.forEach(el => {
        if (el.value === '') {
            showError(el, el.placeholder)
        } else {
            clearError(el)
        }
    })
};

const checkLength = (input, min) => {
        if (input.value.length < min) {
            showError(input, `${input.previousElementSibling.innerText.slice(0, -1)} should have min ${min} characters.`)
        } 
}

const checkPassword = (pass1, pass2) => {
    if (pass1.value !== pass2.value) {
        showError(pass2, `Passwords do not match!`)
    }
}

const checkMail = () => {
    const reg = /^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i;

    if(reg.test(email.value)) {
        clearError(email)
    } else {
        showError(email, `Please enter a valid e-mail address!`)
    }
}

const checkErrors = () => {
    const allInputs = document.querySelectorAll('.form-box')
    let errorCount = 0

    allInputs.forEach(el => {
        if(el.classList.contains('error')) {
            errorCount++
        }
    })

    if(errorCount === 0) {
        popup.classList.add('show-popup')
    }
}

sendBtn.addEventListener('click', e => {
    e.preventDefault()
    checkForm([username, pass, pass2, email])
    checkLength(username, 3)
    checkLength(pass, 8)
    checkLength(username, 3)
    checkPassword(pass, pass2)
    checkMail(email)
    checkErrors()
});

clearBtn.addEventListener('click', e => {
	e.preventDefault();

    [username, pass, pass2, email].forEach(el => {
		el.value = '';
        clearError(el)
	});
});