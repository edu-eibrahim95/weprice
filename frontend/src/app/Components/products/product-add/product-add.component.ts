import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {Product} from "../../../Models/product";
import {ProductService} from "../../../Services/product.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {ProductClassifService} from "../../../Services/product-classif.service";
import {ProductClassif} from "../../../Models/product_classif";
import * as $ from 'jquery';

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
        $(document).ready(function () {
            let float_inputs = $(".float-input");
            float_inputs.each(function () { $(this).val(parseFloat($(this).val()).toFixed(2)); });
            float_inputs.on('change',function() {
                $(this).val(parseFloat($(this).val()).toFixed(2));
            });
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
