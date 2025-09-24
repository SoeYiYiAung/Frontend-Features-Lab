import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SendEmailService {

  constructor() { }

   getAppVersion(): Promise<any> {
    return new Promise((resolve, reject) => {
      if (window && (window as any).getAppVersion) {
        (window as any).getAppVersion((response: any) => {
          resolve(response);
        });
      } else {
        reject('getAppVersion API not available');
      }
    });
  }
}
