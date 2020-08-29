import { Component } from '@angular/core';

@Component({
  selector: 'app-sew-construction',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sekhar Engineering Works Construction App';
  today: number = Date.now();
}
