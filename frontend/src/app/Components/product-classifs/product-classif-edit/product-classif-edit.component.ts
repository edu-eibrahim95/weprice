import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {ProductClassif} from "../../../Models/product_classif";
import {ProductClassifService} from "../../../Services/product-classif.service";
import * as $ from 'jquery';

@Component({
    selector: 'app-product-classif-edit',
    templateUrl: './product-classif-edit.component.html',
    styleUrls: ['./product-classif-edit.component.css']
})
export class ProductClassifEditComponent implements OnInit {
    formChanged = false;
    productClassifSubs: Subscription;
    product_classif : ProductClassif;
    constructor(private productClassifApi: ProductClassifService, private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
        this.productClassifSubs = this.productClassifApi.getProductClassif(this.route.params['value']['rule_id']).subscribe(res => {
            this.product_classif = res['product_classif'];
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
    }

    onSubmit(f: NgForm) {
        f.value.initial_flag = (f.value.initial_flag) ? 1 : 0 ;
        let user = JSON.stringify(f.value);
        this.productClassifSubs = this.productClassifApi.editProductClassif(this.product_classif.id, user).subscribe(res => {
                if (res == 1 ){
                    this.router.navigate(['/product_classifs']);
                    location.reload();
                }
            },
            console.error
        );
    }
    onCancel(){
        if(this.formChanged) {
            if (confirm('Your changes will be lost, Are You Sure ?')) this.router.navigate(['/product_classifs']);
        }
        else {
            this.router.navigate(['/product_classifs']);
        }
        return false;
    }

}
