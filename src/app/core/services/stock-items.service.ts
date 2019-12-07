import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { StockItem } from '@core/models';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class StockItemsService {
  constructor(private http: HttpClient) {}

  getStockItems(): Observable<StockItem[]> {
    return this.http
      .get<StockItem[]>(`${environment.BASE_URL}/stock-items`)
      .pipe(catchError(error => Observable.throw(error.json())));
  }

  createStockItem(payload: StockItem): Observable<StockItem> {
    return this.http
      .post<StockItem>(`${environment.BASE_URL}/stock-items`, payload)
      .pipe(catchError(error => Observable.throw(error.json())));
  }

  updateStockItem(payload: StockItem): Observable<StockItem> {
    return this.http
      .put<StockItem>(
        `${environment.BASE_URL}/stock-items/${payload.id}`,
        payload
      )
      .pipe(catchError(error => Observable.throw(error.json())));
  }

  deleteStockItem(payload: StockItem): Observable<StockItem> {
    return this.http
      .delete<StockItem>(`${environment.BASE_URL}/stock-items/${payload.id}`)
      .pipe(catchError(error => Observable.throw(error.json())));
  }

  addStockItemTOStock(payload: StockItem): Observable<StockItem> {
    return this.http
      .delete<StockItem>(`${environment.BASE_URL}/stock-items/${payload.id}`)
      .pipe(catchError(error => Observable.throw(error.json())));
  }
}
