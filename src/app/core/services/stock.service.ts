import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  /*
	*	Can be used later
	*

  getStockById(id: number): Observable<Stock[]> {
    return this.http
      .get<Stock[]>(`${environment.BASE_URL}/stocks/${id}`)
      .pipe(catchError(error => Observable.throw(error.json())));
	}
	*/
}
