import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, input } from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { ICategory } from '../../models/icategory';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'
import { LightboxDirective } from '../../directives/lightbox.directive';
import { UsdToEgyPipe } from '../../Pipes/usd-to-egy.pipe';
import { ProductOrderedViewModel } from '../../ViewModels/product-ordered-view-model';
import { filter } from 'rxjs';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,FormsModule,LightboxDirective,UsdToEgyPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnChanges{
  /// Variables ==>
    /// THis is decorator Methods -> accept data from parent (Product-order Component)
  @Input() Selected_id: number | null = 0
  
  // !Event Defined --> 
  @Output() OnClickBuy: EventEmitter<ProductOrderedViewModel>

  total_money: number =0;
  Product_count: number = 0;
  /// Objects ==>
  products: IProduct[];

  FilteredProducts: IProduct[];
  constructor() {

    this.OnClickBuy = new EventEmitter<ProductOrderedViewModel>();

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
    

    this.FilteredProducts = this.products;
  }
  // Call Back Function --> 
  addToCard(product_id: number) {
   
    const prod = this.products.find(p => p.id === product_id);
    if (prod) {
      prod.quantity--;
      this.total_money += prod.price
        const productOrderedViewModel: ProductOrderedViewModel = {
          id: prod.id,
          name: prod.name,
          price: prod.price,
          imageUrl: prod.imageUrl,
          count: 1
      };
  
      this.OnClickBuy.emit(productOrderedViewModel)
    }


  }
 
   trackProductsById(index:number,prod:IProduct):number {
    return prod.id;
  }





  private Filter() {
  
    this.FilteredProducts = this.products.filter(p => p.categoryId === Number(this.Selected_id))
    
    if (Number(this.Selected_id) == 0) {

      this.FilteredProducts = this.products;
      console.log(this.FilteredProducts)
    }
  
  }

  
  ngOnChanges(changes: SimpleChanges): void {
    this.Filter()
    }
  

}
