import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StockItemCategory, StockItem } from '@app/core/models';

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
                <ng-container *ngFor="let category of categories">
                  <span
                    class="tag is-primary is-medium"
                    [ngClass]="{ 'is-light': category !== selectedCategory }"
                    (click)="selectCategory(category)"
                  >
                    {{ category }}
                  </span>
                </ng-container>
              </div>
            </div>
          </form>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-small" (click)="closeModal(true)">
            Cancel
          </button>
          <button
            class="button is-small is-link"
            [ngClass]="{ 'is-loading': loading }"
            (click)="closeModal(false)"
            [disabled]="!createForm.valid"
          >
            Create
          </button>
        </footer>
      </div>
    </div>
  `,
  styleUrls: ['./create-item-modal.component.scss']
})
export class CreateItemModalComponent {
  @Output() close: EventEmitter<StockItem | null> = new EventEmitter();
  opened: boolean = false;
  createForm: FormGroup;
  controls: string[] = [];
  categories: string[] = [];
  selectedCategory: string;
  loading = false;

  constructor(private fb: FormBuilder) {
    for (let category in StockItemCategory) {
      this.categories = [...this.categories, StockItemCategory[category]];
    }
    this.selectedCategory = this.categories ? this.categories[0] : null;
    this.createForm = this.initForm(fb);
    this.resetForm();
    for (let key in this.createForm.controls) {
      this.controls = [...this.controls, key];
    }
  }

  private initForm(fb: FormBuilder): FormGroup {
    return fb.group({
      description: ['', Validators.required],
      photo: ['', Validators.required],
      weight: ['', Validators.required],
      category: [{ value: '', disabled: true }, Validators.required]
    });
  }

  resetForm(): void {
    this.createForm.reset();
    let randomInt = max => {
      return Math.floor(Math.random() * Math.floor(max));
    };
    const photo = `https://picsum.photos/id/${randomInt(1000)}/200/200`;
    this.createForm.controls['photo'].setValue(photo);
    this.createForm.controls['weight'].setValue(randomInt(1000));
    this.createForm.controls['category'].setValue(this.selectedCategory);
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
    this.createForm.controls['category'].setValue(category);
  }

  public openModal(): void {
    this.opened = true;
  }

  closeModal(canceled: boolean): void {
    if (!canceled) {
      let item: StockItem = this.createForm.value;
      item.category = this.createForm.controls['category'].value;
      this.close.emit(item);
      this.loading = true;
      Object.keys(this.createForm.controls).forEach(key => {
        this.createForm.controls[key].disable();
      });
      setTimeout(() => {
        this.opened = false;
        this.loading = false;
        Object.keys(this.createForm.controls).forEach(key => {
          this.createForm.controls[key].enable();
        });
        this.resetForm();
      }, 1000);
    } else {
      this.opened = false;
      this.resetForm();
    }
  }
}
