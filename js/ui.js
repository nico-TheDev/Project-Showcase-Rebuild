class UI {
    // DOM Elements
    constructor(){
       this.changeTheme = false;
    }

    //Render Cards to the DOM
    renderAllCards(challenges){
        domElements.showcase.innerHTML = '';
        
        challenges.forEach(challenge =>{
            let cardTheme = this.changeTheme ? 'lightTheme' : '';
            const markup = `
            <div class="card" data-level='${challenge.level}' data-name='${challenge.title}'>
                <div class="card__cover">
                    <a target='_blank' href="${challenge.demo_link}"><img src="${challenge.img}" alt="" class="card__img"></a>
                </div>
                <div class="card__text ${cardTheme}">
                    <h2 class="card__title">${challenge.title}</h2>
                    <p class="card__level">${challenge.level}</p>
                    <div class="card__links">
                        <a target='_blank' href="${challenge.demo_link}" class="card__link"><i class="fas fa-globe"></i></a>
                        <a target='_blank' href="${challenge.repo_link}" class="card__link"><i class="fab fa-github"></i></a>
                    </div>
                </div>
            </div>
            `;
            domElements.showcase.insertAdjacentHTML("beforeend", markup); 
        });
        
    }
    
    lightTheme(){
        this.changeTheme = !this.changeTheme;
        domElements.themeBtnSwitch.classList.toggle('moveSwitch');
        domElements.body.classList.toggle('lightTheme');
    }
    
}