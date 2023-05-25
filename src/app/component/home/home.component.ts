import { Component } from '@angular/core';
import { Router } from '@angular/router';
import 'hammerjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  details: any[] = [
    { id: 11, details: 'Flexible rentals', details2: 'Cancel or change most bookings for free up to 48 hours',details3: 'male' },
    { id: 12, details: 'No hidden fees',details2: 'Know exactly what you are paying',details3: 'female' },
    { id: 13, details: 'Price Match Guarantee',details2: 'Found the same deal for less? We will match the price.',details3: 'female' }
  ];

  constructor(
    private router: Router,
  ) {

  }
  ngOnInit(): void {
  }

  hasRoute(route: string) {
    return this.router.url.includes(route);
  }
}
