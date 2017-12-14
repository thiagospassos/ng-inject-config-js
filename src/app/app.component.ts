import { Component, Inject } from '@angular/core';
import { API_BASE_URL } from './services/config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(@Inject(API_BASE_URL) public baseUrl?: string) {
  }
}
