import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Board} from './Board';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor(
    private http: HttpClient) {
  }

  getNewBoard(): Observable<Board> {
    return this.http.get<Board>('/api/board/new');
  }

  updateBoard(board: Board): Observable<Board> {
    return this.http.post<Board>('/api/board/nextState', board);
  }
}
