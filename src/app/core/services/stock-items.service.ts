import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { StockItem } from '@core/models';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class StockItemsService {
  constructor(private http: HttpClient) {}

  getItems(): Observable<StockItem[]> {
    return this.http
      .get<StockItem[]>(`${environment.BASE_URL}/secured/items`)
      .pipe(catchError(error => throwError(error)));
  }

  getStockItems(stockId: number): Observable<StockItem[]> {
    return this.http
      .get<StockItem[]>(
        `${environment.BASE_URL}/secured/stock/${stockId}/items`
      )
      .pipe(catchError(error => throwError(error)));
  }

  createStockItem(payload: StockItem): Observable<StockItem> {
    // TODO: select manufacturer from UI
    payload.manufacturer = {
      companyId: 2,
      companyType: 'manufacturer',
      companyName: 'IKEA',
      valid: true
    };
    return this.http
      .post<StockItem>(`${environment.BASE_URL}/secured/item`, payload)
      .pipe(catchError(error => throwError(error)));
  }

  // updateStockItem(payload: StockItem): Observable<StockItem> {
  //   return this.http
  //     .put<StockItem>(
  //       `${environment.BASE_URL}/stock-items/${payload.id}`,
  //       payload
  //     )
  //     .pipe(catchError(error => throwError(error)));
  // }

  deleteStockItem(payload: StockItem): Observable<StockItem> {
    return this.http
      .delete<StockItem>(
        `${environment.BASE_URL}/secured/item/${payload.itemId}`
      )
      .pipe(catchError(error => throwError(error)));
  }

  // addStockItemTOStock(payload: StockItem): Observable<StockItem> {
  //   return this.http
  //     .delete<StockItem>(`${environment.BASE_URL}/stock-items/${payload.id}`)
  //     .pipe(catchError(error => throwError(error)));
  // }
}
