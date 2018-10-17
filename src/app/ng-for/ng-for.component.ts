import { Component, OnInit } from '@angular/core';

interface Passenger {
  id: number,
  fullname: string,
  checkedIn: boolean
}

@Component({
  selector: 'app-ng-for',
  styleUrls: ['./ng-for.component.css'],
  template: `
  <div class="app">
    <h3>Airline Passengers</h3>
    <ul>
      <ng-template ngFor let-passenger let-i="index" [ngForOf]="passengers">
        <li>
          {{ i }}: {{ passenger.fullname }}
        </li>
      </ng-template>
    </ul>
    <h3>Airline Passengers</h3>
    <ul>
      <li *ngFor="let passenger of passengers; let i = index;">
        {{ i }}: {{ passenger.fullname }}
      </li>
    </ul>
  </div>
`
})
export class NgForComponent {
  passengers: Passenger[] = [{
    id: 1,
    fullname: 'Stephen',
    checkedIn: true
  }, {
    id: 2,
    fullname: 'Rose',
    checkedIn: false
  }, {
    id: 3,
    fullname: 'James',
    checkedIn: true
  }, {
    id: 4,
    fullname: 'Louise',
    checkedIn: true
  }, {
    id: 5,
    fullname: 'Tina',
    checkedIn: false
  }];
}
