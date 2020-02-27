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


  searchValue = '';
  sortName: string | null = null;
  sortValue: string | null = null;
  listOfFilterAddress = [{ text: 'In Stock', value: 'In Stock' }, { text: 'Sold Out', value: 'Sold Out' }];
  listOfSearchAddress: string[] = [];
  listOfData = products;
  listOfDisplayData = [...this.listOfData];

  reset(): void {
    this.searchValue = '';
    this.search();
  }

  sort(sortName: string, value: string): void {
    this.sortName = sortName;
    this.sortValue = value;
    this.search();
  }

  filterAddressChange(value: string[]): void {
    this.listOfSearchAddress = value;
    this.search();
  }

  search(): void {
    const filterFunc = (item: { id: number; name:string; desc:string; price:number; discount:string; status:string; }) => {
      return (
        (this.listOfSearchAddress.length
          ? this.listOfSearchAddress.some(status => item.status.indexOf(status) !== -1)
          : true) && item.name.indexOf(this.searchValue) !== -1
      );
    };

    const data = this.listOfData.filter((item: { id: number; name:string; desc:string;price:number; discount:string; status:string; }) => filterFunc(item));
    this.listOfDisplayData = data.sort((a, b) =>
      this.sortValue === 'ascend'
        ? a[this.sortName!] > b[this.sortName!]
          ? 1
          : -1
        : b[this.sortName!] > a[this.sortName!]
        ? 1
        : -1
    );
  }
  

  

}
