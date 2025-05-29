import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'; // Correct path


export interface Booking {
  name: string;
  email: string;
  datetime: string;
  service: string;
  notes?: string;
}

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  private apiUrl = environment.companyApiUrl; // Set this in environment.ts

  constructor(private http: HttpClient) {}

  sendBooking(booking: Booking): Observable<any> {
    // POST booking data to company system API endpoint
    return this.http.post(`${this.apiUrl}/bookings`, booking);
  }
}
