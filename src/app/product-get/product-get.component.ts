import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';

@Component({
  selector: 'app-product-get',
  templateUrl: './product-get.component.html',
  styleUrls: ['./product-get.component.scss'],
  
})


export class ProductGetComponent implements OnInit {

  public popoverTitle: string = 'Popover title';
  public popoverMessage: string = 'Popover description';
  public confirmClicked: boolean = false;
  public cancelClicked: boolean = false;
  
  products: Observable<Product[]>;



  constructor(private productService: ProductService,
    private router: Router) { }

  ngOnInit() {
    this.products=this.productService.getProductList();
  }

  deleteProduct(id:number){
      this.productService.deletePdt(id).subscribe(data=>{
        console.log(data);
      })

      this.products=this.productService.getProductList();
      
    
  
  }

  


}
