import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '@env/environment';
import { User } from '@core/models';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser$: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(sessionStorage.getItem('currentUser'))
    );
    this.currentUser$ = this.currentUserSubject.asObservable();
  }

  public get currentUser(): User {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    return this.http
      .post<any>(`${environment.BASE_URL}/public/authenticate`, {
        username,
        password
      })
      .pipe(
        map(user => {
          sessionStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          return user;
        })
      );
  }

  logout() {
    sessionStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
