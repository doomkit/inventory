import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <nav
      class="navbar is-transparent"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a class="navbar-item" routerLink="/dashboard">
          <img [attr.src]="'/assets/img/logo.png'" width="112" height="28" />
        </a>

        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          (click)="toggleMenu()"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        class="navbar-menu"
        [ngClass]="{
          'is-active': showMenu
        }"
      >
        <div class="navbar-start">
          <a
            class="navbar-item"
            [routerLink]="['/dashboard']"
            routerLinkActive="is-active"
            [routerLinkActiveOptions]="{ exact: true }"
          >
            Home
          </a>

          <a
            class="navbar-item"
            [routerLink]="'stock'"
            routerLinkActive="is-active"
            [routerLinkActiveOptions]="{ exact: false }"
          >
            Stocks
          </a>

          <a
            class="navbar-item"
            routerLink="/dashboard"
            routerLinkActive="is-active"
            [routerLinkActiveOptions]="{ exact: true }"
          >
            Orders
          </a>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              More
            </a>

            <div class="navbar-dropdown is-boxed">
              <a class="navbar-item" routerLink="about">
                About
              </a>
              <a
                class="navbar-item"
                href="https://github.com/doomkit/inventory"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source code
              </a>
              <hr class="navbar-divider" />
              <a
                class="navbar-item"
                href="https://github.com/doomkit/inventory/issues/new"
                target="_blank"
                rel="noopener noreferrer"
              >
                Report an issue
              </a>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              <span *ngIf="username">{{ username }}'s</span>&nbsp;Profile
            </a>

            <div class="navbar-dropdown is-right is-boxed">
              <a class="navbar-item">
                Details
              </a>
              <hr class="navbar-divider" />
              <a class="navbar-item logout" (click)="onLogoutClick()">
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  `,
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Input() username: string;
  @Output() logout = new EventEmitter<boolean>();

  showMenu = false;

  onLogoutClick(): void {
    this.logout.emit();
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}
