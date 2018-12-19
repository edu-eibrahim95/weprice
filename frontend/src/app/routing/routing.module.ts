import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "../Components/home/home.component";
import {SignUpComponent} from "../Components/auth/sign-up/sign-up.component";
import {SignInComponent} from "../Components/auth/sign-in/sign-in.component";
import {AuthGuard} from "../_guards/auth.guard";
import {AuthenticatedGuard} from "../_guards/authenticated.guard";
import {BranchesOverviewComponent} from "../Components/branches/branches-overview/branches-overview.component";
import {BranchAddComponent} from "../Components/branches/branch-add/branch-add.component";
import {BrancheEditComponent} from "../Components/branches/branche-edit/branche-edit.component";
import {BranchesComponent} from "../Components/branches/branches.component";

const appRoutes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'register', component: SignUpComponent, canActivate: [AuthenticatedGuard]},
  { path: 'login', component: SignInComponent, canActivate: [AuthenticatedGuard]},

    { path: 'branches', component: BranchesComponent,
    children: [
      { path: '', component: BranchesOverviewComponent },
      { path: 'add', component: BranchAddComponent },
      { path: 'edit/:rule_id', component: BrancheEditComponent }
    ],
      canActivate: [AuthGuard]
  },

  // { path: '**', component: HomeComponent}
];



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
    exports: [
      RouterModule
   ],
  declarations: []
})
export class RoutingModule { }
