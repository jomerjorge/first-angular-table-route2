import { Component, OnInit } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    title = 'Follow Tutorial';
    products = products;
  ngOnInit(): void {
  }

  share() {
    window.alert('You Shared An Item / This is a Test Message');
  }

}
