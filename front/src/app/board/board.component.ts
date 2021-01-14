import {Component, OnInit} from '@angular/core';
import {Board} from './Board';
import {Cell} from './Cell';
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
  length = 100;

  constructor(
    private nextStateService: NextStateService) {
    this.colIndexes = Array(this.length).fill(0).map((x, i) => i);
    this.rowIndexes = Array(this.length).fill(0).map((x, i) => i);

    for (let colIndex = 0; colIndex < this.length; colIndex++) {
      this.board.board[colIndex] = [];
      for (let rawIndex = 0; rawIndex < this.length; rawIndex++) {
        this.board.board[colIndex][rawIndex] = {alive: false};
      }
    }

    console.log(this.board);
  }

  toggleCellStatus(cell: Cell): void {
    cell.alive = !cell.alive;
  }

  updateBoard(): void {
    this.board = this.nextStateService.nextState(this.board);
  }
}
