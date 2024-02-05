const body = document.querySelector('body');
const h1 = document.querySelector('.container h1');
const settings = document.querySelector('.settings');
const gearIcon = document.querySelector('.settings i');
const inputTag = document.querySelector('#query');


window.addEventListener('DOMContentLoaded', () => {
    inputTag.value = "";
})


let theme = 'white';

settings.addEventListener('click', () => {
    if (theme === 'white') {
        setDarkMode();
    } else {
        setWhiteMode();
    }
});

function setDarkMode() {
    body.style.backgroundColor = "#2b2a33";
    gearIcon.style.color = "#fff";
    h1.style.color = "#fff";

    inputTag.style.color = '#fff';
    inputTag.style.backgroundColor = '#42414d';
    inputTag.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.15)';

    settings.classList.add('dark-mode');
    theme = 'black';
}

function setWhiteMode() {
    body.style.backgroundColor = "white";
    gearIcon.style.color = "#20123a";
    h1.style.color = "#20123a";

    inputTag.style.color = '#20123a';
    inputTag.style.backgroundColor = '#fff';
    inputTag.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.15)';

    settings.classList.remove('dark-mode');
    theme = 'white';
}

inputTag.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        if (inputTag.value !== "") {
            let query = inputTag.value.trim();
            inputTag.value = "";

            localStorage.setItem('userQuery', query);
            window.location.href = 'search.html';
        }
    }
});

