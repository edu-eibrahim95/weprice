import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import {RoutingModule} from "./routing/routing.module";
import { SignUpComponent } from './Components/auth/sign-up/sign-up.component';
import { SignInComponent } from './Components/auth/sign-in/sign-in.component';
import { AuthGuard } from './_guards/auth.guard';
import { FormsModule }   from '@angular/forms';
import {ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "./Services/auth.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthenticatedGuard} from "./_guards/authenticated.guard";
import { BranchesOverviewComponent } from './Components/branches/branches-overview/branches-overview.component';
import { BranchEditComponent } from './Components/branches/branch-edit/branch-edit.component';
import { BranchAddComponent } from './Components/branches/branch-add/branch-add.component';
import { BranchesComponent } from './Components/branches/branches.component';
import {InstallationService} from "./Services/installation.service";
import {JwtInterceptor} from "./_helpers/jwt.interceptor";
import {ErrorInterceptor} from "./_helpers/error.interceptor";
import {BranchService} from "./Services/branch.service";
import { AgGridModule } from 'ag-grid-angular';
import {ActionsFormatterComponent} from "./Components/partials/action-cell-rendrer/action-cell-rendrer.component";
import { CostCenterComponent } from './Components/cost-centers/cost-center.component';
import { CostCenterOverviewComponent } from './Components/cost-centers/cost-center-overview/cost-center-overview.component';
import { CostCenterAddComponent } from './Components/cost-centers/cost-center-add/cost-center-add.component';
import { CostCenterEditComponent } from './Components/cost-centers/cost-center-edit/cost-center-edit.component';
import {DetailsFormatterComponent} from "./Components/partials/cost-center-details/cost-center-details.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatTabsModule} from "@angular/material";
import { AccountsComponent } from './Components/accounts/accounts.component';
import { AccountOverviewComponent } from './Components/accounts/account-overview/account-overview.component';
import { AccountAddComponent } from './Components/accounts/account-add/account-add.component';
import { AccountEditComponent } from './Components/accounts/account-edit/account-edit.component';
import { TaxesComponent } from './Components/taxes/taxes.component';
import { TaxEditComponent } from './Components/taxes/tax-edit/tax-edit.component';
import { TaxOverviewComponent } from './Components/taxes/tax-overview/tax-overview.component';
import { EmployeesComponent } from './Components/employees/employees.component';
import { EmployeeOverviewComponent } from './Components/employees/employee-overview/employee-overview.component';
import { EmployeeAddComponent } from './Components/employees/employee-add/employee-add.component';
import { EmployeeEditComponent } from './Components/employees/employee-edit/employee-edit.component';
import { ProductsComponent } from './Components/products/products.component';
import { ProductOverviewComponent } from './Components/products/product-overview/product-overview.component';
import { ProductAddComponent } from './Components/products/product-add/product-add.component';
import { ProductEditComponent } from './Components/products/product-edit/product-edit.component';
import { AssetsComponent } from './Components/assets/assets.component';
import { AssetOverviewComponent } from './Components/assets/asset-overview/asset-overview.component';
import { AssetAddComponent } from './Components/assets/asset-add/asset-add.component';
import { AssetEditComponent } from './Components/assets/asset-edit/asset-edit.component';
import { SocialChargesComponent } from './Components/social-charges/social-charges.component';
import { SocialChargeOverviewComponent } from './Components/social-charges/social-charge-overview/social-charge-overview.component';
import { SocialChargeAddComponent } from './Components/social-charges/social-charge-add/social-charge-add.component';
import { SocialChargeEditComponent } from './Components/social-charges/social-charge-edit/social-charge-edit.component';
import { ParametersComponent } from './Components/parameters/parameters.component';
import { ParameterOverviewComponent } from './Components/parameters/parameter-overview/parameter-overview.component';
import { ParameterAddComponent } from './Components/parameters/parameter-add/parameter-add.component';
import { ParameterEditComponent } from './Components/parameters/parameter-edit/parameter-edit.component';
import { UsersComponent } from './Components/users/users.component';
import { UserOverviewComponent } from './Components/users/user-overview/user-overview.component';
import { UserAddComponent } from './Components/users/user-add/user-add.component';
import { UserEditComponent } from './Components/users/user-edit/user-edit.component';
import {TaxAddComponent} from "./Components/taxes/tax-add/tax-add.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignUpComponent,
    SignInComponent,
    BranchesOverviewComponent,
    BranchEditComponent,
    BranchAddComponent,
    BranchesComponent,
    ActionsFormatterComponent,
    CostCenterComponent,
    CostCenterOverviewComponent,
    CostCenterAddComponent,
    CostCenterEditComponent,
    DetailsFormatterComponent,
    AccountsComponent,
    AccountOverviewComponent,
    AccountAddComponent,
    AccountEditComponent,
    TaxesComponent,
    TaxAddComponent,
    TaxEditComponent,
    TaxOverviewComponent,
    EmployeesComponent,
    EmployeeOverviewComponent,
    EmployeeAddComponent,
    EmployeeEditComponent,
    ProductsComponent,
    ProductOverviewComponent,
    ProductAddComponent,
    ProductEditComponent,
    AssetsComponent,
    AssetOverviewComponent,
    AssetAddComponent,
    AssetEditComponent,
    SocialChargesComponent,
    SocialChargeOverviewComponent,
    SocialChargeAddComponent,
    SocialChargeEditComponent,
    ParametersComponent,
    ParameterOverviewComponent,
    ParameterAddComponent,
    ParameterEditComponent,
    UsersComponent,
    UserOverviewComponent,
    UserAddComponent,
    UserEditComponent
  ],
  entryComponents: [
    ActionsFormatterComponent,
    DetailsFormatterComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgGridModule.withComponents([]),
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [
    AuthGuard,
    AuthenticatedGuard,
    AuthService,
    InstallationService,
    BranchService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
