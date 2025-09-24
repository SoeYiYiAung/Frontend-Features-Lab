import { HttpClient } from '@angular/common/http';
import { Component, makeStateKey } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

declare global {
  interface Window {
    ma: any;
  }
}

import VConsole from 'vconsole';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  userName = 'John Doe';
  result: any = null;
  ma: any = null; // store the SDK object here

  functions = [
    { type: 'Premium Calculator', status: 'Active', expiry: '2025-02-28' },
    { type: 'Buy Now', status: 'Expired', expiry: '2024-04-10' },
    { type: 'My Policies', status: 'Active', expiry: '2025-02-28' },
    { type: 'Claim', status: 'Expired', expiry: '2024-04-10' },
  ];

  constructor(private route: ActivatedRoute, private router: Router,private http: HttpClient) {}

  ngOnInit(): void {
    new VConsole();
  }



  buyNow() {
    this.router.navigate(['/tcs']);
  }

  claimForm() {
    this.router.navigate(['/send-email']);
  }

  goDetails(type: number): void {
    this.router.navigate(['add']);
  }

}

