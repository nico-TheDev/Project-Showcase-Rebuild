// INITIALIZE CLASSES
const data = new Data();
const ui = new UI();

// ON LOAD
document.addEventListener("DOMContentLoaded", () => {
    data.getData().then((challenges) => {
        ui.renderAllCards(challenges);
    });
});

function searchForChallenge() {
    const searchString = this.value;

    data.getData().then((challenges) => {
        if (searchString !== "") {
            const filteredChallenges = data.searchCard(
                searchString,
                challenges
            );
            ui.renderAllCards(filteredChallenges);
        } else {
            ui.renderAllCards(challenges);
        }
    });
}

function filterChallenges(filterValue) {
    data.getData()
        .then((challenges) => {
            const filteredChallenges = data.filterData(challenges, filterValue);

            ui.renderAllCards(filteredChallenges);
        })
        .catch((err) => console.log(err));
}

// Search EVENT => KEYUP EVENT
domElements.searchInput.addEventListener("keyup", searchForChallenge);

//Filter Event => CHANGE
domElements.filterInput.addEventListener("change", function(){
    filterChallenges(this.value);
});
