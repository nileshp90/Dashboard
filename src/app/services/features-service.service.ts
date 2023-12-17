import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeaturesServiceService {

  constructor(private http: HttpClient) { }

  fetchData(): Observable<any> {
    return this.http.get('https://1.api.fy23ey06.careers.ifelsecloud.com/');
  }

}
