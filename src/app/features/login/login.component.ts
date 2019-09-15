import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from '@app/core/services';
import { AuthGuard } from '@app/core/auth/auth.guard';

@Component({
  selector: 'app-login',
  template: `
    <div class="page">
      <div class="box-wrapper container">
        <div class="login columns">
          <div class="column">
            <div class="login--image">
              <a
                href="https://www.freepik.com/free-photos-vectors/business"
                target="_blank"
                rel="noopener"
              >
                <span class="secondary-text">vector by macrovector</span>
              </a>
            </div>
          </div>
          <div class="column">
            <form class="login--form">
              <h1>{{ title }}</h1>
              <p>Enter your <span class="hint">username</span> to continue</p>
              <input
                type="text"
                class="input"
                (keydown)="onEnterPress($event)"
                [formControl]="username"
              />
              <app-button
                [text]="'Continue'"
                [disabled]="!username.valid"
                (trigger)="contnue()"
              ></app-button>
            </form>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: FormControl;
  title = 'Welcome to Inventory!';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private authService: AuthGuard
  ) {
    this.username = new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]);
    if (authService.canActivate) {
      this.username.setValue(userService.username);
      this.contnue();
    }
    const fromUrl = this.route.snapshot.queryParams.from;
    if (fromUrl) {
      this.title = 'Welcome back!';
    }
  }

  onEnterPress(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.contnue();
    }
  }

  contnue() {
    if (this.username.valid) {
      this.userService.username = this.username.value;
      this.router.navigate(['/dashboard']);
    }
  }
}
