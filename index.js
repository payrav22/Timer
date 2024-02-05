'use strict'
const timer = document.querySelector('.timer');
const incrementButton = timer.querySelector('.timer__control--increment');
const decrementButton = timer.querySelector('.timer__control--decrement');
const startButton = timer.querySelector('[type="submit"]');
const resetButton = timer.querySelector('[type="reset"]');
const minutesField = timer.querySelector('[name="minutes"]');
const secondsField = timer.querySelector('[name="seconds"]');

let intervalID;

incrementButton.addEventListener('click', () => {
    if (minutesField.value < '99') {
        minutesField.value = (++minutesField.value).toString().padStart(2, '0');
        timer.classList.remove('shake');
    };
});

decrementButton.addEventListener('click', () => {
    if (minutesField.value >= 1) {
        minutesField.value = (--minutesField.value).toString().padStart(2, '0');;
    };
});

minutesField.addEventListener('click', () => {
    intervalID && clearInterval(intervalID);
    startButton.removeAttribute('disabled');
    timer.classList.remove('shake');
});

secondsField.addEventListener('click', () => {
    intervalID && clearInterval(intervalID);
    startButton.removeAttribute('disabled');
    timer.classList.remove('shake');
});

startButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    evt.target.setAttribute('disabled', 'disabled');
    intervalID = setInterval(() => {
        if (minutesField.value === '00' && secondsField.value === '00') {
            timer.classList.add('shake');
            clearInterval(intervalID);
            evt.target.removeAttribute('disabled');
        } else if (secondsField.value !== '00') {
            secondsField.value = (--secondsField.value).toString().padStart(2, '0');
        } else if (minutesField.value !== '00' && secondsField.value === '00') {
            secondsField.value = '59';
            minutesField.value = (--minutesField.value).toString().padStart(2, '0');
        }
    }, 1000);
})

resetButton.addEventListener('click', () => {
    clearInterval(intervalID)
    startButton.removeAttribute('disabled');
    timer.classList.remove('shake');
})

minutesField.addEventListener('input', () => (minutesField.value = (minutesField.value).toString().padStart(2, '0').slice(-2)))

secondsField.addEventListener('input', () => {
    secondsField.value = (+secondsField.value).toString().padStart(2, '0').slice(-2);
    if (+secondsField.value > 59) {
        secondsField.value = 59;
    }
})
