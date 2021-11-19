import { Component } from '@angular/core';

const calculateForTie: (board: String[]) => boolean = (board: String[]) => {
  let tie: boolean = true;
  board.forEach(cell => cell === '' ? tie = false : null);
  return tie;
}

const calculateWinner: (board: String[]) => String | null = (board: String[]) => {

  let player: null | String = null;

  const iterationList = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8],
  ]

  for ( let i = 0; i < iterationList.length; i++ ) {
    const combination = iterationList[i];
    const [firstCell, secondCell, thirdCell] = combination;  

    if ( 
      board[firstCell] !== '' &&
      board[firstCell] === board[secondCell] &&
      board[firstCell] === board[thirdCell] 
    ) {
      player = board[firstCell];
      break;
    }
  }

  return player;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appTitle: String = 'angular-learning';
  board: String[] = Array(9).fill('');
  currentPlayer: String = 'X';
  winner: String | null = null;
  tie: boolean = false;

  playerClicked(index: number, currentPlayer: String) {

    this.board[index] = currentPlayer;
    const winner: String | null = calculateWinner(this.board);
    if ( winner ) {
      this.winner = winner;
      return;
    }
    const gameIsTie = calculateForTie(this.board);
    if ( gameIsTie ) {
      this.tie = true;
      return;
    }

    this.currentPlayer = this.currentPlayer == 'X' ? 'O' : 'X';
  }

  resetGame() {
    this.board = Array(9).fill('');
    this.currentPlayer = 'X';
    this.winner = null;
  }
}
