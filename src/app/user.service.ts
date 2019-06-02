import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private isUserLoggedIn;
  public username;

  constructor() {
     this.isUserLoggedIn = false;
  }
  setUserLoggedIn(name) {
  	this.isUserLoggedIn = true;
    this.username = name;
  }

  getUserLoggedIn() {
  	return this.isUserLoggedIn;
  }

}
