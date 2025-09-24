import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(
      private route: ActivatedRoute,
      private router: Router
    ) {}
    
  title = 'Angular 17 Crud example';

  // ngOnInit(): void {
  //   // Load dashboard data if needed
  //   this.router.navigate(['/home']);

  // }

}

