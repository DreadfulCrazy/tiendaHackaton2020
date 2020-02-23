import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  httpHeaders: HttpHeaders;
  apiUrl: string = environment.apiUrl;


  constructor(private http: HttpClient) {
    this.httpHeaders = new HttpHeaders();
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}`);
  }

  saveProduct(): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/product`);
  }

  deleteProduct(): void {
    this.http.delete<Product>(`${this.apiUrl}/product`);
  }

}
