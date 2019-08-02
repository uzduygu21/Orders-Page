import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ManageOrdersService {

  constructor(private _http:HttpClient, private _authService:AuthService) { }

  getData(){
    return this._http.get("http://localhost:3000/orders");
  }
}
