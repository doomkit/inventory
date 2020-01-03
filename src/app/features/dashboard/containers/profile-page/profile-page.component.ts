import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '@app/core/models';
import { AuthenticationService } from '@app/core/services';

@Component({
  selector: 'app-profile-page',
  template: `
    <div class="section">
      <div *ngIf="user$ | async as user" class="container">
        <div class="card profile_card">
          <div class="card-image">
            <figure class="image is-2by1">
              <img [attr.src]="user?.photo" alt="profile image" />
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">{{ user.name + ' ' + user.surname }}</p>
                <p class="subtitle is-6">@{{ user.username }}</p>
              </div>
            </div>

            <div class="content">
              Role: <b>{{ user.type | lowercase }}</b> <br />
              Email: <b>{{ user.email }}</b> <br />
              <ng-container *ngIf="user.companyName">
                Company: <b>{{ user.companyName }}</b> <br />
              </ng-container>
              Last activity:
              <b>
                <time>{{
                  lastActivity | date: 'EEEE, dd MMMM yyyy HH:mm:ss'
                }}</time></b
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent {
  user$: Observable<User>;
  lastActivity: Date = new Date();

  constructor(private authService: AuthenticationService) {
    this.user$ = this.authService.currentUser$;
  }
}
