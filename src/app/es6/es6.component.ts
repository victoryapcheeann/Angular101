import { Component, OnInit } from '@angular/core';
import { uppercase } from './formatter';

@Component({
  selector: 'app-es6',
  templateUrl: './es6.component.html',
  styleUrls: ['./es6.component.css']
})
export class ES6Component implements OnInit {
  constructor() { }

  ngOnInit() {
   //Example 1
    function shoppingList() {
      this.groceries = [];
    }

    shoppingList.prototype.addItem = function(item) {
      this.groceries = this.groceries.concat([item]);
    };

    shoppingList.prototype.removeItem = function(item) {
      this.groceries = this.groceries.filter(function(grocery){
        return item != grocery;
      })
    };

    var myList = new shoppingList();
    myList.addItem('Apple');
    myList.addItem('Orange');
    console.log(myList.groceries);
    myList.removeItem('Apple');
    console.log(myList.groceries);

    //Example 2
      class ShoppingList2 {
          groceries: string[];

          constructor() {
            this.groceries = [];
          }

          addItem(item) {
            this.groceries = [...this.groceries, item];
          }

          removee(item) {
            this.groceries = this.groceries.filter((grocery) => item != grocery)
          }
      }

      const myNewList = new ShoppingList2();

      myNewList.addItem('Pear');
      myNewList.addItem('Kiwi');
      console.log(myNewList)
    
    //Example 3
    let myName: string = "Victor"
    console.log(uppercase(myName));
  }
}


