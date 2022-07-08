/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game{
    constructor(missed, phrases, activePhrase){
        //Missed is indicating the starting value
        this.missed = 0;
        //phrases is holding the new list of phrases created.
        this.phrases = this.createNewPhrases();
        // activePhrase is starting it as null
        this.activePhrase = null;
    }
    createNewPhrases(){
        // list is holding array of quoted phrases
        const list = [
            'Hey There You',
            'Killing me Smalls',
            'What ya do',
            'coding is awesome'
        ]
        // holding the class phrase and storing quote as parameter
        const phrases = list.map(quote => new Phrase(quote));
        return phrases;
    }
    startGame(){
        const dis = document.querySelector('#overlay').style.display = 'none'
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
        // dis.classList.remove('win');
        // dis.classList.remove('lose');
    }
    getRandomPhrase(){
        // randomSelection selects a random phrases 
        const randomSelection = Math.floor(Math.random() * this.phrases.length)
        return this.phrases[randomSelection]
    }
    handleInteraction(button){
        //button parameter is disabled and set to true
        button.disabled = true;
        // making a variable to get the text content
        const clickKey = button.textContent;
        // making a variable to verify the active phrase and using checkletter method
        const verify = this.activePhrase.checkLetter(clickKey);
        // setting condition on verify to add css animation to what is selected
        if(verify){
            button.classList.add('chosen',  'bounce');
            this.activePhrase.showMatchedLetter(clickKey);
            const won = this.checkForWin();
            if(won){
                this.gameOver();
            }
        }
        // setting else if its not verify then it is wrong and to remove a life for users
        else if(!verify){
            button.classList.add('wrong', 'hinge');
            this.removeLife();
        }
    }

    // remove life method is tracking attempts made my the user
    removeLife(){
        const triesClass = document.querySelectorAll('.tries');
        console.log(triesClass)
        const tries = Array.from(triesClass);
        console.log(tries)
        const oneTry = tries[this.missed].firstElementChild;
        oneTry.src = 'images/lostHeart.png';
        this.missed +=1;
        console.log()
        if(this.missed === 5){
            this.gameOver();
        }
    }
    // This method is checking for letters being selected to win the game
    checkForWin(){
        let won = true;
        const letterClass = document.querySelectorAll('.letter');
        const checkPhrase = Array.from(letterClass);
        checkPhrase.forEach(letter => {
            if(letter.classList.contains('hide')){
                won = false;
            }
        })
        return won;
    }
    // game over method is checking the overylay id and checking if the user wins or lose and giving a message 
    gameOver(){
        const overlayID = document.getElementById('overlay');
        overlayID.style.display = 'inherit';
        const gameOverMessageID = document.getElementById('game-over-message');
        console.log(this.checkForWin());
        if(this.checkForWin()){
            gameOverMessageID.innerHTML = 'You Won!';
            overlayID.classList.remove('start');
            overlayID.classList.add('win');
        }else{
            gameOverMessageID.innerHTML = 'You Lose!';
            overlayID.classList.remove('start');
            overlayID.classList.add('lose');
        }
        // document.getElementById('btn__reset').addEventListener('click', (e)=> {
        //    e.target.location.reload();
        // })
        setTimeout(() => {
            location.reload();
            }, 2000);
    }
}

//setTimeout(() => {
//     location.reload();
// }, 3000)