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
import {BranchEditComponent} from "../Components/branches/branch-edit/branch-edit.component";
import {BranchesComponent} from "../Components/branches/branches.component";
import {CostCenterComponent} from "../Components/cost-centers/cost-center.component";
import {CostCenterOverviewComponent} from "../Components/cost-centers/cost-center-overview/cost-center-overview.component";
import {CostCenterAddComponent} from "../Components/cost-centers/cost-center-add/cost-center-add.component";
import {CostCenterEditComponent} from "../Components/cost-centers/cost-center-edit/cost-center-edit.component";
import {AccountsComponent} from "../Components/accounts/accounts.component";
import {AccountOverviewComponent} from "../Components/accounts/account-overview/account-overview.component";
import {AccountAddComponent} from "../Components/accounts/account-add/account-add.component";
import {AccountEditComponent} from "../Components/accounts/account-edit/account-edit.component";
import {TaxesComponent} from "../Components/taxes/taxes.component";
import {TaxOverviewComponent} from "../Components/taxes/tax-overview/tax-overview.component";
import {TaxAddComponent} from "../Components/taxes/tax-add/tax-add.component";
import {TaxEditComponent} from "../Components/taxes/tax-edit/tax-edit.component";
import {EmployeesComponent} from "../Components/employees/employees.component";
import {EmployeeOverviewComponent} from "../Components/employees/employee-overview/employee-overview.component";
import {EmployeeAddComponent} from "../Components/employees/employee-add/employee-add.component";
import {EmployeeEditComponent} from "../Components/employees/employee-edit/employee-edit.component";
import {ProductsComponent} from "../Components/products/products.component";
import {ProductOverviewComponent} from "../Components/products/product-overview/product-overview.component";
import {ProductAddComponent} from "../Components/products/product-add/product-add.component";
import {ProductEditComponent} from "../Components/products/product-edit/product-edit.component";
import {AssetsComponent} from "../Components/assets/assets.component";
import {AssetOverviewComponent} from "../Components/assets/asset-overview/asset-overview.component";
import {AssetAddComponent} from "../Components/assets/asset-add/asset-add.component";
import {AssetEditComponent} from "../Components/assets/asset-edit/asset-edit.component";
import {SocialChargesComponent} from "../Components/social-charges/social-charges.component";
import {SocialChargeOverviewComponent} from "../Components/social-charges/social-charge-overview/social-charge-overview.component";
import {SocialChargeAddComponent} from "../Components/social-charges/social-charge-add/social-charge-add.component";
import {SocialChargeEditComponent} from "../Components/social-charges/social-charge-edit/social-charge-edit.component";
import {ParametersComponent} from "../Components/parameters/parameters.component";
import {ParameterOverviewComponent} from "../Components/parameters/parameter-overview/parameter-overview.component";
import {ParameterAddComponent} from "../Components/parameters/parameter-add/parameter-add.component";
import {ParameterEditComponent} from "../Components/parameters/parameter-edit/parameter-edit.component";
import {UsersComponent} from "../Components/users/users.component";
import {UserOverviewComponent} from "../Components/users/user-overview/user-overview.component";
import {UserAddComponent} from "../Components/users/user-add/user-add.component";
import {UserEditComponent} from "../Components/users/user-edit/user-edit.component";
import {ProductClassif} from "../Models/product_classif";
import {ProductClassifOverviewComponent} from "../Components/product-classifs/product-classif-overview/product-classif-overview.component";
import {ProductClassifAddComponent} from "../Components/product-classifs/product-classif-add/product-classif-add.component";
import {ProductClassifEditComponent} from "../Components/product-classifs/product-classif-edit/product-classif-edit.component";
import {ProductClassifsComponent} from "../Components/product-classifs/product-classifs.component";
import {AssetTypesComponent} from "../Components/asset-types/asset-types.component";
import {AssetTypeAddComponent} from "../Components/asset-types/asset-type-add/asset-type-add.component";
import {AssetTypeOverviewComponent} from "../Components/asset-types/asset-type-overview/asset-type-overview.component";
import {AssetTypeEditComponent} from "../Components/asset-types/asset-type-edit/asset-type-edit.component";
import {LocalsComponent} from "../Components/locals/locals.component";
import {LocalOverviewComponent} from "../Components/locals/local-overview/local-overview.component";
import {LocalAddComponent} from "../Components/locals/local-add/local-add.component";
import {LocalEditComponent} from "../Components/locals/local-edit/local-edit.component";
import {SpotsComponent} from "../Components/spots/spots.component";
import {SpotOverviewComponent} from "../Components/spots/spot-overview/spot-overview.component";
import {SpotAddComponent} from "../Components/spots/spot-add/spot-add.component";
import {SpotEditComponent} from "../Components/spots/spot-edit/spot-edit.component";

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard]},
    { path: 'register', component: SignUpComponent, canActivate: [AuthenticatedGuard]},
    { path: 'login', component: SignInComponent, canActivate: [AuthenticatedGuard]},

    { path: 'branches', component: BranchesComponent,
        children: [
            { path: '', component: BranchesOverviewComponent },
            { path: 'add', component: BranchAddComponent },
            { path: 'edit/:rule_id', component: BranchEditComponent }
        ],
        canActivate: [AuthGuard]
    },
    { path: 'cost_centers', component: CostCenterComponent,
        children: [
            { path: '', component: CostCenterOverviewComponent },
            { path: 'add', component: CostCenterAddComponent },
            { path: 'edit/:rule_id', component: CostCenterEditComponent }
        ],
        canActivate: [AuthGuard]
    },
    { path: 'accounts', component: AccountsComponent,
        children: [
            { path: '', component: AccountOverviewComponent },
            { path: 'add', component: AccountAddComponent },
            { path: 'edit/:rule_id', component: AccountEditComponent }
        ],
        canActivate: [AuthGuard]
    },
    { path: 'products', component: ProductsComponent,
        children: [
            { path: '', component: ProductOverviewComponent },
            { path: 'add', component: ProductAddComponent },
            { path: ':type', component: ProductOverviewComponent },
            { path: 'edit/:rule_id', component: ProductEditComponent }
        ],
        canActivate: [AuthGuard]
    },
    { path: 'employees', component: EmployeesComponent,
        children: [
            { path: '', component: EmployeeOverviewComponent },
            { path: 'add', component: EmployeeAddComponent },
            { path: 'edit/:rule_id', component: EmployeeEditComponent }
        ],
        canActivate: [AuthGuard]
    },
    { path: 'assets', component: AssetsComponent,
        children: [
            { path: '', component: AssetOverviewComponent },
            { path: 'add', component: AssetAddComponent },
            { path: 'edit/:rule_id', component: AssetEditComponent }
        ],
        canActivate: [AuthGuard]
    },
    { path: 'taxes', component: TaxesComponent,
        children: [
            { path: '', component: TaxOverviewComponent },
            { path: 'add', component: TaxAddComponent },
            { path: 'edit/:rule_id', component: TaxEditComponent }
        ],
        canActivate: [AuthGuard]
    },
    { path: 'social_charges', component: SocialChargesComponent,
        children: [
            { path: '', component: SocialChargeOverviewComponent },
            { path: 'add', component: SocialChargeAddComponent },
            { path: 'edit/:rule_id', component: SocialChargeEditComponent }
        ],
        canActivate: [AuthGuard]
    },
    { path: 'parameters', component: ParametersComponent,
        children: [
            { path: '', component: ParameterOverviewComponent },
            { path: 'add', component: ParameterAddComponent },
            { path: 'edit/:rule_id', component: ParameterEditComponent }
        ],
        canActivate: [AuthGuard]
    },
    { path: 'users', component: UsersComponent,
        children: [
            { path: '', component: UserOverviewComponent },
            { path: 'add', component: UserAddComponent },
            { path: 'edit/:rule_id', component: UserEditComponent }
        ],
        canActivate: [AuthGuard]
    },
    { path: 'product_classifs', component: ProductClassifsComponent,
        children: [
            { path: '', component: ProductClassifOverviewComponent },
            { path: 'add', component: ProductClassifAddComponent },
            { path: 'edit/:rule_id', component: ProductClassifEditComponent }
        ],
        canActivate: [AuthGuard]
    },
    { path: 'asset_types', component: AssetTypesComponent,
        children: [
            { path: '', component: AssetTypeOverviewComponent },
            { path: 'add', component: AssetTypeAddComponent },
            { path: 'edit/:rule_id', component: AssetTypeEditComponent }
        ],
        canActivate: [AuthGuard]
    },
    { path: 'locals', component: LocalsComponent,
        children: [
            { path: '', component: LocalOverviewComponent },
            { path: 'add', component: LocalAddComponent },
            { path: 'edit/:rule_id', component: LocalEditComponent }
        ],
        canActivate: [AuthGuard]
    },
    { path: 'spots', component: SpotsComponent,
        children: [
            { path: '', component: SpotOverviewComponent },
            { path: 'add', component: SpotAddComponent },
            { path: 'edit/:rule_id', component: SpotEditComponent }
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
