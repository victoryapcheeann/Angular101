import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ES6Component } from './lesson-es6/es6.component';
import { NgForComponent } from './lesson-ng-for/ng-for.component';
import { NgClassStyleComponent } from './lesson-ng-classstyle/ng-classstyle.component';
import { PipesComponent } from './lesson-pipes/pipes.component';
import { SafenavigationComponent } from './lesson-safenavigation/safenavigation.component';

import { PassengerDashboardModule } from './project1-component/passenger-dashboard.module';

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
    FormsModule,
    PassengerDashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
