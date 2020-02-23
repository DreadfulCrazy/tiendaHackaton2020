import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product.model';
import { PRODUCTS } from 'src/app/mock/products.mock';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { CheckoutComponent } from 'src/app/modules/payment/checkout/checkout.component';
import * as _ from 'lodash';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  products: Product[];
  quantity: number = 1;
  term: string = "";
  page: number = 4;
  p: number = 1;
  showAlert: boolean = false;

  constructor(private _productService: ProductService,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getProductos();

  }


  getProductos(): void {
    // this._productService.getProducts().subscribe((res: Product[]) => {
    //   this.products = res;
    // }, () => this.products = PRODUCTS
    // );
    this.products = PRODUCTS;
  }

  goToCheckout(product: Product) {

    const productToCheckout: Product = {
      ...product,
    };
    product.quantity -= this.quantity;
    console.log('product to be shosen: ', product);
    console.log('quantity to be shosen: ', this.quantity);
    const checkoutModal: NgbModalRef = this.modalService.open(CheckoutComponent);
    checkoutModal.componentInstance.products = [productToCheckout];
    checkoutModal.result.then((saved: boolean) => {
      this.showAlert = saved;
    }).then(() => setTimeout(() => {
      this.showAlert = false;
    }, 400000));
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.products.filter((v: Product) => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1 || v.provider.toLowerCase().indexOf(term.toLowerCase()) > -1)
          .map((v) => `${v.name} - ${v.provider}`).slice(0, 10))
    )

}
