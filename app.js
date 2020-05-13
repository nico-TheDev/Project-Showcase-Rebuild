// HEADER SLIDER
const sliderContainer = document.querySelector('.header');
let slides =  document.querySelectorAll('.slides');
const navBtn = document.querySelectorAll('.btnNav');

console.log(slides);

slides.forEach((item,index)=>{
    console.log(item);
    item.style.left = `${index * 100}%`;
});

navBtn.forEach((btn,index)=>{
    btn.addEventListener('click',e=>{
        console.log(e.target);
        e.target.style.backgroundColor = 'red';
        theSlide =document.querySelector(`.slide${index+1}`);
        theSlide.style.transform = `translate(-${index* 100}%)`

        if (getComputedStyle(theSlide).left > 0){
            theSlide.style.left = 0;
        }
    });
});

// THEME
const cardTile = document.querySelectorAll('.card');
const cardText = document.querySelectorAll('.card__text');
const themeBtn = document.querySelector('.themeBtn');
const themeBtnSwitch = document.querySelector('.themeBtn__switch');


themeBtn.addEventListener('click',()=>{
    themeBtn.classList.toggle('lightMode');
    themeBtnSwitch.classList.toggle('moveSwitch');
    cardText.forEach(current=>{
        current.classList.toggle('lightTheme');
    });
    document.querySelector('body').classList.toggle('lightTheme');
});

// SEARCH

let filterInput = document.querySelector('.search__filter');

filterInput.addEventListener('change',()=>{
    console.log(filterInput.value);
    cardTile.forEach(card=>{
        if (filterInput.value === 'all'){
            card.style.display = 'block';
        }
        else if (card.dataset.level === filterInput.value){
            card.style.display = 'block';
        }
        else{
            card.style.display = 'none';
        }
    });
});
document.querySelector('.search__input').addEventListener('keyup',searchCard);

function searchCard(){
    let searchInput = document.querySelector('.search__input').value;
    cardTile.forEach((currentCard,index)=>{
        if(currentCard.dataset.name.includes(searchInput)){
            currentCard.style.display = 'block';
        }
        else{
            currentCard.style.display = 'none';
        }
    });
};
