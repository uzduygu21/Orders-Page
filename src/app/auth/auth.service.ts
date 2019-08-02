import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  $authCheck= new BehaviorSubject(this.checkUserStatus());

  constructor(private _router:Router, private _http:HttpClient) { }

  login(credentials:any){
    this._http.post("http://localhost:3000/login",credentials).subscribe((data:any)=>{
      console.log(data); 
      if(data){
        window.localStorage.setItem("isLoggedIn",data.token);
        this.$authCheck.next(this.checkUserStatus());
        this._router.navigate(['/manageOrders']);
      }else{
        alert("Invalid credentials")
      }   
    })
  }

  register(credentials:any){
    this._http.post("http://localhost:3000/register",credentials).subscribe((data:any)=>{
      console.log(data);
      if(data){
        this._router.navigate(['/login']);}
    })
  }

  logout(){
    this._router.navigate(['/login']);
    window.localStorage.removeItem("isLoggedIn");
    this.$authCheck.next(this.checkUserStatus());
  }

  checkUserStatus(){
    return window.localStorage.getItem("isLoggedIn");
  }


}
