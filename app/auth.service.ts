import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable , BehaviorSubject } from 'rxjs';
import { userLoginData } from './userLoginData'
import { Router } from '@angular/router'


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  savedUsers = new BehaviorSubject(null);

  constructor(private _HttpClient:HttpClient , private _Router:Router) { 
    
    if (localStorage.getItem('userData') != null) {
      this.savedUsers.next(JSON.parse( localStorage.getItem('userData') ));
    }
  }

  register(registerValue):Observable<any>{
    return this._HttpClient.post('https://routeegypt.herokuapp.com/signup', registerValue)
  }

  login(loginValue):Observable<any>{
    return this._HttpClient.post('https://routeegypt.herokuapp.com/signin', loginValue)
  }

  logOut(){
    this.savedUsers.next(null);
    localStorage.setItem('userData' , null);
    this._Router.navigate(['/login'])

  }

  saveLoginUser(first_name , last_name , email , token){
    let user = new userLoginData(first_name , last_name , email , token);
    localStorage.setItem('userData' , JSON.stringify( user ));
    this.savedUsers.next(user);
  }
}
