const body = document.querySelector('body');
const h1 = document.querySelector('.container h1');
const menu = document.querySelector('.menu');
const menuIcon = document.querySelector('.menu i');
const inputTag = document.querySelector('#query');

const menuDiv = document.createElement('div');

window.addEventListener('DOMContentLoaded', () => {
    inputTag.value = "";
})

let counter = 0;

menu.addEventListener('click', () => {
    if (counter === 0) {
        openMenu();
        body.appendChild(menuDiv);
        menu.innerHTML = `<i class="fa-solid fa-xmark"></i>`;

        counter = 1;

        let modePara = document.querySelector('#mode-Change');
        console.log(modePara);
        modePara.addEventListener('click', () => {
            if(modePara.innerText === 'Dark Mode'){
                setDarkMode();
                modePara.innerText = "White Mode";
            }
            else{
                setWhiteMode();
                modePara.innerText = "Dark Mode";
            }
        })
       

    } else {
        body.removeChild(menuDiv);
        menu.innerHTML = `<i class="fa-solid fa-bars"></i>`;

        counter = 0;

    }
});

function setDarkMode() {
    body.style.backgroundColor = "#2b2a33";
    menuIcon.style.color = "#fff";
    h1.style.color = "#fff";

    inputTag.style.color = '#fff';
    inputTag.style.backgroundColor = '#42414d';
    inputTag.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.15)';

}

function setWhiteMode() {
    body.style.backgroundColor = "white";
    menuIcon.style.color = "#20123a";
    h1.style.color = "#20123a";

    inputTag.style.color = '#20123a';
    inputTag.style.backgroundColor = '#fff';
    inputTag.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.15)';

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



// for nevigation menu
function openMenu() {

    menuDiv.style.position = 'absolute';
    menuDiv.style.color = 'white';
    menuDiv.style.backgroundColor = 'black';
    menuDiv.style.paddingLeft = '16px';
    menuDiv.style.top = '50px';
    menuDiv.style.right = '20px';

    if(screen.width < 600){
        menuDiv.style.width = "35vw";
    }
    else{
        menuDiv.style.width = "15vw";
    }

    menuDiv.style.height = "24vh";
    menuDiv.style.display = 'flex';
    menuDiv.style.flexDirection = 'column';
    menuDiv.style.justifyContent = 'space-around';
    menuDiv.style.alignItems = 'start';
    menuDiv.style.borderRadius = '6px';
    menuDiv.style.fontSize = '16px';
    menuDiv.style.fontFamily = 'system-ui, -apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, sans-serif';

    menuDiv.innerHTML = `
                <p id="mode-Change" style="cursor: pointer;">Dark Mode</p>
                <a href='about.html'  style="text-decoration: none; color: white;">About</a>
                <a href='contact.html' style="text-decoration: none; color: white;">Contact</a>
                `;

}
