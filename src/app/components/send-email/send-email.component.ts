import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SendEmailService } from './send-email.service';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrl: './send-email.component.css'
})
export class SendEmailComponent {
  contactForm: FormGroup;
  // ma = window as any;

  constructor(private fb: FormBuilder, private emailService: SendEmailService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      // Handle the submission logic (e.g., call API)
    }
  }

//   getAppVersion() {
//   // @ts-ignore
//   if (typeof getAppVersion !== 'undefined') {
//     // @ts-ignore
//     getAppVersion({
//       success: (res: any) => {
//         console.log("Version info:", res.version);
//       },
//       fail: (err: any) => {
//         console.error("Failed to get version:", err);
//       }
//     });
//   } else {
//     console.warn("getAppVersion API is not available – are you inside Macle?");
//   }
// }




  getVersion() {
    this.emailService.getAppVersion().then((res) => {
      console.log('App Version Callback:', res);
    }).catch((err) => {
      console.error('Error:', err);
    });
  }

  

}
