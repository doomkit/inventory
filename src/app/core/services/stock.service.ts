import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Stock } from '@core/models';

import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  constructor(private http: HttpClient) {}

  getStocks(): Observable<Stock[]> {
    return this.http
      .get<Stock[]>(`${environment.BASE_URL}/secured/stocks`)
      .pipe(catchError(error => throwError(error)));
  }

  getStockById(id: number): Observable<Stock> {
    return this.http
      .get<Stock>(`${environment.BASE_URL}/secured/stocks/${id}`)
      .pipe(catchError(error => throwError(error)));
  }

  changeQuantity(stockId: number, itemId: number, quantity: number) {
    return this.http
      .patch(`${environment.BASE_URL}/secured/stock/${stockId}/item`, {
        itemId,
        quantity
      })
      .pipe(catchError(error => throwError(error)));
  }

  addItemToSotck(stockId: number, itemId: number) {
    return this.http
      .post(
        `${environment.BASE_URL}/secured/stock/${stockId}/item?itemId=${itemId}`,
        {}
      )
      .pipe(catchError(error => throwError(error)));
  }

  deleteItemFromSotck(stockId: number, itemId: number) {
    return this.http
      .delete(
        `${environment.BASE_URL}/secured/stock/${stockId}/item?itemId=${itemId}`
      )
      .pipe(catchError(error => throwError(error)));
  }
}
