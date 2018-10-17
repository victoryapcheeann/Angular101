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
  name2: string = 'Mary'
  name3: string = ''

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

  handleChange(value:string) {
    this.name2 = value
  }

  handleClick2(value: string) {
    console.log(value)
  }

  handleChange3(value:string) {
    this.name3 = value
  }
}
