import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inter } from './inter';

const restUrl = 'https://jsonplaceholder.typicode.com/posts';
 
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getSmartphone():Observable<Inter[]> {
    return this.http.get<Inter[]>(restUrl);
  }
}
