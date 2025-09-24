import { Component } from '@angular/core';
import { Tutorial } from '../../models/tutorial.model';
import { TutorialService } from '../../services/tutorial.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { environment } from '../../../environments/environment';
import { AddTutorialService } from './add-tutorial.service';
// import { sha256 } from 'js-sha256';
import { SHA256 } from 'crypto-es/lib/sha256';

//Language
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css'],
  standalone: false
})
export class AddTutorialComponent {
   content: string = '';
    customOptions = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dots: true,
    nav: true
  };
  
  tutorial: Tutorial = {
    title: '',
    description: '',
    published: false
  };
  submitted = false;
  _url : any;
  username :any;
  password : any;

  stringA  ="appid=kp123456789987654321abcdefghijkl&merch_code=100001&merch_order_id=201811212009001&method=kbz.payment.precreate&nonce_str=845255910308564481&notify_url=http://test.com/payment/notify&timestamp=1536637503&total_amount=1000&trade_type=APPH5&trans_currency=MMK&version=1.0&key=192006250b4c09247ec02edce69f6a2d"
clause: any;

  constructor(private tutorialService: AddTutorialService, private translate: TranslateService
  ) {
    // Set default language
    // translate.setDefaultLang('en');
  }

  // saveTutorial(): void {
  //   const data = {
  //     title: this.tutorial.title,
  //     description: this.tutorial.description
  //   };

  //   this.tutorialService.login(data).subscribe({
  //     next: (res) => {
  //       console.log(res);
  //       this.submitted = true;
  //     },
  //     error: (e) => console.error(e)
  //   });
  // }

  newTutorial(): void {
    this.submitted = false;
    this.tutorial = {
      title: '',
      description: '',
      published: false
    };
  }

  directToDashboard(username: string, password: string) {
    console.log("directToDashboard", username, password);
    this._url = `${environment.apiUrl}service001/signin`;
  
    let profile = { "userID": username, "password": password};
  
    this.tutorialService.login(this._url, profile).subscribe({
      next: (data) => {
        console.log("response data", data);
        
      },
      error: (error) => {
        console.error("Login error:", error);
      },
      complete: () => {
        console.log("Login request completed.");
      }
    });
  }

  async sha256(message: string): Promise<string> {
    const msgBuffer = new TextEncoder().encode(message);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
  }
  

  ngOnInit() {
    this.sha256('Message to hash').then(hash => console.log("Message to hash",hash.toUpperCase()));

    // not recommand
    // console.log('Message to hash',sha256('Message to hash'));
    // console.log("hello hash",sha256('hello').toUpperCase());

    const hashData = SHA256('Message to hash').toString();
    console.log('Message to hash',hashData.toUpperCase())
    console.log('test to hash',SHA256(this.stringA).toString().toUpperCase())

  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
  }

}
