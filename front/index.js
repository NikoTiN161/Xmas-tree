
const items = document.querySelector('.items');
const templateToy = document.getElementById('toyTemplate');
let lorem = "lorem ipsum dolor sit amet consectetur adipisicing elit. lorem ipsum dolor sit amet adipisicing elit. lorem ipsum dolor sit amet consectetur adipisicing elit. stur adipisicing elit. lorem i"

const timer = document.querySelector('.timer');
const timerGrid = timer.querySelector('.timer-grid');
let weeks = 0, days = 0, hours = 0, minutes = 0, seconds = 0;
let timerDay = timerGrid.querySelector('.timer-grid__number_d');
let timerHour = timerGrid.querySelector('.timer-grid__number_h');
let timerMin = timerGrid.querySelector('.timer-grid__number_m');
let timerSec = timerGrid.querySelector('.timer-grid__number_s');

let timerWordDay = timerGrid.querySelector('.timer-grid__word_d');
let timerWordHour = timerGrid.querySelector('.timer-grid__word_h');
let timerWordMin = timerGrid.querySelector('.timer-grid__word_m');
let timerWordSec = timerGrid.querySelector('.timer-grid__word_s');

let lastIndex;

for (let i = 0; i < 10; i++) {
    templateToy.content.querySelector('.name').textContent = `От кого ${i}`;
    templateToy.content.querySelector('.description').textContent = `${lorem} ${i}`;
    templateToy.content.querySelector('.item').style.backgroundImage = `url(./img/toy${randomInteger()}.png)`
    items.append(templateToy.content.cloneNode(true))
}

//function random int from 1 to 4
function randomInteger() {
    return Math.floor(Math.random() * (4 - 1 + 1)) + 1;
}


function countdown(date) {
    const now = new Date();
    const diff = date - now;
    // weeks = Math.floor(diff / (1000 * 60 * 60 * 24 * 7));
    days = Math.floor(diff / (1000 * 60 * 60 * 24)) - weeks * 7;
    hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((diff % (1000 * 60)) / 1000);
}

// установка времени в элементы страницы
setInterval(() => {
countdown(new Date(2023, 11, 31, 23, 59, 0));
    timerDay.textContent = days;
    timerWordDay.textContent = getDayDeclension(days);
    timerHour.textContent = hours;
    timerWordHour.textContent = getHourDeclension(hours);
    timerMin.textContent = minutes;
    timerWordMin.textContent = getMinuteDeclension(minutes);
    timerSec.textContent = seconds;
    timerWordSec.textContent = getSecondDeclension(seconds);

}, 1000);

function getDayDeclension(num) {
    let lastDigit = num % 10;
    let lastTwoDigits = num % 100;

    if (lastDigit === 1 && lastTwoDigits !== 11) {
        return 'день';
    } else if (lastDigit >= 2 && lastDigit <= 4 && (lastTwoDigits < 10 || lastTwoDigits >= 20)) {
        return 'дня';
    } else {
        return 'дней';
    }
}

function getHourDeclension(num) {
    let lastDigit = num % 10;
    let lastTwoDigits = num % 100;

    if (lastDigit === 1 && lastTwoDigits !== 11) {
        return 'час';
    } else if (lastDigit >= 2 && lastDigit <= 4 && (lastTwoDigits < 10 || lastTwoDigits >= 20)) {
        return 'часа';
    } else {
        return 'часов';
    }
}

function getMinuteDeclension(num) {
    let lastDigit = num % 10;
    let lastTwoDigits = num % 100;

    if (lastDigit === 1 && lastTwoDigits !== 11) {
        return 'минута';
    } else if (lastDigit >= 2 && lastDigit <= 4 && (lastTwoDigits < 10 || lastTwoDigits >= 20)) {
        return 'минуты';
    } else {
        return 'минут';
    }
}

function getSecondDeclension(num) {
    let lastDigit = num % 10;
    let lastTwoDigits = num % 100;

    if (lastDigit === 1 && lastTwoDigits !== 11) {
        return 'секунда';
    } else if (lastDigit >= 2 && lastDigit <= 4 && (lastTwoDigits < 10 || lastTwoDigits >= 20)) {
        return 'секунды';
    } else {
        return 'секунд';
    }
}