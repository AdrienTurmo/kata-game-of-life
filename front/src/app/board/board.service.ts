import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Board} from './Board';
import {BoardStoreService} from './board-store.service';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor(
    private http: HttpClient,
    private boardStore: BoardStoreService) {
  }

  getNewBoard(): void {
    this.http.get<Board>('/api/board/new').subscribe(data =>
      this.boardStore.updateStore(data)
    );
  }
}
