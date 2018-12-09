import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { HomeComponent } from '../components/home/home.component';
import { DetailsComponent } from '../components/details/details.component';
import { MessageService } from '../services/message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

//const params = new HttpParams().set('city', l).set('sort', SortOn);

@Injectable()
export class WeatherService {
  private API_URL =
    'http://api.apixu.com/v1/forecast.json?key=29d83fa2298a47d29bb121845161212&q=';
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`WeatherService: ${message}`);
  }

  getForecast(city: string, days: string) {
    let params = new HttpParams().set('city', city).set('days', days);
    return this.http.get(this.API_URL + city + '&' + days, { params }).pipe(
      tap(_ => this.log('fetched ' + city)),
      catchError(this.handleError('getForecast', []))
    );
  }
}
