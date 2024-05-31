const questionnaires = document.querySelectorAll(".questionnaire__wrapper"),
    pacient = document.querySelector("#pacient"),
    modal = document.querySelector('.modal');

const today = document.querySelector('#today');
let date = new Date();
let output = String(date.getDate()).padStart(2, '0') + '.' + String(date.getMonth() + 1).padStart(2, '0') + '.' + date.getFullYear();
today.textContent = output;

const fadeIn = (el, timeout, display) => {
    el.style.opacity = 0;
    el.style.display = display || 'block';
    el.style.transition = `opacity ${timeout}ms`;
    setTimeout(() => {
        el.style.opacity = 1;
    }, 10);
};

const fadeOut = (el, timeout) => {
    el.style.opacity = 1;
    el.style.transition = `opacity ${timeout}ms`;
    el.style.opacity = 0;
    setTimeout(() => {
        el.style.display = 'none';
    }, timeout);
};

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let name_p = getRandomIntInclusive(100,300);
let lastname = getRandomIntInclusive(100,300);
pacient.textContent = name_p + "" + lastname;

function questionnaireSubmit() {

    let Y, TG, holest, mochevina;

    TG = document.querySelector('#TG').value;
    holest = document.querySelector('#holest').value;
    mochevina = document.querySelector('#mochevina').value;
        
    Y = -6.441 + 1.065 * TG + 0.197 * mochevina + 0.753 * holest;
    console.log(Y);
    
    let conclusion;

    if (Y >= 0.5375) {
        conclusion = "Высокий риск развития СРК. Требуется назначить дополнительно к стандартной этиотропной и патогенетической терапии Закофальк по 1 таблетке 3 раза в сутки в течение 30 дней";
    } 
    else {
        conclusion = "Низкий риск развития СРК. Требуется провести стандартную этиотропную и патогенетическую терапию без назначения Закофалька";
    }

    let resultModal = document.getElementById("modal__body");
    resultModal.innerText = conclusion;

    fadeIn(modal,500);
}

document
    .querySelector(".modal__btn-close")
    .addEventListener("click", () => fadeOut(modal,500));
document
    .querySelector(".close")
    .addEventListener("click", () => fadeOut(modal,500));
