import {Injectable} from '@angular/core';
import {Board} from './Board';
import {Cell} from './Cell';

@Injectable({
  providedIn: 'root'
})
export class NextStateService {

  nextState(board: Board): Board {
    const length = board.board.length;
    const nextBoard: Cell[][] = [];
    for (let colIndex = 0; colIndex < length; colIndex++) {
      nextBoard[colIndex] = [];
      for (let rawIndex = 0; rawIndex < length; rawIndex++) {
        const aliveNeighbours = this.countAliveNeighbours(board, colIndex, rawIndex);
        nextBoard[colIndex][rawIndex] = this.nextCellState(board.board[colIndex][rawIndex], aliveNeighbours);
      }
    }
    return {board: nextBoard};
  }

  private nextCellState(cell: Cell, aliveNeighbours: number): Cell {
    if (cell.alive) {
      if (aliveNeighbours === 2 || aliveNeighbours === 3) {
        return {alive: true};
      } else {
        return {alive: false};
      }
    } else {
      if (aliveNeighbours === 3) {
        return {alive: true};
      } else {
        return {alive: false};
      }
    }
  }

  private countAliveNeighbours(board: Board, colIndexCell: number, rowIndexCell: number): number {
    let aliveNeighbours = 0;
    for (let colIndex = colIndexCell - 1; colIndex <= colIndexCell + 1; colIndex++) {
      for (let rawIndex = rowIndexCell - 1; rawIndex <= rowIndexCell + 1; rawIndex++) {
        const insideBoard = colIndex >= 0 && rawIndex >= 0 && colIndex < board.board.length && rawIndex < board.board.length;
        aliveNeighbours += insideBoard && board.board[colIndex][rawIndex].alive ? 1 : 0;
      }
    }
    aliveNeighbours -= board.board[colIndexCell][rowIndexCell].alive ? 1 : 0;
    return aliveNeighbours;
  }
}
