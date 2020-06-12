// OLD CODE BASE 

// HEADER SLIDER
const sliderContainer = document.querySelector(".header");
let slides = document.querySelectorAll(".slides");
const navBtn = document.querySelectorAll(".btnNav");
let showcase = document.querySelector('.showcase');
console.log(slides);

navBtn.forEach((btn, index) => {
    btn.addEventListener("click", (e) => {
        console.log(e.target);
        e.target.style.backgroundColor = "red";
        theSlide = document.querySelector(`.slide${index + 1}`);
        theSlide.style.transform = `translate(-${index * 100}%)`;

        if (getComputedStyle(theSlide).left > 0) {
            theSlide.style.left = 0;
        }
    });
});

// THEME
const themeBtn = document.querySelector(".themeBtn");
const themeBtnSwitch = document.querySelector(".themeBtn__switch");
const filterInput = document.querySelector(".search__filter");
let themeClass = false;

themeBtn.addEventListener("click",changeTheme);


function changeTheme(){
    const cardText = document.querySelectorAll(".card__text");
    console.log(changeTheme);
    themeBtn.classList.toggle("lightMode");
    themeBtnSwitch.classList.toggle("moveSwitch");
    cardText.forEach((current) => {
        current.classList.toggle("lightTheme");
    });
    document.querySelector("body").classList.toggle("lightTheme");
}

function addThemeClass(change){
    if(change) return 'lightTheme'
}
// SEARCH



async function searchCard() {
    const data = await getData();
    const cardTile = data.data;
    let searchInput = document.querySelector(".search__input").value;

    showcase.innerHTML = '';
    cardTile.forEach((currentCard) => {
        if (currentCard.title.toLowerCase().includes(searchInput.toLowerCase())) {
            renderCard(currentCard);
        }
    });
}

async function getData() {
    const data = await fetch(`./data.json`);
    const result = await data.json();
    return result;
}

async function renderAllCards() {
    const data = await getData();
    const challenges = data.data;
    console.log(challenges);

}
 function
async function filterCards(){
    const data = await getData();
    const cards = data.data;
    showcase.innerHTML = '';
    cards.forEach(card =>{
        if(card.level === filterInput.value){
            renderCard(card);
        }else if (filterInput.value === 'all'){
            renderAllCards();
        }
    });
}

window.addEventListener("DOMContentLoaded", renderAllCards);
document.querySelector(".search__input").addEventListener("keyup", searchCard);
filterInput.addEventListener("change", filterCards);
