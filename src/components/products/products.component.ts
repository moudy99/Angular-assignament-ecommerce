import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild, input, viewChild } from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { ICategory } from '../../models/icategory';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'
import { LightboxDirective } from '../../directives/lightbox.directive';
import { UsdToEgyPipe } from '../../Pipes/usd-to-egy.pipe';
import { ProductOrderedViewModel } from '../../ViewModels/product-ordered-view-model';
import { filter } from 'rxjs';
import { InnerProductListServiceService } from '../../services/inner-product-list-service.service';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,FormsModule,LightboxDirective,UsdToEgyPipe,RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnChanges{

    /// THis is decorator Methods -> accept data from parent (Product-order Component)
  @Input() Selected_id: number | null = 0
  
  // !Event Defined --> 
  @Output() OnClickBuy: EventEmitter<ProductOrderedViewModel>

  total_money: number =0;
  Product_count: number = 0;
  /// Objects ==>

  FilteredProducts: IProduct[];
  constructor(private prodService:InnerProductListServiceService , private router:Router) {
    
    this.OnClickBuy = new EventEmitter<ProductOrderedViewModel>();


    this.FilteredProducts = prodService.products ;
  }

  // Call Back Function --> 
  addToCard(product_id: number) {
   
    const prod = this.prodService.getProductById( product_id);
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
  
    this.FilteredProducts = this.prodService.getCategoryProduct(Number(this.Selected_id))
    
    if (Number(this.Selected_id) == 0) {

      this.FilteredProducts = this.prodService.products
      console.log(this.FilteredProducts)
    }
  
  }

  
  ngOnChanges(changes: SimpleChanges): void {
    this.Filter()
    }
  
    showProductDetails(prodId:number) {
      this.router.navigate(['/details',prodId])
      }
}
