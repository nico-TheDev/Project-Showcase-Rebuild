// HEADER SLIDER
const sliderContainer = document.querySelector(".header");
let slides = document.querySelectorAll(".slides");
const navBtn = document.querySelectorAll(".btnNav");
let showcase = document.querySelector('.showcase');
console.log(slides);

slides.forEach((item, index) => {
    console.log(item);
    item.style.left = `${index * 100}%`;
});

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

themeBtn.addEventListener("click", () => {
    const cardText = document.querySelectorAll(".card__text");

    themeBtn.classList.toggle("lightMode");
    themeBtnSwitch.classList.toggle("moveSwitch");
    cardText.forEach((current) => {
        current.classList.toggle("lightTheme");
    });
    document.querySelector("body").classList.toggle("lightTheme");
});

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
    challenges.forEach(data =>{
        renderCard(data);
    });
}

async function renderCard(challenge){
    const markup = `
    <div class="card" data-level='${challenge.level}' data-name='${challenge.title}'>
        <div class="card__cover">
            <a target='_blank' href="${challenge.demo_link}"><img src="${challenge.img}" alt="" class="card__img"></a>
        </div>
        <div class="card__text">
            <h2 class="card__title">${challenge.title}</h2>
            <p class="card__level">${challenge.level}</p>
            <div class="card__links">
                <a target='_blank' href="${challenge.demo_link}" class="card__link"><i class="fas fa-globe"></i></a>
                <a target='_blank' href="${challenge.repo_link}" class="card__link"><i class="fab fa-github"></i></a>
            </div>
        </div>
    </div>
    `;

    showcase.insertAdjacentHTML("beforeend", markup);

}

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
