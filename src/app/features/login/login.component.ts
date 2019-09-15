import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
              />
              <app-button
                [text]="'Continue'"
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
export class LoginComponent implements OnInit {
  title = 'Welcome to Inventory!';

  constructor(private route: ActivatedRoute) {
    const fromUrl = this.route.snapshot.queryParams.from;
    if (fromUrl) {
      this.title = 'Welcome back!';
    }
  }

  ngOnInit() {}

  onEnterPress(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.contnue();
    }
  }

  contnue() {
    alert('boom');
  }
}
