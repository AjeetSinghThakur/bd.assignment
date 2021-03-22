import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Product } from '@app/models/product';
import { map } from 'rxjs/operators';
import { HttpWrapperService } from '@app/shared/services';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productsUrl = 'api/products';

  constructor(private http: HttpWrapperService) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl);
  }

  createProduct(product: Product): Observable<Product> {
    product.id = null;
    return this.http.post<Product>(this.productsUrl, product);
  }

  deleteProduct(id: number): Observable<{}> {
    const url = `${this.productsUrl}/${id}`;
    return this.http.delete<Product>(url);
  }

  updateProduct(product: Product): Observable<Product> {
    const url = `${this.productsUrl}/${product.id}`;
    return this.http.put<Product>(url, product).pipe(map(() => product));
  }
}
