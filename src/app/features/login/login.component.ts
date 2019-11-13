import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { AuthenticationService } from '@app/core/services';
import { first } from 'rxjs/operators';

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
            <form
              class="login--form"
              [formGroup]="loginForm"
              (ngSubmit)="onSubmit()"
            >
              <h1 class="login--title">{{ title }}</h1>
              <p class="login--subtitle">Sign in to your inventory account</p>
              <input
                type="text"
                class="input"
                formControlName="username"
                placeholder="username"
              />
              <input
                type="password"
                class="input"
                formControlName="password"
                placeholder="password"
              />
              <app-button
                [type]="'submit'"
                [text]="'Continue'"
                [disabled]="!loginForm.valid"
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
  loginForm: FormGroup;
  title = 'Welcome to Inventory!';
  error = ''; // TODO: display error message

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthenticationService
  ) {
    if (this.authService.currentUser) {
      this.router.navigate(['/dashboard']);
    }

    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', Validators.required]
    });

    // CONSIDER: return back to previous page before authorisation
    const fromUrl = this.route.snapshot.queryParams.from;
    if (fromUrl) {
      this.title = 'Welcome back!';
    }
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    this.authService
      .login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['/dashboard']);
        },
        error => {
          this.error = error;
        }
      );
  }
}
