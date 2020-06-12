class Data {
    constructor(){
    }

    async getData(){
        const response = await fetch('./data.json');
        const data = await response.json();
        
        return data.data;
    }

    filterData(challenges,filterValue){
        if (filterValue === 'all'){
            return challenges;
        }else{
            return challenges.filter(challenge => challenge.level === filterValue);
        }
    }

    searchCard(word,data) {
        //get the word and challenges
        return data.filter(challenge =>{
            const regex = new RegExp(word,'gi');
            return challenge.title.match(regex);
        });
    }
    
}