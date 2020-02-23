import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  @Input() products: Product[];
  total: number = 0;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    console.log('los prods obtenidos::', this.products);
    this.products.forEach((p: Product) => this.total += p.price);
  }

  buy(products: Product[]) {
    this.activeModal.close(true);
  }

}
