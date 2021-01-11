import {Component, OnInit} from '@angular/core';
import {BoardService} from './board.service';
import {Board} from './Board';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private backService: BoardService) {
  }

  board: Board;

  ngOnInit(): void {
    this.backService.getNewBoard().subscribe(data => {
      this.board = data;
    });
  }


}
