import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  product: Product= new Product();
  productForm: FormGroup;

  constructor(private service: ProductService, private route:ActivatedRoute, private formBuilder:FormBuilder,private toastr:ToastrService) { }
  id:number;
  pdt: any;

  ngOnInit() {
    this.id=this.route.snapshot.params["id"];
    console.log(this.id);

    this.productForm=this.formBuilder.group({
      pid: null,
      pname: [Validators.compose([Validators.required])],
      pdate: [Validators.compose([Validators.required])],
      pdesc: [Validators.compose([Validators.required])],
      price: [Validators.compose([Validators.required])]

    });

    this.service.getProduct(this.id).subscribe(res=>{
      this.product=res;
      console.log(res)
    })   
  }

    get formControls(){
      return this.productForm.controls;
    
    }

    updateProduct()
    {
      //this.product.pid=this.id;
      this.product.pid=this.productForm.controls.pid.value;
      this.product.pname=this.productForm.controls.pname.value;
      this.product.pdesc=this.productForm.controls.pdesc.value;
      this.product.pdate=this.productForm.controls.pdate.value;
      this.product.price=this.productForm.controls.price.value;
      this.service.putProduct(this.id,this.product).subscribe(res=>{
        this.toastr.success('Product Updated');
      });

    }
  
}
