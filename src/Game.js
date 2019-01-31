 import Player from './Player.js';
 import data from './Data.js'

 class Game {
  constructor(currentRound = 1, activePlayer, roundWinner, gameWinner){
    this.currentRound = currentRound,
    this.activePlayer = activePlayer,
    this.roundWinner = roundWinner,
    this.gameWinner = gameWinner
  }

  startGame(players) {
    console.log('game started!');
    this.createPlayers(players);
    this.grabPuzzleBank()
  }

  createPlayers(players) {
    const playerOne = new Player(players[0], true);
    const playerTwo = new Player(players[1]);
    const playerThree = new Player(players[2]);
    console.log(playerOne);
  }

  randomizeNumberForArray() {
    let randomNumber = Math.floor(Math.random() * 96)
  }

  grabPuzzleBank() {
    let puzzleArrayOne = data.puzzles.one_word_answers.puzzle_bank
    let puzzleArrayTwo = data.puzzles.two_word_answers.puzzle_bank
    let puzzleArrayThree = data.puzzles.three_word_answers.puzzle_bank
    let puzzleArrayFour = data.puzzles.four_word_answers.puzzle_bank
    let puzzleBank = puzzleArrayOne.concat(puzzleArrayTwo, puzzleArrayThree, puzzleArrayFour)
    this.randomizeBank(puzzleBank);
  }

  randomizeBank(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      const randomIndex = Math.floor((Math.random() * (arr.length - i))) + i;
      [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
    }
    return arr;
  }


}

// if (typeof module !== 'undefined') {
//   module.exports = Game;
// }

export default Game;