import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  set username(username: string) {
    sessionStorage.setItem('username', username);
  }

  get username() {
    const username = sessionStorage.getItem('username');
    return username ? username : '';
  }
}
