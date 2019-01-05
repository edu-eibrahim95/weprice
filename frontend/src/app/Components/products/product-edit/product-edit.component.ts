import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {Product} from "../../../Models/product";
import {ProductService} from "../../../Services/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {ProductClassif} from "../../../Models/product_classif";
import {ProductClassifService} from "../../../Services/product-classif.service";

@Component({
    selector: 'app-product-edit',
    templateUrl: './product-edit.component.html',
    styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

    productClassifSubs: Subscription;
    productClassifs : ProductClassif[];
    productSubs: Subscription;
    product : Product;
    constructor(private productsApi: ProductService, private router: Router, private route: ActivatedRoute, private productClassifApi: ProductClassifService) { }

    ngOnInit() {
        this.productSubs = this.productsApi.getProduct(this.route.params['value']['rule_id']).subscribe(res => {
            this.product = res['product'];
        });
        this.productClassifSubs = this.productClassifApi.getProductClassifs().subscribe(res => {
            this.productClassifs = res['products_classifs'];
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
