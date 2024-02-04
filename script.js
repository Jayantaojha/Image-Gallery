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
            console.log(query);
            getPhoto(query);
            inputTag.value = "";
        }
    }
});


async function getPhoto(query) {
    try {

        let currentPage = 1;
        const apiKey = 'I2B_JfYcK7JZrt9SNjgcvCdq89zRMKrNyKIYeV4lN88';

        const URL = `https://api.unsplash.com/search/photos?page=${currentPage}&query=${query}&client_id=${apiKey}`;

        let response = await fetch(URL);
        let data = await response.json();

        // Access the array of photos in the results property
        const photos = data.results;

        // Display URLs of the first 10 photos in the console
        for (let i = 0; i < Math.min(10, photos.length); i++) {
            console.log('Photo URL:', photos[i].urls.full);
        }

        // gallery.style.height = '500px';
        // gallery.style.backgroundImage = `url(${photos[0].urls.full})`
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
