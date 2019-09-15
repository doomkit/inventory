import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button type="button" (click)="triggerClick()" disabled>
      {{ text }}
    </button>
  `,
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() text: string;
  @Output() trigger: EventEmitter<any> = new EventEmitter<any>();

  triggerClick() {
    this.trigger.emit();
  }
}
