import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild, viewChild } from '@angular/core';
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
export class ProductOrderComponent implements AfterViewInit {
  categories: ICategory[];
  // Test ViewCHild -> 
  // Here the ! mark gives the typescript an promise that this variable will not be null or undefined 
  @ViewChild("testViewChild") testViewChild!: ElementRef

  // Access the child component By the @ViewChild decorator -> 
  @ViewChild(ProductsComponent) prodComponent!:ProductsComponent
  

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

  // For the time --> 
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
  //// ! test the viewChild .. send template variable from childe to base ->
  ngAfterViewInit(): void {

    this.testViewChild.nativeElement.style.border = "2px solid  red"
    console.log(this.prodComponent)
  }
}
