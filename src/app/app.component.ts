import { Component } from '@angular/core';
import { BookingComponent } from './components/booking/booking.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BookingComponent],
  template: `
    <h1>{{ title }}</h1>
    <app-booking></app-booking>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Booking System';
}