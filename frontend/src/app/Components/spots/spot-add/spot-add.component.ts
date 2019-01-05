import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {Spot} from "../../../Models/spot";
import {SpotService} from "../../../Services/spot.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
    selector: 'app-spot-add',
    templateUrl: './spot-add.component.html',
    styleUrls: ['./spot-add.component.css']
})
export class SpotAddComponent implements OnInit {

    spotsSubs: Subscription;
    spots : Spot[];

    constructor(private spotsApi : SpotService, private router: Router) { }

    ngOnInit() {
    }

    onSubmit(f: NgForm) {
        let parameter = JSON.stringify(f.value);
        this.spotsSubs = this.spotsApi.addSpot(parameter).subscribe(res => {
                if (res ==1 ){
                    this.router.navigate(['/spots']);
                    location.reload();
                }
            },
            console.error
        );
    }

}
