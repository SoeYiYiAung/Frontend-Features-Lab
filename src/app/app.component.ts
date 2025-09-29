import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      public translate: TranslateService
    ) {
    translate.setDefaultLang('en');
      
    }
    
  title = 'Angular 17 Crud example';
  currentLang: string = 'en';

  // ngOnInit(): void {
  //   // Load dashboard data if needed
  //   this.router.navigate(['/home']);

  // }

  switchLanguage(lang: string) {
    this.currentLang = lang;
    this.translate.use(lang);
  }

}

