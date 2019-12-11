import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-item-modal',
  template: `
    <div
      class="modal"
      [ngClass]="{ modal: true, 'is-active': opened, 'is-clipped': opened }"
    >
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Create new item</p>
          <button
            class="delete"
            aria-label="close"
            (click)="closeModal(true)"
          ></button>
        </header>
        <section class="modal-card-body">
          <form [formGroup]="createForm">
            <div class="field" *ngFor="let control of controls">
              <div class="control">
                <input
                  type="text"
                  class="input"
                  [formControlName]="control"
                  [attr.placeholder]="control"
                />
              </div>
            </div>
            <div class="field">
              <div class="control">
                <span class="tag is-primary is-light">Primary</span>
              </div>
            </div>
          </form>
        </section>
        <footer class="modal-card-foot">
          <button class="button" (click)="closeModal(true)">
            Cancel
          </button>
          <button class="button is-link" (click)="closeModal(false)">
            Create
          </button>
        </footer>
      </div>
    </div>
  `,
  styleUrls: ['./create-item-modal.component.scss']
})
export class CreateItemModalComponent {
  @Output() close: EventEmitter<any> = new EventEmitter();
  opened: boolean = false;
  createForm: FormGroup;
  controls: string[] = [];

  constructor(private fb: FormBuilder) {
    this.createForm = this.initForm(fb);
    for (let key in this.createForm.controls) {
      this.controls = [...this.controls, key];
    }
    console.log(this.controls);
  }

  private initForm(fb: FormBuilder): FormGroup {
    let randomInt = max => {
      return Math.floor(Math.random() * Math.floor(max));
    };
    return fb.group({
      Name: ['', Validators.required],
      Description: ['', Validators.required],
      Photo: [
        `https://picsum.photos/id/${randomInt(1000)}/200/200`,
        Validators.required
      ],
      Weight: [randomInt(1000), Validators.required],
      Category: [{ value: 'test', disabled: true }, Validators.required]
    });
  }

  public openModal() {
    this.opened = true;
  }

  closeModal(canceled: boolean) {
    this.opened = false;
    this.close.emit(true);
  }
}
