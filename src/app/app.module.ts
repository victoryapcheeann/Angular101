import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ES6Component } from './es6/es6.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgClassStyleComponent } from './ng-classstyle/ng-classstyle.component';
import { PipesComponent } from './pipes/pipes.component';
import { SafenavigationComponent } from './safenavigation/safenavigation.component';

@NgModule({
  declarations: [
    AppComponent,
    ES6Component,
    NgForComponent,
    NgClassStyleComponent,
    PipesComponent,
    SafenavigationComponent
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
