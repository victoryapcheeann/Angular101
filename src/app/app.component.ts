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
  logo: string = '../favicon.ico'
  name: string = 'Victor'

  constructor() {
    this.title = 'angular101'
  }

  handleBlur(event: any) {
    this.name = event.target.value;
    console.log(event);
  }

  handleInput(event: any) {
    this.name = event.target.value;
  }

  handleClick() {
    this.name = "Johnny"
  }
}
