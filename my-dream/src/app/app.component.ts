import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  serverName = 'This server';
  items = ['Item 1', 'Item 2', 'Item 3'];
}
