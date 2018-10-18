import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//container
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';

//stateless components
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';

@NgModule({
  declarations: [
    PassengerDashboardComponent, PassengerCountComponent, PassengerDetailComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PassengerDashboardComponent
  ]
})
export class PassengerDashboardModule {}