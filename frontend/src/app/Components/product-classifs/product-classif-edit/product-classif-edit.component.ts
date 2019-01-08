import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {ProductClassif} from "../../../Models/product_classif";
import {ProductClassifService} from "../../../Services/product-classif.service";

@Component({
    selector: 'app-product-classif-edit',
    templateUrl: './product-classif-edit.component.html',
    styleUrls: ['./product-classif-edit.component.css']
})
export class ProductClassifEditComponent implements OnInit {

    productClassifSubs: Subscription;
    product_classif : ProductClassif;
    constructor(private productClassifApi: ProductClassifService, private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
        this.productClassifSubs = this.productClassifApi.getProductClassif(this.route.params['value']['rule_id']).subscribe(res => {
            this.product_classif = res['product_classif'];
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
        if (confirm('Your changes will be lost, Are You Sure ?') ) this.router.navigate(['/product_classifs']);
        return false;
    }

}
