import { Component } from '@angular/core';
import { Iproduct } from 'src/app/models/iproduct';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products!:Iproduct[];

  constructor(){
    this.products = [
      {id :100, name:'Lenovo Thinkpad', price:100, quantity:1, imgURL:"https://picsum.photos/id/244/200/100", categoryID:1 },
      {id :200, name:'Apple MacBook', price:200, quantity:0, imgURL:"https://picsum.photos/id/200/200/100", categoryID:1 },
      {id :300, name:'Lenovo Tap 2', price:300, quantity:10, imgURL:"https://picsum.photos/id/230/200/100", categoryID:2 },
      {id :400, name:'Samsung Tab', price:400, quantity:2, imgURL:"https://picsum.photos/id/2/200/100", categoryID:2 },
      {id :500, name:'Samsung Note 10', price:500, quantity:0, imgURL:"https://picsum.photos/id/1000/200/100", categoryID:3 },
      {id :600, name:'Samsung S22 Utlra', price:600, quantity:1, imgURL:"https://picsum.photos/id/80/200/100", categoryID:1 },
    ];
  }
}
