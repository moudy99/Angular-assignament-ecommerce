import { Injectable } from '@angular/core';
import { IProduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class InnerProductListServiceService {
  /// Objects ==>
    products: IProduct[];

  constructor() {
    

    
    this.products = [
      {
        id: 1,
        name: 'Laptop 1',
        price: 55555,
        description: 'Laptop Description',
        quantity: 10,
        imageUrl: 'https://fakeimg.pl/400/?text=Laptopd&font=lobster',
        categoryId: 1
      },
      {
        id: 2,
        name: 'Laptop 2',
        price: 3699,
        description: 'Laptop Description',
        quantity: 0,
        imageUrl: 'https://fakeimg.pl/400/?text=Laptopd&font=lobster',
        categoryId: 1
      },
      {
        id: 3,
        name: 'Laptop 3',
        price: 40000,
        description: 'Laptop Description',
        quantity: 10,
        imageUrl: 'https://fakeimg.pl/400/?text=Laptopd&font=lobster',
        categoryId: 1
      },
      {
        id: 4,
        name: 'Tablet 1',
        price: 7899,
        description: 'Tablet Description',
        quantity: 5,
        imageUrl: 'https://fakeimg.pl/400/?text=Tablet&font=lobster',
        categoryId: 2
      },
      {
        id: 5,
        name: 'Tablet 2',
        price: 9999,
        description: 'Tablet Description',
        quantity: 0,
        imageUrl: 'https://fakeimg.pl/400/?text=Tablet&font=lobster',
        categoryId: 2
      },
      {
        id: 6,
        name: 'Tablet 3',
        price: 5000,
        description: 'Tablet Description',
        quantity: 5,
        imageUrl: 'https://fakeimg.pl/400/?text=Tablet&font=lobster',
        categoryId: 2
      },
      {
        id: 7,
        name: 'Mobile 1',
        price: 2000,
        description: 'Mobile Description',
        quantity: 8,
        imageUrl: 'https://fakeimg.pl/400/?text=Mobile &font=lobster',
        categoryId: 3
      },
      {
        id: 8,
        name: 'Mobile 2',
        price: 2031,
        description: 'Mobile Description',
        quantity: 6,
        imageUrl: 'https://fakeimg.pl/400/?text=Mobile &font=lobster',
        categoryId: 3
      },
      {
        id: 9,
        name: 'Mobile 3',
        price: 3000,
        description: 'Mobile Description',
        quantity: 7,
        imageUrl: 'https://fakeimg.pl/400/?text=Mobile &font=lobster',
        categoryId: 3
      },
      {
        id: 10,
        name: 'Mobile 4',
        price: 3500,
        description: 'Mobile Description',
        quantity: 0,
        imageUrl: 'https://fakeimg.pl/400/?text=Mobile &font=lobster',
        categoryId: 3
      }
    ];
    
  }

  getAllProducts(): IProduct[]{
    
    return this.products;
  }

  getCategoryProduct(CatId:number): IProduct[]{
    return this.products.filter(p => p.categoryId === CatId)
  }

  getProductById(prodId: number): IProduct| null{
    let product = this.products.find(p => p.id === prodId)
    if (product != null) {
      return product;
    } else {
      return null;
    }
    
  }
}
