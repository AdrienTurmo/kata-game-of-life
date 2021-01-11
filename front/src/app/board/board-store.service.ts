import {Injectable} from '@angular/core';
import {Board} from './Board';

@Injectable({
  providedIn: 'root'
})
export class BoardStoreService {
  private board: Board;

  constructor() {
  }

  updateStore(board: Board): void {
    this.board = board;
  }

  getBoard(): Board {
    console.log(this.board);
    return this.board;
  }
}
