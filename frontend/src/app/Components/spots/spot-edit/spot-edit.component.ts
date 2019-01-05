import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {Spot} from "../../../Models/spot";
import {SpotService} from "../../../Services/spot.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-spot-edit',
  templateUrl: './spot-edit.component.html',
  styleUrls: ['./spot-edit.component.css']
})
export class SpotEditComponent implements OnInit {

 spotsSubs: Subscription;
    spot : Spot;
    constructor(private spotsApi: SpotService, private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
        this.spotsSubs = this.spotsApi.getSpot(this.route.params['value']['rule_id']).subscribe(res => {
            this.spot = res['spot'];
        });
    }

    onSubmit(f: NgForm) {
        let parameter = JSON.stringify(f.value);
        this.spotsSubs = this.spotsApi.editSpot(this.spot.id, parameter).subscribe(res => {
                if (res == 1 ){
                    this.router.navigate(['/spots']);
                    location.reload();
                }
            },
            console.error
        );
    }


}
