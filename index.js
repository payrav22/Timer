const timer = document.querySelector('.timer');
const form = document.querySelector('form');
const incrementButton = document.querySelector('.timer__control--increment');
const decrementButton = document.querySelector('.timer__control--decrement');
const startButton = document.getElementById('start');
const resetButton = document.getElementById('reset');
const outputTimer = document.getElementById('output');

let minutesField = document.getElementById('minutes');
let secondsField = document.getElementById('seconds');
let initialTimer = 300000;

incrementButton.addEventListener('click', () => {
    if (minutesField.value < 99) {
        minutesField.value = (++minutesField.value).toString().padStart(2, '0');
    };
});

decrementButton.addEventListener('click', () => {
    if (minutesField.value >= 1) {
        minutesField.value = (--minutesField.value).toString().padStart(2, '0');;
    };
});

minutesField.addEventListener('click', () => {
    clearInterval(initialTimer);
    startButton.removeAttribute('disabled');
});

secondsField.addEventListener('click', () => {
    clearInterval(initialTimer);
    startButton.removeAttribute('disabled');
});

startButton.addEventListener('click', () => {
    function startInterval() {
        initialTimer = setInterval(() => {
            timerCount();
        }, 1000);
    }
    startInterval();
    startButton.setAttribute('disabled', 'disabled');
})

resetButton.addEventListener('click', () => {
    minutesField.value = 0;
    secondsField.value = 0;
    clearInterval(initialTimer)
    minutesField.removeAttribute('disabled');
    minutesField.removeAttribute('disabled');
    startButton.removeAttribute('disabled');
    timer.classList.remove('shake');
    form.classList.remove('shake-shadow');
    minutesField.classList.remove('shake-color');
    secondsField.classList.remove('shake-color');
    outputTimer.classList.remove('shake-color');
})

function timerCount() {
    if (minutesField.value == 0 && secondsField.value == 0) {
        minutesField.value = '00';
        secondsField.value = '00';
        minutesField.setAttribute('disabled', 'disabled');
        secondsField.setAttribute('disabled', 'disabled');
        timer.classList.add('shake');
        form.classList.add('shake-shadow');
        minutesField.classList.add('shake-color');
        secondsField.classList.add('shake-color');
        outputTimer.classList.add('shake-color');
    } else if (secondsField.value != 0) {
        secondsField.value = (--secondsField.value).toString().padStart(2, '0');
    } else if (minutesField.value != 0 && secondsField.value == 0) {
        secondsField.value = 59;
        minutesField.value = (--minutesField.value).toString().padStart(2, '0');
    }
}

form.addEventListener('submit', (evt) => {
    evt.preventDefault();
})

minutesField.addEventListener('input', () => {
    if (minutesField.value > 99) {
        minutesField.value = 99;
    }
})

secondsField.addEventListener('input', () => {
    if (secondsField.value > 59) {
        secondsField.value = 59;
    }
});

