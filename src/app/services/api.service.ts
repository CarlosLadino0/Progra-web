import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const URL = "http://localhost:3000/products";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  deleteP(id: number) {
    return this.http.delete(`${URL}/${id}`)
  }

  getAllProducts(): Observable<any> {
    return this.http.get(URL);
  }

  createProduct(products: any) {
    return this.http.post(URL, products);
  }

  updateProduct(id: number, product: any) {
    return this.http.put(`${URL}/${id}`, product);
  }

  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error.message);
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}