import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IProduct } from '../../models/iproduct';
import { ICategory } from '../../models/icategory';
import { UsdToEgyPipe } from '../../Pipes/usd-to-egy.pipe';
import { ProductsComponent } from '../products/products.component';
import { ProductOrderedViewModel } from '../../ViewModels/product-ordered-view-model';
import { CreditCardFormatPipe } from '../../Pipes/credit-card-format.pipe';
@Component({
  selector: 'app-product-order',
  standalone: true,
  imports: [CommonModule,FormsModule,UsdToEgyPipe,ProductsComponent,CreditCardFormatPipe],
  templateUrl: './product-order.component.html',
  styleUrl: './product-order.component.css'
})
export class ProductOrderComponent {
  categories: ICategory[];

  //List of the viewModel ==> 
  productOrderList: ProductOrderedViewModel[] = [];

  send_selected_id: number = 0;
  total_money: number = 0;
  current_Date: Date | string = new Date();
  constructor() {
    this.update();
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

  update() {
    
    setInterval(() => {
      this.current_Date =new Date()
    },1000)
  }

  AddToCard(prod: ProductOrderedViewModel) {

    console.log(this.productOrderList)
    const product = this.productOrderList.find(p => p.id === prod.id);
    if (product != null)  { 
      product.count++;
      product.price = product.count * product.price
    } else {
      this.productOrderList.push(prod)
    }
      
    this.total_money += prod.price
    
  }

}
