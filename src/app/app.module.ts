import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/Forms';

import { AppComponent } from './app.component';
import { ES6Component } from './es6/es6.component';

@NgModule({
  declarations: [
    AppComponent,
    ES6Component
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
