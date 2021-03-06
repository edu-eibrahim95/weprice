import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {Product} from "../../../Models/product";
import {ProductService} from "../../../Services/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {ProductClassif} from "../../../Models/product_classif";
import {ProductClassifService} from "../../../Services/product-classif.service";
import * as $ from 'jquery';
import swal from "sweetalert2";
import {Title} from "@angular/platform-browser";
import {TranslateService} from "@ngx-translate/core";

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
    constructor(private productsApi: ProductService, private router: Router, private route: ActivatedRoute, private productClassifApi: ProductClassifService, private titleService: Title, private translate: TranslateService) { }

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
            let c = this;
            swal({type: 'warning', title: this.translate.instant("globals.are_you_sure") , text: this.translate.instant("globals.changes_will_be_lost") , showCancelButton: true})
                .then(function(result){if (! result.dismiss){c.router.navigate(['/products']);}});
        }
        else {
            this.router.navigate(['/products']);
        }
        return false;
    }

}
