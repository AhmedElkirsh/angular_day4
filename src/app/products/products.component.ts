import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  products = [
    {
      id: 1,
      title: 'Watch 1',
      imagePath: './images/1.jpg',
      price: 100,
      discount: 10,
      isDiscounted: false,
    },
    {
      id: 2,
      title: 'Watch 2',
      imagePath: './images/2.png',
      price: 150,
      discount: 15,
      isDiscounted: false,
    },
    {
      id: 3,
      title: 'Watch 3',
      imagePath: './images/3.png',
      price: 200,
      discount: 20,
      isDiscounted: false,
    },
  ];

  applyDiscount(index: number) {
    this.products[index].isDiscounted = true;
  }

  deleteProduct(index: number) {
    this.products.splice(index, 1);
  }
}
