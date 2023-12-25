import data from "./data.js";

console.log(data.length);

const countSnowflake = 30;
const countAuthor = 55;
let itemsTemplate = document.getElementById('itemsTemplate').content.querySelector('.items');
let itemsTemplate4 = document.getElementById('itemsTemplate4').content.querySelector('.items__row-4');
const templateToy = document.getElementById('toyTemplate');

const main = document.querySelector('.main');
// let lorem = "От души желаю тебе успехов во всех делах. Пусть все складывается самым лучшим и благоприятным для тебя образом. Пусть удача сопутствует всем задумкам!"

const snowContainer = document.getElementById('snow-container')
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

let previousNumber = null;

// for (let i = 0; i < data.length; i++) {
    
//     templateToy.content.querySelector('.name').textContent = data[i].name;
//     templateToy.content.querySelector('.description').textContent = data[i].description;
//     templateToy.content.querySelector('.item').style.backgroundImage = `url(./img/toy${getRandomNumberExceptLast(1, 4)}.png)`;
//     // if (i % 5 != 0) {
//         itemsTemplate.content.classList.add('items__row-4');
//     // }
//     itemsTemplate.append(templateToy.content.cloneNode(true))
// }

let flag = true;
let i = 0;
while (flag) {
    for (let j = 0; j < 5; j++) {
        if (i < data.length) {
            itemsTemplate.append(createItem(i).content.cloneNode(true));
            i++;
        } else {
            flag = false;
            main.append(itemsTemplate.cloneNode(true));
            break;
        }
    }
    if (flag) {
        main.append(itemsTemplate.cloneNode(true));
        while (itemsTemplate.hasChildNodes()) {
            itemsTemplate.removeChild(itemsTemplate.firstChild);
        }
    }
    for (let j = 0; j < 4; j++) {
        if (i < data.length) {
            itemsTemplate4.append(createItem(i).content.cloneNode(true));
            i++;
        } else {
            flag = false;
            main.append(itemsTemplate4.cloneNode(true));
            break;
        }
    }
    if (flag) {
        main.append(itemsTemplate4.cloneNode(true));
        while (itemsTemplate4.hasChildNodes()) {
            itemsTemplate4.removeChild(itemsTemplate4.lastChild)
        }
    }
}

function createItem(i) {
    templateToy.content.querySelector('.name').textContent = data[i].name;
    templateToy.content.querySelector('.description').textContent = data[i].description;
    if (data[i].img === undefined) {
        templateToy.content.querySelector('.item').style.backgroundImage = `url(./img/toy${getRandomNumberExceptLast(1, 4)}.png)`;
    }else {
        templateToy.content.querySelector('.item').style.backgroundImage = `url(./img/${data[i].img})`;
    }
    templateToy.content.querySelector('.item').style.transform = `rotate(${getRandomNumberExceptLast(-5, 5)}deg)`
    templateToy.content.querySelector('.item').style.top = `${getRandomNumberExceptLast(-20, 20)}px`
    return templateToy;
}

function getRandomNumberExceptLast(min, max) {
    let randomNumber;
    do {
    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (randomNumber === previousNumber);
    previousNumber = randomNumber;
    return randomNumber;
}


function createSnowflake() {
    
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.textContent = '❄';
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    snowflake.style.animationDuration = Math.random() * 3 + 5 + 's'; // Duration between 5 and 8 seconds
    snowflake.style.fontSize = Math.random() * 24 + 10 + 'px'; // Size between 10px and 34px
    
    snowContainer.appendChild(snowflake);
    
    // Remove snowflake after animation ends
    snowflake.addEventListener('animationend', function() {
        snowflake.remove();
    });
}

setInterval(createSnowflake, 300);



function countdown(date) {
    const now = new Date();
    const diff = date - now;
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