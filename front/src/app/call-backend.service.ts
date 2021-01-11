import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CallBackendService {

  constructor(private http: HttpClient) {
  }

  toto(): Observable<string> {
    return this.http.get('/api/toto', {responseType: 'text'});
  }
}
