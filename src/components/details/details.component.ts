import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { InnerProductListServiceService } from '../../services/inner-product-list-service.service';
import { IProduct } from '../../models/iproduct';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent  implements OnInit {

  //Product Object ==>
  product!: IProduct
  constructor(private activeRouter: ActivatedRoute, private productService: InnerProductListServiceService) {
    
  }
  ngOnInit(): void {
    // To get the id form the url parameter
      
    let ProdId =Number( this.activeRouter.snapshot.params['id'])


     let product = this.productService.getProductById(ProdId)
    if(product){
      this.product = product
    }

  }

}
