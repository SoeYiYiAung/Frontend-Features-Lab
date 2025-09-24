import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AddTutorialService {

  constructor(private http: HttpClient, private router: Router) { }

  login(url: string, j: any) {
    sessionStorage.removeItem('token'); // Remove old session
    document.cookie = "userToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC"; // Remove cookie
  
    const params = JSON.stringify(j);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  
    return this.http.post(url, params, { headers });
  }
}
