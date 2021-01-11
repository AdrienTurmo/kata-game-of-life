import {Component, OnInit} from '@angular/core';
import {CallBackendService} from './call-backend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private backService: CallBackendService) {
  }

  title = 'front';
  ploup: string;

  ngOnInit(): void {
    this.backService.toto().subscribe(data => {
      this.ploup = data;
    });
  }


}
