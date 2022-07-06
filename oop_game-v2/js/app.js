/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


const startButton = document.getElementById('btn__reset');
//Creating a new instance of the Game Class 
let game = new Game();
// adding an eventlistener to start a new game from the Game Class when the start button is clicked.
startButton.addEventListener('click', (e) => {

    game.startGame();
    // game.phrases.forEach((phrase, index) => {
    // console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
       
    // });
    // const logPhrase = (phrase) => {
    //     console.log(`Phrase - phrase: `, phrase.phrase);
    //     };
    //     const game = new Game();
    //     logPhrase(game.getRandomPhrase());
    //     logPhrase(game.getRandomPhrase());
    //     logPhrase(game.getRandomPhrase());
    //     logPhrase(game.getRandomPhrase());
    //     logPhrase(game.getRandomPhrase());

    // const game = new Game();
    // game.getRandomPhrase().addPhraseToDisplay();
})

const qDiv = document.getElementById('qwerty');
 qDiv.addEventListener('click', (e) => {
    if(e.target.tagName === 'BUTTON'){
        game.handleInteraction(e.target);
    }
})
