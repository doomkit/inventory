import { Component, ViewChild } from '@angular/core';
import { CreateItemModalComponent } from '../../components';
import { StockItem } from '@app/core/models';

@Component({
  selector: 'app-control-panel',
  template: `
    <div class="section">
      <div class="container">
        <div class="tile is-ancestor">
          <div class="tile is-4 is-vertical is-parent">
            <div class="tile is-child box">
              <p class="title">Create Item</p>
              <p>
                Create new item. After that you can add this item to any
                storage.
              </p>
              <div class="buttons is-right">
                <button
                  class="button is-small is-dark"
                  (click)="onCreateModalOpen($event)"
                >
                  create
                </button>
              </div>
            </div>
            <div class="tile is-child box">
              <p class="title">Delete Item</p>
              <p>
                This will remove item from all storages. You will not be able to
                add item to storages anymore.
              </p>
              <div class="buttons is-right">
                <button class="button is-small is-dark">
                  delete
                </button>
              </div>
            </div>
          </div>
          <div class="tile is-parent">
            <div class="tile is-child box">
              <p class="title">Three</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                semper diam at erat pulvinar, at pulvinar felis blandit.
                Vestibulum volutpat tellus diam, consequat gravida libero
                rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc
                dui porta orci, quis semper odio felis ut quam.
              </p>
              <p>
                Suspendisse varius ligula in molestie lacinia. Maecenas varius
                eget ligula a sagittis. Pellentesque interdum, nisl nec interdum
                maximus, augue diam porttitor lorem, et sollicitudin felis neque
                sit amet erat. Maecenas imperdiet felis nisi, fringilla luctus
                felis hendrerit sit amet. Aenean vitae gravida diam, finibus
                dignissim turpis. Sed eget varius ligula, at volutpat tortor.
              </p>
              <p>
                Integer sollicitudin, tortor a mattis commodo, velit urna
                rhoncus erat, vitae congue lectus dolor consequat libero. Donec
                leo ligula, maximus et pellentesque sed, gravida a metus. Cras
                ullamcorper a nunc ac porta. Aliquam ut aliquet lacus, quis
                faucibus libero. Quisque non semper leo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <app-create-item-modal
      (close)="onCreateModalClose($event)"
    ></app-create-item-modal>
  `,
  styleUrls: ['./control-panel.component.scss']
})
export class ControlPanelComponent {
  @ViewChild(CreateItemModalComponent, { static: false })
  createModal: CreateItemModalComponent;

  constructor() {}

  onCreateModalOpen(event) {
    this.createModal.openModal();
  }

  onCreateModalClose(item: StockItem) {
    // TODO: save item
    console.log(item);
  }
}
