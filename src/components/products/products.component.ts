import { Component } from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { ICategory } from '../../models/icategory';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  products: IProduct[];
  categories: ICategory[];
  constructor() {
    this.products = [
      {
        id: 1,
        name: 'Laptop 1',
        price: 10000,
        description: 'Laptop Description',
        quantity: 10,
        imageUrl: 'https://fakeimg.pl/500',
        categoryId: 1
      },
      {
        id: 2,
        name: 'Laptop 2',
        price: 10000,
        description: 'Laptop Description',
        quantity: 0,
        imageUrl: 'https://fakeimg.pl/300',
        categoryId: 1
      },
      {
        id: 3,
        name: 'Laptop 3',
        price: 10000,
        description: 'Laptop Description',
        quantity: 10,
        imageUrl: 'https://fakeimg.pl/300',
        categoryId: 1
      },
      {
        id: 4,
        name: 'Tablet 1',
        price: 5000,
        description: 'Tablet Description',
        quantity: 5,
        imageUrl: 'https://fakeimg.pl/300',
        categoryId: 2
      },
      {
        id: 5,
        name: 'Tablet 2',
        price: 5000,
        description: 'Tablet Description',
        quantity: 0,
        imageUrl: 'https://fakeimg.pl/300',
        categoryId: 2
      },
      {
        id: 6,
        name: 'Tablet 3',
        price: 5000,
        description: 'Tablet Description',
        quantity: 5,
        imageUrl: 'https://fakeimg.pl/300',
        categoryId: 2
      },
      {
        id: 7,
        name: 'Mobile 1',
        price: 2000,
        description: 'Mobile Description',
        quantity: 8,
        imageUrl: 'https://fakeimg.pl/300',
        categoryId: 3
      },
      {
        id: 8,
        name: 'Mobile 2',
        price: 2500,
        description: 'Mobile Description',
        quantity: 6,
        imageUrl: 'https://fakeimg.pl/300',
        categoryId: 3
      },
      {
        id: 9,
        name: 'Mobile 3',
        price: 3000,
        description: 'Mobile Description',
        quantity: 7,
        imageUrl: 'https://fakeimg.pl/300',
        categoryId: 3
      },
      {
        id: 10,
        name: 'Mobile 4',
        price: 3500,
        description: 'Mobile Description',
        quantity: 0,
        imageUrl: 'https://fakeimg.pl/300',
        categoryId: 3
      }
    ];
    
    this.categories = [
      {
        id: 1,
        name: 'Laptops'
      },
      {
        id: 2,
        name: 'Tablets'
      },
      {
        id: 3,
        name: 'Mobiles'
      }
    ]
    
  }


  addToCard(productName:string) {
    alert(` ${productName} added to Card`)
    }

}
