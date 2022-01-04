import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dateToday: number = Date.now();
  customDateTime = "Tue Oct 28 2025 23:28:00 GMT+0800";
}
