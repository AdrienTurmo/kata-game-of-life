import {Injectable} from '@angular/core';
import {Board} from './Board';

@Injectable({
  providedIn: 'root'
})
export class NextStateService {

  nextState(board: Board): Board {
    const length = board.board.length;
    const nextBoard: boolean[][] = [];
    for (let colIndex = 0; colIndex < length; colIndex++) {
      nextBoard[colIndex] = [];
      for (let rowIndex = 0; rowIndex < length; rowIndex++) {
        const aliveNeighbours = this.countAliveNeighbours(board, colIndex, rowIndex);
        nextBoard[colIndex][rowIndex] = this.nextCellState(board.board[colIndex][rowIndex], aliveNeighbours);
      }
    }
    return {board: nextBoard};
  }

  private nextCellState(cellIsAlive: boolean, aliveNeighbours: number): boolean {
    if (cellIsAlive) {
      return aliveNeighbours === 2 || aliveNeighbours === 3;
    } else {
      return aliveNeighbours === 3;
    }
  }

  private countAliveNeighbours(board: Board, colIndexCell: number, rowIndexCell: number): number {
    let aliveNeighbours = 0;
    for (let colIndex = colIndexCell - 1; colIndex <= colIndexCell + 1; colIndex++) {
      for (let rowIndex = rowIndexCell - 1; rowIndex <= rowIndexCell + 1; rowIndex++) {
        const insideBoard = colIndex >= 0 && rowIndex >= 0 && colIndex < board.board.length && rowIndex < board.board.length;
        aliveNeighbours += insideBoard && board.board[colIndex][rowIndex] ? 1 : 0;
      }
    }
    aliveNeighbours -= board.board[colIndexCell][rowIndexCell] ? 1 : 0;
    return aliveNeighbours;
  }
}
