import { Component, ViewChild } from '@angular/core';
import {
  CreateItemModalComponent,
  DeleteItemModalComponent
} from '../../components';
import { StockItem } from '@app/core/models';
import { Observable } from 'rxjs';
import { StockItemsService } from '@app/core/services';
import { first } from 'rxjs/operators';

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
                  (click)="onCreateModalOpen()"
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
                <button
                  class="button is-small is-dark"
                  (click)="onDeleteModalOpen()"
                >
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
    <app-create-item-modal (close)="onCreateModalClose($event)">
    </app-create-item-modal>
    <app-delete-item-modal
      [items]="stockItems$ | async"
      (close)="onDeleteModalClose($event)"
    >
    </app-delete-item-modal>
  `,
  styleUrls: ['./control-panel.component.scss']
})
export class ControlPanelComponent {
  @ViewChild(CreateItemModalComponent, { static: false })
  createModal: CreateItemModalComponent;
  @ViewChild(DeleteItemModalComponent, { static: false })
  deleteModal: DeleteItemModalComponent;
  stockItems$: Observable<StockItem[]>;

  constructor(private stockItemsService: StockItemsService) {}

  onCreateModalOpen() {
    this.createModal.openModal();
  }

  onDeleteModalOpen() {
    this.stockItems$ = this.stockItemsService.getItems();
    this.deleteModal.openModal();
  }

  onCreateModalClose(item: StockItem) {
    this.stockItemsService
      .createStockItem(item)
      .pipe(first())
      .subscribe(
        data => {},
        err => console.error(err)
      );
  }

  onDeleteModalClose(item: StockItem) {
    this.stockItemsService
      .deleteStockItem(item)
      .pipe(first())
      .subscribe(
        data => {},
        err => console.error(err)
      );
  }
}
