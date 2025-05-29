import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BookingService, Booking } from './booking.service';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent {
  formData: Booking = {
    name: '',
    email: '',
    datetime: '',
    service: '',
    notes: ''
  };

  services = ['Service 1', 'Service 2', 'Service 3'];

  bookings: Booking[] = [];

  constructor(private bookingService: BookingService) {}

  submitForm() {
    this.bookings.push({ ...this.formData });

    this.bookingService.sendBooking(this.formData).subscribe({
      next: response => console.log('Sent to company system:', response),
      error: err => console.error('Failed to send booking:', err),
    });

    this.resetForm();
  }

  resetForm() {
    this.formData = {
      name: '',
      email: '',
      datetime: '',
      service: '',
      notes: ''
    };
  }
}
