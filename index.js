const inputMin = document.getElementById('min');
const buttonMinAdd = document.querySelector('.minutes__button--add');
const buttonMinReduce = document.querySelector('.minutes__button--reduce');

buttonMinAdd.addEventListener('click', () => {
    if (inputMin.value < 99) {
        inputMin.value = (++inputMin.value).toString().padStart(2, '0');

    };
});

buttonMinReduce.addEventListener('click', () => {
    if (inputMin.value >= 0) {
        inputMin.value = (--inputMin.value).toString().padStart(2, '0');;
    };
});


const start = document.getElementById('start');
const reset = document.getElementById('reset');
const min = document.getElementById("min");
const sec = document.getElementById("sec");

let startTimer = null;

start.addEventListener('click', () => {
    function startInterval() {
        startTimer = setInterval( () => {
            timer();
        }, 1000);
    }
    startInterval();
})

reset.addEventListener('click', () => {
    min.value = 0;
    sec.value = 0;
    clearInterval(startTimer)
})

function timer() {
    if (min.value == 0 && sec.value == 0) {
        min.value = 0;
        sec.value = 0;
    } else if (sec.value != 0) {
        sec.value = (--sec.value).toString().padStart(2, '0');
    } else if (min.value != 0 && sec.value == 0) {
        sec.value = 59;
        min.value = (--min.value).toString().padStart(2, '0');
    }
}

