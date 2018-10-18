import { Component, OnChanges, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-detail',
  styleUrls: ['passenger-detail.component.scss'],
  template: `
    <div>
      <span class="status" [class.checked-in]="detail.checkedIn"></span>
      <div *ngIf="editing">
        <input 
          type="text" 
          [value]="detail.fullname"
          (input)="onNameChange(name.value)"
          #name>
      </div>
      <div *ngIf="!editing">
        {{ detail.fullname }}
      </div>
      <div class="date">
        Check in date: 
        {{ detail.checkInDate ? (detail.checkInDate | date: 'yMMMMd' | uppercase) : 'Not checked in' }}
      </div>
      <div class="children">
        Children: {{ detail.children?.length || 0 }}
      </div>
      <button (click)="toggleEdit()">
        {{ editing ? 'Done' : 'Edit' }}
      </button>
      <button (click)="onRemove()">  <!--Step 1) Create the button-->
        Remove
      </button>
    </div>
  `
})
export class PassengerDetailComponent implements OnChanges, OnInit {

  @Input()
  detail: Passenger;

  @Output()
  edit: EventEmitter<any> = new EventEmitter();

    //Step 3) Output implementation - Link it to the parent compoenet
  @Output()
  remove: EventEmitter<any> = new EventEmitter();

  editing: boolean = false;
  
  constructor() {}

  ngOnChanges(changes) {
    if (changes.detail) {
      this.detail = Object.assign({}, changes.detail.currentValue);
    }
    console.log('ngOnChanges');
  }

  ngOnInit() {
    console.log('ngOnInit');
  }
  
  onNameChange(value: string) {
    this.detail.fullname = value;
  }
  
  toggleEdit() {
    if (this.editing) {
      this.edit.emit(this.detail);
    }
    this.editing = !this.editing;
  }

   //Step 2) onRemove Implementation
  onRemove() {
    this.remove.emit(this.detail);
  }
}