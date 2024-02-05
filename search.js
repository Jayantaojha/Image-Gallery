const body = document.querySelector('body');
const inputSearch = document.querySelector('#search-query');
const heading = document.querySelector('#heading');
const imagesContainer = document.querySelector('.images-container');



// Retrieve the query from local storage
let userQuery = localStorage.getItem('userQuery');

// Use the userQuery as needed
(() => {
    inputSearch.value = userQuery;
    heading.innerText = userQuery;
    getPhoto();
})();


async function getPhoto() {
    try {

        let currentPage = 1;
        const apiKey = 'I2B_JfYcK7JZrt9SNjgcvCdq89zRMKrNyKIYeV4lN88';

        const URL = `https://api.unsplash.com/search/photos?page=${currentPage}&query=${userQuery}&client_id=${apiKey}`;

        let response = await fetch(URL);
        let data = await response.json();

        // Access the array of photos in the results property
        const photos = data.results;

        // Display URLs of the first 10 photos in the console
        for (let i = 0; i < Math.min(9, photos.length); i++) {
            console.log('Photo URL:', photos[i].urls.full);
            setPhoto(photos[i].urls.full);
        }
        
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}


function setPhoto(imageURL) {
    let div = document.createElement('div');
    div.classList.add('images');
    div.style.backgroundImage = `url(${imageURL})`;
    div.style.backgroundSize = 'cover';
    // div.innerHTML = `<img
    // src="${imageURL}">`

    imagesContainer.appendChild(div);

}