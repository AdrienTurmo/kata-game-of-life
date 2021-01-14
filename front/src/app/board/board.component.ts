import {Component} from '@angular/core';
import {Board} from './Board';
import {NextStateService} from './next-state.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {
  board: Board = {board: []};
  colIndexes: number[];
  rowIndexes: number[];
  length = 50;

  constructor(
    private nextStateService: NextStateService) {
    this.colIndexes = Array(this.length).fill(0).map((x, i) => i);
    this.rowIndexes = Array(this.length).fill(0).map((x, i) => i);

    for (let colIndex = 0; colIndex < this.length; colIndex++) {
      this.board.board[colIndex] = [];

      for (let rowIndex = 0; rowIndex < this.length; rowIndex++) {
        this.board.board[colIndex][rowIndex] = false;
      }
    }

    console.log(this.board);
  }

  toggleCellStatus(colIndex: number, rowIndex: number): void {
    this.board.board[colIndex][rowIndex] = !this.board.board[colIndex][rowIndex];
  }

  updateBoard(): void {
    this.board = this.nextStateService.nextState(this.board);
  }

  async runBoard(): Promise<void> {
    for (let i = 0; i < 10; i++) {
      this.updateBoard();
      await this.delay(200);
    }
  }

  delay(ms: number): Promise<unknown> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
