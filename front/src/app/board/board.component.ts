import {Component, Input, OnInit} from '@angular/core';
import {Board} from './Board';
import {BoardService} from './board.service';
import {BoardStoreService} from './board-store.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  constructor(
    private boardService: BoardService,
    public boardStore: BoardStoreService) {
  }

  ngOnInit(): void {
    this.boardService.getNewBoard();
  }
}
