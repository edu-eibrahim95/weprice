import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {Product} from "../../../Models/product";
import {ProductService} from "../../../Services/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {


    productSubs: Subscription;
    product : Product;
    constructor(private productsApi: ProductService, private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
        this.productSubs = this.productsApi.getProduct(this.route.params['value']['rule_id']).subscribe(res => {
            this.product = res['product'];
        });
    }

    onSubmit(f: NgForm) {
        let product = JSON.stringify(f.value);
        this.productSubs = this.productsApi.editProduct(this.product.id, product).subscribe(res => {
                if (res == 1 ){
                    this.router.navigate(['/products']);
                    location.reload();
                }
            },
            console.error
        );
    }


}
