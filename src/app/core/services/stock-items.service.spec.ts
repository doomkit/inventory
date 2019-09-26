/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StockItemsService } from './stock-items.service';

describe('Service: StockItems', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StockItemsService]
    });
  });

  it('should ...', inject([StockItemsService], (service: StockItemsService) => {
    expect(service).toBeTruthy();
  }));
});
