import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FeaturesServiceService {

  constructor(private http: HttpClient) { }

  fetchData(): Observable<any> {
    return this.http.get('https://1.api.fy23ey06.careers.ifelsecloud.com/');
  }

  getBalance(): Observable<any> {
    return this.fetchData().pipe(map((data) => data.balance));
  }

  getMoneyStatistics(): Observable<any> {
    return this.fetchData().pipe(map((data) => data.money_statistics));
  }

  getTransactions(): Observable<any> {
    return this.fetchData().pipe(map((data) => data.transactions));
  }

}
