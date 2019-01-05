import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {Product} from "../../../Models/product";
import {ProductService} from "../../../Services/product.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {ProductClassifService} from "../../../Services/product-classif.service";
import {ProductClassif} from "../../../Models/product_classif";

@Component({
    selector: 'app-product-add',
    templateUrl: './product-add.component.html',
    styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
    productClassifSubs: Subscription;
    productClassifs : ProductClassif[];
    productsSubs: Subscription;
    products : Product[];

    constructor(private productApi : ProductService, private router: Router, private productClassifApi: ProductClassifService) { }

    ngOnInit() {
        this.productClassifSubs = this.productClassifApi.getProductClassifs().subscribe(res => {
            this.productClassifs = res['products_classifs'];
        });
    }

    onSubmit(f: NgForm) {
        let product = JSON.stringify(f.value);
        this.productsSubs = this.productApi.addProduct(product).subscribe(res => {
                if (res ==1 ){
                    this.router.navigate(['/products']);
                    location.reload();
                }
            },
            console.error
        );
    }


}
