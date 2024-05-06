import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const URL= "https://api.escuelajs.co/api/v1/products"

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  getAllProducts(): Observable<any> {
    return this.http.get(URL);
  }
}