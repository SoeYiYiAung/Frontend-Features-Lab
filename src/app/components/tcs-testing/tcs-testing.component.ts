import { Component } from '@angular/core';

@Component({
  selector: 'app-tcs-testing',
  templateUrl: './tcs-testing.component.html',
  styleUrls: ['./tcs-testing.component.css']
})
export class TcsTestingComponent {
  slides = [
    { id: 1, image: 'assets/img1.jpg' },
    { id: 2, image: 'assets/img2.webp' },
    { id: 3, image: 'assets/img3.png' }
  ];

  customOptions = {
    loop: true,
    autoplay: true,
    dots: false,  // <-- this controls the indicator dots
    nav: true,
    navText: ['‹', '›'],
    responsive: {
      0: { items: 1 },
      600: { items: 1 },
      940: { items: 1 }
    }
  };
}
