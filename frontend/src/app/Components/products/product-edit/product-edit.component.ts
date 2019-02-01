import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {Product} from "../../../Models/product";
import {ProductService} from "../../../Services/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {ProductClassif} from "../../../Models/product_classif";
import {ProductClassifService} from "../../../Services/product-classif.service";
import * as $ from 'jquery';

@Component({
    selector: 'app-product-edit',
    templateUrl: './product-edit.component.html',
    styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
    formChanged = false;
    productClassifSubs: Subscription;
    productClassifs : ProductClassif[];
    productSubs: Subscription;
    product : Product;
    constructor(private productsApi: ProductService, private router: Router, private route: ActivatedRoute, private productClassifApi: ProductClassifService) { }

    ngOnInit() {
        this.productSubs = this.productsApi.getProduct(this.route.params['value']['rule_id']).subscribe(res => {
            this.product = res['product'];
            let c = this;
            $(document).ready(function () {
                let float_inputs = $(".float-input");
                float_inputs.each(function () { $(this).val(parseFloat($(this).val()).toFixed(2)); });
                float_inputs.on('change',function() {
                    $(this).val(parseFloat($(this).val()).toFixed(2));
                });
                $("input").on('change', function() {
                    c.formChanged = true;
                });
                $("select").on('change', function() {
                    c.formChanged = true;
                });
            });
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
    onCancel(){
        if(this.formChanged) {
            if (confirm('Your changes will be lost, Are You Sure ?')) this.router.navigate(['/products']);
        }
        else {
            this.router.navigate(['/products']);
        }
        return false;
    }

}
