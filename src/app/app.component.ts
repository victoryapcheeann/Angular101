import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string
  number1: number = 1
  number2: number = 2
  isHappy: boolean = true
  constructor() {
    this.title = 'angular101'
  }
}
