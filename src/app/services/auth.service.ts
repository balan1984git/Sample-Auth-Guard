import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  constructor() {}

  getLoginStatus() {
    const userDetails = JSON.parse(localStorage.getItem('userDetails'));
    const users = JSON.parse(localStorage.getItem('users'));
    users.find((data) => {
      if (
        data.userName.toLowerCase() == userDetails.userName.toLowerCase() &&
        data.password.toLowerCase() == userDetails.password.toLowerCase()
      ) {
        return true;
      }
    });
  }
}
