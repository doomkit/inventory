import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button [attr.type]="type" (click)="triggerClick()" [disabled]="disabled">
      {{ text }}
    </button>
  `,
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() type = 'text';
  @Input() text: string;
  @Input() disabled: boolean;
  @Output() trigger: EventEmitter<any> = new EventEmitter<any>();

  triggerClick() {
    this.trigger.emit();
  }
}
