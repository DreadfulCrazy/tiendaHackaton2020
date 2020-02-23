import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product.model';
import { PRODUCTS } from 'src/app/mock/products.mock';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  products: Product[];
  quantity: number = 1;

  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
    this.getProductos();
  }
  

  getProductos(): void {
    this._productService.getProducts().subscribe((res: Product[]) => {
      this.products = PRODUCTS;
      console.log('tfd: ', this.products);
    }, err => this.products = PRODUCTS
    );
    this.products = PRODUCTS;
  }

}
