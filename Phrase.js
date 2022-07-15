/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase{
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    }
// creating a method that displays the phrase on the game board

    addPhraseToDisplay(){
       let ul = document.getElementsByTagName('ul')[0];
        for(let i = 0; i < this.phrase.length; i++){
            let li = document.createElement('li');
            const reg =  /[a-z]/.test(this.phrase[i]);
            if(reg === true){
                li.classList.add('hide', 'letter', `${this.phrase[i]}`);
                li.textContent = `${this.phrase[i]}`;
            }else{
                li.textContent = ' ';
                li.classList.add('space')
            }
            ul.appendChild(li);
        }
    }
    // this method is checking that the phrase is including the letters being selected
    checkLetter(letter){
        const presentLetter = this.phrase.includes(letter);
        return presentLetter;
    }
    // this method is hiding the matched letter until user selects the right letter
    showMatchedLetter(letter){
        const letterClass = document.getElementsByClassName(letter);
       
        let matchSet = Array.from(letterClass);
      
        matchSet.forEach(match => {
            match.classList.remove('hide');
            match.classList.add('show');
            
        })
    }

    clearPhrase(){
            const phraseChild = document.querySelector('#phrase').firstElementChild;
            phraseChild.textContent = '';
            // phraseChild.textContent = getRandomPhrase();
            console.log(phraseChild);
        }
    }