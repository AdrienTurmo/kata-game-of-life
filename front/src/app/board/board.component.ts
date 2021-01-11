import {Component, OnInit} from '@angular/core';
import {BoardService} from './board.service';
import {Board} from './Board';
import {Cell} from './Cell';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  board: Board;
  colIndexes: number[];
  rowIndexes: number[];

  constructor(
    private boardService: BoardService) {
    this.colIndexes = Array(100).fill(0).map((x, i) => i);
    this.rowIndexes = Array(100).fill(0).map((x, i) => i);
  }

  ngOnInit(): void {
    this.boardService.getNewBoard().subscribe(board =>
      this.board = board
    );
  }

  toggleCellStatus(cell: Cell): void {
    cell.alive = !cell.alive;
  }

  updateBoard(): void {
    this.boardService.updateBoard(this.board).subscribe(board =>
      this.board = board
    );
  }
}
