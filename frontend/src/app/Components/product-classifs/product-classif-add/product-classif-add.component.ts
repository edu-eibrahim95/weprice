import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {ProductClassif} from "../../../Models/product_classif";
import {ProductClassifService} from "../../../Services/product-classif.service";

@Component({
    selector: 'app-product-classif-add',
    templateUrl: './product-classif-add.component.html',
    styleUrls: ['./product-classif-add.component.css']
})
export class ProductClassifAddComponent implements OnInit {

    productsSubs: Subscription;
    product_classifs : ProductClassif[];

    constructor(private productClassif : ProductClassifService, private router: Router) { }

    ngOnInit() {
    }

    onSubmit(f: NgForm) {
        f.value.initial_flag = (f.value.initial_flag) ? 1 : 0 ;
        let product = JSON.stringify(f.value);
        this.productsSubs = this.productClassif.addProductClassif(product).subscribe(res => {
                if (res ==1 ){
                    this.router.navigate(['/product_classifs']);
                    location.reload();
                }
            },
            console.error
        );
    }



}
